import React from 'react';
import FeaturedClothing from '../../Components/FeaturedClothing';

const Shoes = () => {
  // You can pass products as props if needed, or let FeaturedClothing handle its own data
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#e214a8ff', fontFamily: '"Dancing Script", cursive' }}>
        Clothing Products
      </h1>
      <FeaturedClothing />
    </div>
  );
};

export default Shoes;