import React from 'react';

import Nav from '../nav';

import './sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <img className="logotype" src="/images/kamkabel_logo.png" alt=""/>
                <div className="btn-toggle-sidebar">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            
            <div className="bot-info">
                <p className="bot-info-messenger">Telegram</p>
                <div className="bot-info-choose">
                    <span className="bot-info-name">KamkabelBot<i className="fas fa-angle-down"></i></span>
                    <button className="btn-add-bot"><i className="fas fa-plus"></i></button>
                </div>
            </div>
            
            <Nav />
                
        </aside>
    )
}

export default Sidebar;