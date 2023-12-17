import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Login from './login/Login';
import Chiltest from './Chiltest/Chiltest';
import Bello from './Bello';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSamples from './InputSamples';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // BrowserRouter 변경




function App() {
  const [data3, setData3] = useState(null); // 초기값은 null 또는 다른 값으로 설정

  const [text, setText] = useState(0);


  var [locate1, setLocate1] = useState(0);
  var [locate2, setLocate2] = useState(0);
  var [nowTem, setNowTem] = useState(0);
  var [nowRain, setNowRain] = useState(0);


  useEffect(() => {
    // useEffect를 사용하여 데이터를 가져오고 data3를 업데이트
    axios.get('/api/ttt')
      .then(function (response) {
        console.log(response.data)
        setData3(response.data);



        
      
        navigator.geolocation.getCurrentPosition((position) => {
          locate1 = position.coords.latitude;
      
          console.log(position)
          locate1 = position.coords.latitude;
          locate2 = position.coords.altitude;
        }); 




        

      })
      .catch(function (err) {
        console.log(err);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  console.log("되는거야1?332323232323");
  console.log("되는거야2?");

  // 현재 위치를 확인하는 메소드

  function chkWc (){

    console.log(locate1)

    navigator.geolocation.getCurrentPosition((position) => {

      console.log(position);
      locate1 = position.coords.latitude;
      locate2 = position.coords.longitude;
      

      axios.post('/api/wheaterChk', {
        nowTime : position.timestamp,
        nowlatitude : position.coords.latitude,
        nowlongitude : position.coords.longitude
      }).then(function (response){
        console.log(response.data)
        setNowTem(response.data.chktem);
        setNowRain(response.data.chksky);

      });



    });

    setLocate1(locate1);
    setLocate2(locate2);



  }
  

  return (
    <div className="App">

      <Chiltest>

        <Bello name="김영희" color="red"/> 
        <Login name={"김철수"} pw={"김비번 호출"}/>
        <Login pw={"!23124"}/>
      </Chiltest>

      <Counter>
        
      </Counter>
      <InputSample/>
      <InputSamples/>

      위도 : {locate1} <br/>
      경도 : {locate2} <br/>
      현재온도 : {nowTem}<br/>
      강수상태 : {nowRain}<br/>

      <button onClick={chkWc}>확인</button><br/>

      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/Login">로그인</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />

        {/* 다른 라우트들 추가 */}
      </Routes>
      
    </div>        
      


  );
}

export default App;
