import React from 'react';
import MainHeader from './MainHeader';
import MainOverview from './MainOverview';

class Main extends React.Component {
  render () {
    return (
      <main className="main">
        <MainHeader/>
        <MainOverview/>
      </main>
    )
  }
}

export default Main;