import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SockJS from 'sockjs-client'; 
import {over} from 'stompjs';
const RoomWithPassword = () => {
    console.log("Перенаправления на чаты пройдено успешно!")

    const [chatRoomWithPassword, setChatRoomWithPassword] = useState(new Map());    //Хранение комнат с пользователями
    const {username, password} = useParams(); // Получаем username и password одновременно
    const [serverInformation, setServerInformation] = useState(new Map());

useEffect(()=>{
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({},onConnected, onError);
}, []);


//УДАЛЕНИЕ
var stompClient = null;
const [publicChats, setPublicChats] = useState([]); 

const [tab,setTab] =useState("CHATROOM");
const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  });


const connect =()=>{
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({},onConnected, onError);
}

const onConnected = () => {
    setUserData({...userData,"connected": true});
    stompClient.subscribe('/chatroom/public', onMessageReceived);
    stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
    userJoin();
}

const userJoin=()=>{
      var chatMessage = {
        senderName: userData.username,
        status:"JOIN"
      };
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
}

const onMessageReceived = (payload)=>{
    var payloadData = JSON.parse(payload.body);
    switch(payloadData.status){
        case "JOIN":
            if(!chatRoomWithPassword.get(payloadData.senderName)){
                chatRoomWithPassword.set(payloadData.senderName,[]);
                setPrivateChats(new Map(chatRoomWithPassword));
            }
            break;
        case "MESSAGE":
            publicChats.push(payloadData);
            setPublicChats([...publicChats]);
            break;
    }
}

const onPrivateMessage = (payload)=>{
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if(chatRoomWithPassword.get(payloadData.senderName)){
        chatRoomWithPassword.get(payloadData.senderName).push(payloadData);
        setPrivateChats(new Map(chatRoomWithPassword));
    }else{
        let list =[];
        list.push(payloadData);
        chatRoomWithPassword.set(payloadData.senderName,list);
        setPrivateChats(new Map(chatRoomWithPassword));
    }
}

const onError = (err) => {
    console.log(err);
    
}

const handleMessage =(event)=>{
    const {value}=event.target;
    setUserData({...userData,"message": value});
}
const sendValue=()=>{
        if (stompClient) {
          var chatMessage = {
            senderName: userData.username,
            message: userData.message,
            status:"MESSAGE"
          };
          console.log(chatMessage);
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": ""});
        }
}

const sendPrivateValue=()=>{
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName:tab,
        message: userData.message,
        status:"MESSAGE"
      };
      
      if(userData.username !== tab){
        chatRoomWithPassword.get(tab).push(chatMessage);
        setPrivateChats(new Map(chatRoomWithPassword));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({...userData,"message": ""});
    }
}

const handleUsername=(event)=>{
    const {value}=event.target;
    setUserData({...userData,"username": value});
}
//Удаление




























    //Обновление чатов с пользователями
    const clickButton = () =>{
        axios.get('http://localhost:8080/end-point').then(response => {
            console.log("=============================================================");
            console.log("CLICK-BUTTON")
            console.log("Прожатие кнопки: UPDATE -> пришла информация с BACK-END -> " + JSON.stringify(response));
            //Проверка можно ли преобраовать серверные данные в Map
            if(response.data instanceof Map){
                console.log("SERVER DATA -> MAP!");
            } else{
                console.log("SERVER DATA IS NOT MAP!");
            }
            console.log(".......ПОПЫТКА ПРЕОБРАЗОВАНИЯ В MAP.........");
            let data = new Map(Object.entries(response.data));
            console.log(".......ПРЕОБРАЗОВАНИЕ ДАННЫХ ПРОИЗОШЛО УСПЕШНО........");
            console.log("СЕРВЕРНАЯ ИНФОРМАЦИЯ: " + response.data);
            console.log("Размер прихода серверной информации:" + data.size);
            setServerInformation(data);
            console.log("РАЗМЕР ИНФОРМАЦИИ СОХРАНЕННОЙ КЛИЕНТОМ: " + serverInformation.size);
            //Сравнение данных с сервера с переданными данными
            let bufferMap = new Map();
            //Сравнение полученной серверной информацией с текущим пользователем!
            for (let [key, value] of data.entries()) {
                console.log("Пароль с сервера: " + value);
                if(value == password && username != key){
                    console.log("SUCCESS PASSWORD!");
                    bufferMap.set(key, password);
                } else{
                    console.log("FAILED PASSWORD!");
                }
            }
            setChatRoomWithPassword(bufferMap);
            console.log("РАЗМЕР БУФЕРНОЙ КОМНАТЫ: " + bufferMap.size);
            console.log("РАЗМЕР КОМНАТЫ ИТОГОВОЙ: " + chatRoomWithPassword.size);
            console.log("=============================================================");
        }).catch(error => {
            console.log("ERROR UPDATE with: " + error);
        });

    }

    console.log("Развертывание компонента!");
    return (
        // <div>
        //     {/* Отображаем информацию о каждом чате */}
        //     {[...chatRoomWithPassword.keys()].map((name, index) => (
        //         <div key={index}>
        //             <h2>Чат: {name}</h2>
        //             <p> Пароль: {index }</p>
        //         </div>
        //     ))}
        //     <button type="button" onClick={() => clickButton()}>update</button>
        // </div>
      
<div className="container">
        <div className="chat-box">
            <div className="member-list">
            <button type="button" onClick={() => clickButton()}>update</button>
                <ul>
                    {[...chatRoomWithPassword.keys()].map((name,index)=>(
                        <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{name}</li>
                    ))}
                </ul>
            </div>
            {tab==="CHATROOM" && <div className="chat-content">
                <ul className="chat-messages">
                    {publicChats.map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                </ul>

                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendValue}>send</button>
                </div>
            </div>}
            {tab!=="CHATROOM" && <div className="chat-content">
                <ul className="chat-messages">
                    {[...chatRoomWithPassword.get(tab)].map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
                </ul>

                <div className="send-message">
                    <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
                    <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
                </div>
            </div>}
        </div>
    </div> 

    )
}

export default RoomWithPassword;