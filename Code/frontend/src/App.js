import React from 'react'
//import PasswordRoom from "./component/PasswordRoom" //Для проверки работы комнаты пароля
import ChatRoom from "./component/ChatRoom"
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom'
import PasswordRoom from './component/PasswordRoom'
import RoomWithPassword from "./component/RoomWithPasswordChat"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatRoom/>}/>                              {/**Для включение текущего пакета! */}
        <Route path="/PasswordRoom/:username" element={<PasswordRoom/>} />   {/*Для создания пароля да комнаты*/}
        <Route path="/RoomWithPassword/:username/:password" element={<RoomWithPassword/>} />  {/**Конмната для отображения людей, которые создали чат */} 
      </Routes>
    </Router>
  );
}

export default App;
