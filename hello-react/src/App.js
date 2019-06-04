import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const text = "Hello React";
  const condition = true;
  const style = {
    backgroundColor:'gray',
    border:'1px solid black',
    height: Math.round(Math.random()*300) + 50,
    width: Math.floor(Math.random()*300)+44,
    WebKitTransition:'all',
    transition:'all',
    marginTop:'40px'
  }
  return (
    <div className="my-div">
      {/* 요소 밖 주석 */}
      <h4>aaaaaa</h4>
      <h6>{text}</h6>
      {condition && '보여주시뇨'}
      <div style={style}
      // 요소 안 주석
      /* 또한 이렇게 */
      />
      {/* 위의 것 처럼 self-close 요소 안에 주석 */}
        /* 출력 */
        // 출력
    </div>
  );
}

export default App;
