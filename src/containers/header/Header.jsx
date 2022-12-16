import React from 'react';
import people from '../../assets/people.png';
import tea1 from '../../assets/tea1.png';
import './header.css';

const Header = () => (
  <div className="t__header section__padding" id="home">
    <div className="t__header-content">
      <h1 className="gradient__text">A cup of tea is a solution for everything</h1>
      <p>Numerous studies have shown that a variety of teas may boost your immune system, fight off inflammation, and even ward off cancer and heart disease.While some brews provide more health advantages than others, there is plenty of evidence that regularly drinking tea can have a lasting impact on your wellness.</p>
      <div className="t__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="t__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="t__header-image">
      <img src={tea1} />
    </div>
  </div>
);

export default Header;
