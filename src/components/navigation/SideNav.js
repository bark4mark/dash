import React from 'react';

class SideNav extends React.Component {
  render () {
    return (
      <aside className="sidenav">
        <ul className="sidenav__list">
          <li className="sidenav__list-item">Item one</li>
          <li className="sidenav__list-item">Item two</li>
          <li className="sidenav__list-item">Item three</li>
          <li className="sidenav__list-item">Item four</li>
          <li className="sidenav__list-item">Item five</li>
          <li className="sidenav__list-item">Item six</li>
        </ul>
      </aside>
    )
  }
}

export default SideNav;