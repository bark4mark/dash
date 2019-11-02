import React from 'react';
import Header from './header/Header';
import SideNav from './navigation/SideNav';
import Main from './main/Main';
import Footer from './footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../css/reset.css';
import '../css/main.css';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {active:false};
  }
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render(){
    return (
      <div className="grid-container">
        <div className="menu-icon">
          <FontAwesomeIcon onClick={this.toggleClass} icon={faBars} />
        </div>
        <Header />
        <SideNav toggle={this.toggleClass} state={this.state.active}/>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Home;