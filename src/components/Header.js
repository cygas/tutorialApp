import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default class Header extends Component {
    render() { 
        return ( 
            <header className="header-container">
                <h1>TodoList</h1>
                <div className='route-container'>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link>
                </div>
            </header>
        );
    }
}
