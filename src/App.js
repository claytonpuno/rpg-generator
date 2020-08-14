import React, { Component } from 'react';
import firebase from './firebase';
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: [],
      showGame: {},
      showModal: false
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
    this.setState({
      showGame: randomGame,
      showModal: false
    })
  }

  toggleModal = () => {
    this.setState({ 
      showModal: !this.state.showModal,
    })
  }

  render() {
   const {
     img,
     developer,
     title,
     released,
     platforms
   } = this.state.showGame

   const {
     showModal
   } = this.state

   const imgStyle = {
    width: 250,
    height: 350,
  }

    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <div className="content">
            <button onClick={ this.handleClick } >Next Game</button>
            <img
              src={ img }
              style={ img && imgStyle }
            />
            <div className="text-box">
              <p><span>Title:</span> { title }</p>
              <p><span>Developer:</span> { developer }</p>
              <p><span>Platforms:</span> { platforms }</p>
              <p><span>Released:</span> { released }</p>
              <button onClick={ this.toggleModal }>More Info</button>
            </div>
            { showModal && 
            <Modal 
              toggleModal={ this.toggleModal } 
              showInfo={ this.state.showGame.info }
            /> }
          </div>
          <Footer />
        </div>
        
      </div>
    );
  }
}

export default App;