import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const text = "Hello React";
  const condition = true;
  const style = {
    // 인라인 스타일은 카멜 스타일로
    backgroundColor:'gray',
    border:'1px solid black',
    height: Math.round(Math.random()*300) + 50,
    width: Math.floor(Math.random()*300)+44,
    WebKitTransition:'all',
    transition:'all',
    marginTop:'40px'
  }
  return (
    // class 말고 className 쓰기
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
