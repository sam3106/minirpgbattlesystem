import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './index.css';
class App extends React.Component {
  constructor() {
    super();
    const promp = window.prompt(
      'what will the name of your character be?',
      'John Smith'
    );

    this.state = {
      counter: 0,
      player: promp,
      playerHealth: 90,
      playerAttack: 12,
      monsterHealth: 120,
      monsterAttack: 10,
      Winner: ''
    };
  }

  gameAction = () => {
    let counter = this.state.counter;
    const player = this.state.player;
    const counterUp = this.state.counter + 1;
    const attackMonster = this.state.monsterHealth - this.state.playerAttack;
    const attackPlayer = this.state.playerHealth - this.state.monsterAttack;
    const humanWin = 'Congrats ' + player + ' you won';
    const monsterWin = 'Too Bad ' + player + ' you lost';
    if (counter <= 1) {
      this.setState(
        { monsterHealth: attackMonster, counter: counterUp },
        () => {
          if (this.state.monsterHealth === 0) {
            this.setState({ Winner: humanWin });
            setTimeout(function() {
              window.location.reload(1);
            }, 2000);
          }
        }
      );
    } else if (counter == 2) {
      if (this.state.playerHealth === 0) {
        this.setState({ Winner: monsterWin });
        setTimeout(function() {
          window.location.reload(1);
        }, 2000);
      }
      this.setState({
        playerHealth: attackPlayer,
        counter: 0
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          playerHealth={this.state.playerHealth}
          monsterHealth={this.state.monsterHealth}
          playerName={this.state.player}
        />
        <button type="button" onClick={this.gameAction}>
          Attack
        </button>
        <div>
          <h1>{this.state.Winner}</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
