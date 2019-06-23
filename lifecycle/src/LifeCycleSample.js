import React, { Component } from 'react';

// 마운트 / 컴포넌트 만들기 > constructor > getDerivedStateFromProps > render > componentDidMount
// 업데이트 / (props 변결 부모 리렌더링 ) > getDerivedStateFromProps > shouldComponentUpdate(state 변경) > render(forceUpdate) > getSnapshotBeforeUpdate > 웹 상의 DOM 변화 > componentDidUpdate
// 언마운트 / componentWillUnmount

class LifeCycleSample extends Component {
    state = {
        number:0,
        color:null,
    }

    myRef = null // ref를 설정 할 부분

    constructor(props) {
        // 생성자 메서드 / 초기 state 정하기 
        // 컴포넌트를 만들 때 처음으로 실행
        super(props);
        console.log('constructor 처음으로 실행! ')
    }
    static getDerivedStateFromProps(nextProps,nextState){
        //props에 있는 값을 state 에 동기화  
        // =================================== 동기화하는 이유? ++++++++++++++++++++++++++++++++++++++++++++++
        // 컴포넌트를 마운트하거나 props를 바뀌어 업데이트 할 때 사용
        console.log('getDerivedStateFromProps ========================================')
        if(nextProps.color !== nextState.color){
            return{color:nextProps.color};
            //조건에 따라 특정값 동기화
        }
        return null; // state를 변경할 필요가 없다면 null을 반환

    }
    
    componentDidMount(){
        // 컴포넌트가 웹브라우저에 나타난 후 호출
        // 다른 자바스트립트 라이브러리, 프레임워크 함수를 호출, 이벤트 등록 , setTimeOut, setInterval , 네트워크등록 같은 비동기 작업을 처리
        console.log('componentDidMount 컴포넌트가 화면에 나타난 후 호출 되었습니다.')
    }

    shouldComponentUpdate(nextProps,nextState){
        // 컴포넌트가 리렌더링 할지 말아야 할지를 결정하는 메서드 반드시 true 혹은 false 값을 반환해야 함
        // false를 반환화면 아래의 메서드들을 호출하지 않음 (render , gersnapshotBeforeMount , componentDidMount)
        // 별도로 지정해주지 않으면 기본적으로 true를 반환
        // 
        console.log('shouldComponentUpdate 무슨 값이 변화 되었나요?',nextProps,nextState);
        //숫자의 마지막 자리가 4이면 리랜더링하지 않습니다.
        return nextState.number % 10 !== 4;
        // % 는 나머지 연산자 
        // =====  위의 것이 무슨뜻일까용...? +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    }
    componentWillUnmount(){
        // 컴포넌트의 업데이트 작업이 끝난 뒤 호출
        console.log('componentWillUnmount 컴포넌트 업데이트 완료 후 호출!')
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        // 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드 ( ex 스크롤바위치 등을 전달 받을 수 있음)
        // 여기서 반환하는 값은 componentDidMount에서 세번째 파라미터 snapshot으로 전달받을 수 있음
        console.log('getSnapshotBeforeUpdate 변화를 DOM에 반영하기 직전!!');
        if(prevProp.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProp,prevState,snapshot){
        // precProps prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능
        // snapshot 값을 전달 받음
        console.log('componentDidUpdate ');
        if(snapshot){
            console.log('업데이트 되기 직전 색상 getSnapshotBeforeUpdate 에서 전달받은 값' , snapshot);
        }
    }
    
    render() {
        // 컴포넌트의 모양새를 정의
        // 안에서 this.props와 this.state를 접근할 수 있음
        // 절대로 state 변화나, 브라우저에 접근 하지 말 것!
        console.log('render')
        const style = {
            color:this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ref=> this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;