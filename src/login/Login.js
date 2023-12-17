import React from "react";
import { useState } from "react";
import axios from "axios";

function Login({name,pw}){


  var [inputText, setInputText] = useState({
    userID: '',
    userPW: ''
  });

  const {userID, userPW} = inputText;


  const onChange = (e) => {
    const {value, name} = e.target;
    setInputText({
      ...inputText,
      [name]: value
    });

    console.log("id:"+userID);
  };

  function loginbt(){

    axios.post('/auth/login', {
      user_id : userID,
      user_pw : userPW,
    }).then(function (response){
      console.log(response.data)

   });

  }



  



  return (
    <div>
      <h1>로그인 페이지</h1>

          아이디 <input name='userID' placeholder='아이디' onChange={onChange} value={userID}/> <br></br>
          비밀번호 <input name='userPW' placeholder='비밀번호' onChange={onChange} value={userPW}/> <br></br>

          

          <button onClick={loginbt}>로그인</button>

          

    </div>

  );
}

export default Login;