import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import events from './Images/events.png';
import nature from './Images/nature.png';
import coffee from './Images/coffee.png';
import weddings from './Images/weddings.png';
import gardens from './Images/gardens.png';
import seasonal from './Images/seasonal.png';
import portraits from './Images/portraits.png';
import weddingsBG from './Images/WEDDINGS.jpg';
import gardensBG from './Images/GARDENS.jpg';
import coffeeBG from './Images/COFFEE SHOPS.jpg';
import natureBG from './Images/NATURE.jpg';
import seasonalBG from './Images/SEASONAL.jpg';
import eventsBG from './Images/EVENTS.jpg';
import portraitsBG from './Images/PORTRAITS.jpg';
import Category from './Components/Category';
import Text from './Components/Text';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Text /><br />
        <center>
        <h1>T H E &nbsp; B E E H I V E S</h1>
        <Category name="Portraits" src={portraits} bg={portraitsBG} />
        <Category name="Coffee Shops" src={coffee} bg={coffeeBG} /><br />
        <Category name="Nature" src={nature} bg={natureBG} />
        <Category name="Events" src={events} bg={eventsBG} />
        <Category name="Weddings" src={weddings} bg={weddingsBG} /><br />
        <Category name="Gardens" src={gardens} bg={gardensBG} />
        <Category name="Seasonal" src={seasonal} bg={seasonalBG} />
        </center>
      </div>
    );
  }
}

export default App;
