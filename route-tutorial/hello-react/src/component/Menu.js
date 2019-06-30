import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Menu extends Component {
    render() {
        const activeStyles={
            color:'red',
            fontSize:'18px'
        }
        return (
            <div>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><NavLink exact to="/about" activeStyle={activeStyles}>소개</NavLink></li>
                    <li><Link to="/about/react">React소개</Link></li>
                    <li><Link to="/posts">포스트</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;