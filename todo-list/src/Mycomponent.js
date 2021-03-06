import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    }

    static propTypes = {
        name : PropTypes.string,
        age : PropTypes.number.isRequired
    }
  
    state = {
        number : 0
    }

    render() {
        return (
            <div>
                {/* props = 컴포넌트 속성을 설정할 때 사용. 부모 컴포넌트에서 사용 가능(현재로 치면 App.js) */}
               <p>안녕하세요. 제 이름은 {this.props.name} 입니다.</p>
               <p>제 나이는 {this.props.age} 입니다.</p>
               <p>숫자 : {this.state.number}</p>
               <button onClick={() => {
                   this.setState({
                       number: this.state.number +1
                   })
               }
            }>더하기</button>
            </div>
        );
    }

}
    // 위치에 따라서 static defaultProps OR MyComponent.defaultProps 를 사용
    // MyComponent.defaultProps = {
    //     name: '기본 이름',
    //     name : PropTypes.string
    //}
export default MyComponent;
