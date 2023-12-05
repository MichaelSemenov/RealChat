import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const PasswordRoom = () =>{

    let {username} = useParams();
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
        console.log("Создание комнаты c usename: " + username + " с паролем: " + password);
    }


    //Для изменения состояния при переходе
    const handleOpenClick = () =>{
        console.log("======================================================");
        console.log("SEND DATA INFORMATIONS!");
        setRedirect(true);
        axios.get(`http://localhost:8080/save-information/${username}/${password}`).then(response => {
            console.log("ОТВЕТНОЕ СООБЩЕНИЕ СЕРВЕРА: " + response);
        }).catch(error => {
            console.log("ОШИБКА ОТПРАВКИ ДАННЫХ НА СЕРВЕР: " + error);
        });
        console.log("======================================================");
    }

    console.log("Переданная информация из вне: " + username);
    return (
        <div className="container">
        <input type="password" placeholder={`Password for ${username}`} id="password" value={password} onChange={handlePasswordChange}/>
        <button type="button" id="open" onClick={handleOpenClick} >Оpen</button>
        {redirect && <Navigate to={`/RoomWithPassword/${username}/${password}` }replace/>}
    </div>      
    )
}

export default PasswordRoom;