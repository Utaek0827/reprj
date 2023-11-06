import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data3, setData3] = useState(null); // 초기값은 null 또는 다른 값으로 설정

  useEffect(() => {
    // useEffect를 사용하여 데이터를 가져오고 data3를 업데이트
    axios.get('/api/ttt')
      .then(function (response) {
        console.log(response.data)
        setData3(response.data);
        

      })
      .catch(function (err) {
        console.log(err);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  console.log("되는거야1?");
    
  console.log("되는거야2?");

  return (
    <div className="App">
      


    </div>
  );
}

export default App;
