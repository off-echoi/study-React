import React from 'react';
import ReceiveData from './components/ChlidToParent/ReceiveData'
import ReceiveDataAuto from './components/ChlidToParent/ReceiveDataAuto'
import ThrowParentData from './components/ParentToChild/ThrowParentData'

function App() {
  return (
    <div className="App">
      <h2> ================ 자식 > 부모 데이터 전달 ================ </h2> 
      <ReceiveData/>
      <ReceiveDataAuto/>
      <h2> ================ 부모 > 자식 데이터 전달 ================ </h2>
      <ThrowParentData/>
      
    </div>
  );
}

export default App;
