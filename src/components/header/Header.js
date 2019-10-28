import React from 'react';
import Search from './Search';
import Avatar from './Avatar';

class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <Search/>
        <Avatar />
      </header>
    )
  }
}

export default Header;