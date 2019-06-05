import React, { Component } from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';

class App extends Component {
  render() {
    return (
      // 문자열 이외의 값을 컴포넌트에 전달할 때는 {}로 감싸야 함
      // 문자열은 name ="" 문자열은 {} 안에 담길 수 없다.
      //  <MyComponent name="React" age={3}/>
      
        // <MyComponent name={2} age={3}/>
        // 이 경우 출력은 되지만 proptypes.string 으로 인해 콘솔창에 에러 발생
        
        <EventPractice/>

    );
  }
}

export default App;

// import React from 'react';
// import MyComponent from './MyComponent';

// function App() {
//     return ( 
//       
//        <MyComponent name="react"></MyComponent>
//     );
// }

// export default App;