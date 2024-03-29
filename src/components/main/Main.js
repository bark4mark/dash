import React from 'react';
import MainHeader from './MainHeader';
import MainOverview from './MainOverview';
import MainCards from './MainCards';
import './cards.css';

class Main extends React.Component {
  render () {
    return (
      <main className="main">
        <MainHeader />
        <MainOverview />
        <MainCards />
      </main>
    )
  }
}

export default Main;