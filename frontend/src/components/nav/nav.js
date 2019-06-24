import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    url: '/users/',
    icon: <i className="fas fa-users"></i>,
    title: 'Пользователи',
    border: []
  },
  {
    url: '/messegers/',
    icon: <i className="fas fa-comments"></i>,
    title: 'Сообщение',
    border: []
  },
  {
    url: '/tasks/',
    icon: <i className="fas fa-tasks"></i>,
    title: 'Задачи',
    border: []
  },
  {
    url: '/settings/',
    icon: <i className="fas fa-cogs"></i>,
    title: 'Настройки',
    border: [ 'top' ]
  }
]

const Nav = () => {
  let borderClasses = "";
  const linkItems = navItems.map(( { url, icon, title, border }, idx ) => {
    borderClasses += border.map( item => { return 'border-'+item });
    return (
      <Link key={ idx }to={ url }>
        <li className={ borderClasses }>
            { icon }
            { title }
        </li>
      </Link>
    )
  });

  return (
    <div className="nav">
      <ul>
         { linkItems }
      </ul>
    </div>
  )
}

export default Nav;