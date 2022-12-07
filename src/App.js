import React from 'react';

import { Footer, Possibility, Features, Whattea, Header } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Whattea />
    <Features />
    <Possibility />
    <Footer />
  </div>
);

export default App;
