import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            {this.props.playerName} <br /> {this.props.playerHealth}
          </h1>
        </div>
        <div>
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
