import React from 'react';
import Feature from '../../components/feature/Feature';
import './whattea.css';

const Whattea = () => (
  <div className="t__whattea section__margin" id="wt">
    <div className="t__whattea-feature">
      <Feature title="What is TEA" text="Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to East Asia which probably originated in the borderlands of southwestern China and northern Myanmar." />
    </div>
    <div className="t__whattea-heading">
      <h1 className="gradient__text">The Best Teas for Studying and Focus</h1>
      <p>Explore it</p>
    </div>
    <div className="t__whattea-container">
      <Feature title=" Matcha" text="Matcha is produced from shade-grown green tea leaves that are stone-ground into a fine powder. Matcha can then be consumed on its own when whisked up with hot water, or can be added to lattes, smoothies, or baked goods." />
      <Feature title="Yerba Mate" text="Mate is a caffeinated tea made from a species of holly plant and popular throughout South America. Traditionally, mate is drunk from hollow gourds using filtered straws called bombillas." />
      <Feature title="Peppermint Tea" text="Peppermint is a common medicinal herb that can be consumed on its own as a stimulating herbal tea, or added to a variety of flavored blends." />
    </div>
  </div>
);

export default Whattea;
