import React from 'react';
import OverviewCard from './OverviewCard';

class MainOverview extends React.Component {
  render () {
    return (
      <div className="main-overview">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
    )
  }
}

export default MainOverview;