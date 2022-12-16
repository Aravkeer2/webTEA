import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Charges you up for the day',
    text: 'It might be a “brewed” awakening, but it’s a good thing to have tea in the morning! Well, for starters, nothing wakes you up and gets you all charged up like a hot.',
  },
  {
    title: 'Boosts Metabolism',
    text: 'With lesser caffeine levels and more anti-oxidants, tea can boost your body’s metabolism. This is one of the reasons why green tea is suggested for weight loss as well.',
  },
  {
    title: 'After workout beverage',
    text: 'You sign up for gym, work out religiously but end up in muscle sores? Even though its a rewarding work, all you need is tea.',
  },
  {
    title: 'Relief for Intestinal Inflammation',
    text: 'Tea contains tannins which is anti-inflammatory in nature. This is especially good for people who suffer from what is known as the irritable bowel syndrome(IBS).',
  },
];

const Features = () => (
  <div className="t__features section__padding" id="features">
    <div className="t__features-heading">
      <h1 className="gradient__text">Health Benefits Of Drinking Tea</h1>
      <p>Where there tea there hope.</p>
    </div>
    <div className="t__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
