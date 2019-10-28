import React from 'react';

class SideNavItem extends React.Component {
  render () {
    return (
      <li className="sidenav__list-item">{this.props.item}</li>
    )
  }
}

export default SideNavItem;