import React from 'react';
import Card from './Card';

class MainCards extends React.Component {
  render () {
    return (
      <div className="main-cards">
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default MainCards;
