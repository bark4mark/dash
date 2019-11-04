import React from 'react';
import SideNavItem from './SideNavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class SideNav extends React.Component {
  render () {
    return (
      <aside className={this.props.active?'sidenav active':'sidenav'}>
        <div className="sidenav__close-icon">
          <FontAwesomeIcon onClick={this.props.toggle} icon={faTimes} />
        </div>
        <ul className="sidenav__list">
          <SideNavItem item="Home"/>
          <SideNavItem item="About"/>
        </ul>
      </aside>
    )
  }
}

export default SideNav;