import React, { Component } from 'react';

class props extends Component {
    render() {
        return (
            <div className="text-field">
                <label>
                    <span>{this.props.label}asdf</span>
                    <input {...this.props} />
                </label>
            </div>
        );
    }
}

export default props;