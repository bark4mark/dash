import React from 'react';
import Header from './header/Header';
import SideNav from './navigation/SideNav';
import Main from './main/Main';
import Footer from './footer/Footer';

import '../css/reset.css';
import '../css/main.css';

class Home extends React.Component {
  render(){
    return (
      <div className="grid-container">
        <Header />
        <SideNav />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Home;