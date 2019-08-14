import React, { Component , Fragment } from 'react';

class RecieveDataChild extends Component {
    render() {
        return (
            <Fragment>
                <p>
                    받은 이름 : {this.props.getDataName} <br/>
                    받은 핸드폰번호 : {this.props.getDataPhone}
                </p>
            </Fragment>
        );
    }
}

export default RecieveDataChild;