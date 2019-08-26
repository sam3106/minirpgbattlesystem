import React from 'react';
import './index.css';
class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="name-health">
          <h1>
            {this.props.playerName} <br /> {this.props.playerHealth}
          </h1>
        </div>
        <div className="name-health">
          <h1>
            {' '}
            Monster <br />
            {this.props.monsterHealth}
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
