import React from 'react';
import SideNavItem from './SideNavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class SideNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: props.active
    }
  }
  toggleClass = () => {
    const currentState = this.active;
    this.setState({ active: !currentState });
  }
  render () {
    return (
      <aside className={this.state.active ? 'sidenav active': 'sidenav'}>
        <div className="sidenav__close-icon">
          <FontAwesomeIcon onClick={this.toggleClass} icon={faTimes} />
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