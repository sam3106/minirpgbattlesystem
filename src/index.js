import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';

class App extends React.Component {
  constructor() {
    super();
    const promp = window.prompt('what will the name of your character be?', '');
    this.state = {
      player: {
        player: promp,
        health: 90,
        attack: 12,
        cry: `{player} cries in the corner`
      },
      monster: { health: 102, attack: 7 }
    };
  }
  playerAction = () => {
    const attack = this.state.monster.health - this.state.player.attack;
    const cry = this.state.player.cry;
  };
  monsterAction = () => {
    const attack = this.state.player.health - this.state.monster.attack;
  };
  render() {
    return (
      <div>
        <Header
          playerHealth={this.state.player.health}
          monsterHealth={this.state.monster.health}
          playerName={this.state.player.player}
        />
        <Body />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
