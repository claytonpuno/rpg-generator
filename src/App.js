import React, { Component } from 'react';
import firebase from './firebase';
import logo from './logo.svg';
import './App.css';

//App.js
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: [],
      showGame: ''
    }
  }

  componentDidMount(){
    const dbRef = firebase.database().ref();
    const dbGames = dbRef.child("games")

    dbGames.on('value', (snapshot) => {
      const newState = [];
      const data = snapshot.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        games: newState
      })
    })

  }

  handleClick = () => {
    let randomGame = this.state.games[Math.floor(Math.random() * this.state.games.length)]

    console.log(randomGame);
    this.setState({
      showGame: randomGame
    })
  }

  render() {
    console.log(this.state.showGame)
    return (
      <div className="App">
        <h1>Random RPG Generator</h1>
        <button onClick={this.handleClick}>Next Game</button>
      </div>
    );
  }
}

export default App;
