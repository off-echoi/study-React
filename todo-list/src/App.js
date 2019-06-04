import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
      // 문자열 이외의 값을 컴포넌트에 전달할 때는 {}로 감싸야 함
      // 문자열은 name ="" 문자열은 {} 안에 담길 수 없다.
       <MyComponent name="react"></MyComponent>
    );
}

export default App;