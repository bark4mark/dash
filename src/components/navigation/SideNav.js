import React from 'react';
import SideNavItem from './SideNavItem';

class SideNav extends React.Component {
  render () {
    return (
      <aside className="sidenav">
        <ul className="sidenav__list">
          <SideNavItem item="Home"/>
          <SideNavItem item="About"/>
        </ul>
      </aside>
    )
  }
}

export default SideNav;