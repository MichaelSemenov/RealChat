import React, { useState } from 'react';
import {over} from 'stompjs';
import SockJS from 'sockjs-client'; 
import {Navigate} from 'react-router-dom';

var stompClient = null;

const ChatRoom = () => {

//     const [publicChats, setpublicChats] = useState([]);
//     const [privateChats, setPrivateChats] = useState(new Map());
//     const [tab, setTab] = useState("CHATROOM");
//     const [redirect, setRedirect] = useState(false);
//     //Для создания чатов при входе с паролем
//     const [userData, setUserData] = useState({
//         username: "",
//         recievername: "",
//         connected: false,
//         message: ""
//     })

//     console.log("Количество чатов в Map(): " + privateChats.size);

// const handleValue = (event) =>{
//  const {value, name} = event.target;
//  const userInfo = {...userData};
//  console.log("Выводное знаение: " + JSON.stringify());
//  setUserData({...userData, [name]:value});
// }
// const handleMessage = (event) =>{
//     const {value} = event.target; 
//     setUserData({...userData, "message":value});
//    }
//     const registerUserName = ()=>{
//         let Sock = new SockJS('http://localhost:8080/ws');
//         stompClient = over(Sock);
//         stompClient.connect({}, onConnected, onError);
//     }


// const onConnected =() =>{
//     setUserData({...userData, "connected":true});
//     stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
//     stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessageReceived);
//     userJoin();

// }
// const userJoin = () => {

//     let chatMessage={
//         senderName: userData.username,
//         status:'JOIN'
//     }
//     stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
// }
// const onPublicMessageReceived = (payload) =>{
//     let payloadData = JSON.parse(payload.body);
//     switch(payloadData.status){
//         case "JOIN": 
//         if(!privateChats.get(payloadData.senderName)){
//             privateChats.set(payloadData.senderName, []); 
//             setPrivateChats(new Map(privateChats));
//         }
//             break;
//         case "MESSAGE":
//             publicChats.push(payloadData);
//             setpublicChats([...publicChats]);
//             break;
//     }
// }
// const onError = (err) =>{
//     console.log(err);
// }
// const onPrivateMessageReceived = (payload) => {
//     let payloadData = JSON.parse(payload);
//     if(privateChats.get(payloadData.senderName)){
//         privateChats.get(payloadData.senderName).push(payloadData); 
//         setPrivateChats(new Map(privateChats));
//     } else{
//         let list = [];
//         list.push(payloadData);
//         privateChats.set(payloadData.senderName, list); 
//         setPrivateChats(new Map(privateChats));
//     }
// }
// const sendPublicMessage = () =>{
//     if(stompClient){
//         let chatMessage = {
//             sendername: userData.username,
//             message: userData.message,
//             status: 'MESSAGE'
//         };
//         stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
//         setUserData({...userData, "message":""});
//     }
// }
// const sendPrivateMessage = () =>{
//     if(stompClient){
//         let chatMessage = {
//             sendername: userData.username,
//             recievername: tab, 
//             message: userData.message,
//             status: 'MESSAGE'
//         };    
//         if(userData.username !== tab ){{
//             privateChats.get(tab).push(chatMessage);
//             setPrivateChats(new Map(privateChats));
//         }}
//         stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
//         setUserData({...userData, "message":""});
//     }
// }
const [redirect, setRedirect] = useState(false);
const [privateChats, setPrivateChats] = useState(new Map());     
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
                if(!privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName,[]);
                    setPrivateChats(new Map(privateChats));
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
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderName,list);
            setPrivateChats(new Map(privateChats));
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
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
          }
          stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": ""});
        }
    }

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }

    const registerUser=()=>{
        connect();
    }




//     return(
// <div className="container"> 
// {userData.connected?

// <div className="chat-box">
// <div className="member-list">
// <button type='button' className='button-plus' onClick={()=>setRedirect(true)}>+</button>
// {redirect && <Navigate to={`/PasswordRoom/${userData.username}`} replace/>}
// <ul>
// <li onClick={() =>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`} >ChatRoom</li>
//  {[...privateChats.keys()].map((name, index) =>(
// <li onClick={() =>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>
// {name}
// </li>
// ))}
// </ul>
// </div>
// {tab === "CHATROOM" && <div class="chat-content">
// <ul className="chat-messages">
// {publicChats.map((chat, index) =>(
// <li className="message" key={index}>
// {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
// <div className="message-data">{chat.message}</div>
//   {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//  </li>
//  ))}
// </ul>
//  <div className='send-message'>
//   <input type="text" className="input-message" name='message' placeholder='Enter your public message' value={userData.message}
// onChange={handleMessage}/>
// {/* Сделал тут изменение */}
//  <button type='button' className="send-button" onClick={sendPublicMessage} > send </button>
//   </div>

// </div>}
// {tab !== "CHATROOM" && <div class="chat-content">
// <ul className="chat-messages">
// {[...privateChats.get(tab)].map((chat, index) =>(
//  <li className="message" key={index}>
//  {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//   <div className="message-data">{chat.message}</div>
// {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
// </li>
// ))}
// </ul>
// <div className='send-message'>
// <input type="text" className="input-message" name='message' placeholder={`Enter your private message for ${tab}`} value={userData.message}
//  onChange={handleMessage} />
//  {/* Сделал тут изменение */}
//  <button type='button' className="send-button" onClick={sendPrivateMessage} > send </button>
//  </div>

//                    </div>}
// </div>
//             :
//         <div className='register'>
// <input
// id='user-name'
// name='username'
// placeholder='Enter the user name'
// value={userData.username}
// onChange={handleValue}
// />
// <button type='button' onClick={registerUserName}>
//     connected
// </button>
// </div>}
// </div>
// )

return (
    <div className="container">
        {userData.connected?
        <div className="chat-box">
            <div className="member-list">
            <button type='button' className='button-plus' onClick={()=>setRedirect(true)}>+</button>
            {redirect && <Navigate to={`/PasswordRoom/${userData.username}`} replace/>}
                <ul>
                    <li onClick={()=>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}>Chatroom</li>
                    {[...privateChats.keys()].map((name,index)=>(
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
                    {[...privateChats.get(tab)].map((chat,index)=>(
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
        :
        <div className="register">
            <input
                id="user-name"
                placeholder="Enter your name"
                name="userName"
                value={userData.username}
                onChange={handleUsername}
                margin="normal"
              />
              <button type="button" onClick={registerUser}>
                    connect
              </button> 
        </div>}
    </div>
    )

}
export default ChatRoom;