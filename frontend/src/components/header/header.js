import React, { Component } from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FadeInDown } from '../animations';

import './header.css';

export default class Header extends Component{

  state = {
    activeDropdownMenu: false
  }

  toggleDropdownMenu = () => {
    this.setState({
      activeDropdownMenu: !this.state.activeDropdownMenu
    })
  }

  render(){

    return(
      <div className="header">
        <div className="header-content">
          <div className="btn-toggle-sidebar">
              <i className="fas fa-bars"></i>
          </div>
          
          <div className="profile">
            <div className="role-info">
              <img className="role-info-photo" src="https://pp.userapi.com/c638930/v638930477/5ecf9/OIeEDKMS7zk.jpg?ava=1" alt=""/>
              <div className="role-info-name">Денис Цветков</div>
              <div className="role-info-show-more"><i className="fas fa-angle-down" onClick={this.toggleDropdownMenu}></i></div>
            </div>

              {this.state.activeDropdownMenu && (
                <FadeInDown>
                  <div className="hidden-menu">
                    <ul>
                      <li>Профиль</li>
                      <li>Настройки</li>
                      <li>Выход</li>
                    </ul>
                  </div>
                </FadeInDown>
              )}

          </div>
        </div>
      </div>
    )
  }

}