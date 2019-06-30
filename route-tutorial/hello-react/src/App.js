import React , {Fragment} from 'react';
import { Route } from 'react-router-dom';

import {
  Home,
  About,
  Posts
} from 'pages'
import Menu from 'component/Menu'

function App() {

  return (
    <div>
      <Menu/>
      {/* 메뉴는 안바뀌고 Route된것만 다시 불러짐 */}
      <Route exact path="/" component={Home}/>
      <Route path="/about/:name?" component={About}/>
      <Route path="/posts" component={Posts}/>
    </div>
  );        
}

export default App;
