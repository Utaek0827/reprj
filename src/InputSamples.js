import React, {useState} from 'react';

function InputSamples() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname:''
  });

  const {name, nickname} = inputs;

  const onChange = (e) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name:'',
      nickname:'',
    })
  };

  return (
    <div>
      <input name='name' placeholder='이름' onChange={onChange} value={name}/>
      <button onClick={onReset}>인풋 여러개 초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSamples;