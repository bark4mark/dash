import React from 'react';

class MainHeader extends React.Component {
  render(){
    return (
      <div className="main-header">
        <div className="main-header__heading">
          Hello User
        </div>
        <div className="main-header__updates">
          Recent items
        </div>
      </div>
    )
  }
}

export default MainHeader;