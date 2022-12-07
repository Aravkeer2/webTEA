import React from 'react';
import tea from '../../assets/tea.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="t__possibility section__padding" id="possibility">
    <div className="t__possibility-image">
      <img src={tea} alt="possibility" />
    </div>
    <div className="t__possibility-content">
      
      <h1 className="gradient__text">‘Cha’: Tea-Drinking for IT Developers.</h1>
      <p>Tea drinking is important to developing software. It matters how you drink it, as well as how you prepare the tea.

It was a very long time ago, whilst working in a development team with a well-known computer company in Japan that I first realized there was more to drinking tea than dumping a typhoo teabag into a mug.</p>

    </div>
  </div>
);

export default Possibility;
