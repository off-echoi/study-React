import React, { Component } from 'react';
// import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample.js';
import ScrollBox from './ScrollBox.js';
import SampleList from './SampleList.js';

class App extends Component {
  render() { 
    return (
      <div>
      {/* 문자열 이외의 값을 컴포넌트에 전달할 때는 {}로 감싸야 함
      문자열은 name ="" 문자열은 {} 안에 담길 수 없다.
       <MyComponent name="React" age={3}/>
      
        <MyComponent name={2} age={3}/>
        이 경우 출력은 되지만 proptypes.string 으로 인해 콘솔창에 에러 발생
                <EventPractice/>
        <ValidationSample/> */}
        {/* <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>
        <button onClick={()=>this.ScrollBox.scrollBottom()}>맨밑으로</button> */}
        <SampleList/>
      </div>
    );
  }
}

export default App;
