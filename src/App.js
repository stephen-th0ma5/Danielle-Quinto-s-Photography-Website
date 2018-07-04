import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import events from './Components/events.png';
import nature from './Components/nature.png';
import coffee from './Components/coffee.png';
import weddings from './Components/weddings.png';
import gardens from './Components/gardens.png';
import seasonal from './Components/seasonal.png';
import portraits from './Components/portraits.png';
import weddingsBG from './Components/WEDDINGS.jpg';
import gardensBG from './Components/GARDENS.jpg';
import coffeeBG from './Components/COFFEE SHOPS.jpg';
import natureBG from './Components/NATURE.jpg';
import seasonalBG from './Components/SEASONAL.jpg';
import eventsBG from './Components/EVENTS.jpg';
import portraitsBG from './Components/PORTRAITS.jpg';
import Category from './Components/Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <center>
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
