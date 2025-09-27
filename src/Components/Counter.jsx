import React, { useState } from 'react';

const Counter = ({ initial = 10 }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleBuy = (amount) => {
    if (quantity - amount >= 0) {
      setQuantity(quantity - amount);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '1rem' }}>
      <h3>Available: {quantity}</h3>
      <div>
        <label htmlFor="buy-amount">Quantity to buy: </label>
        <select
          id="buy-amount"
          onChange={e => handleBuy(Number(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>
            Select
          </option>
          {[...Array(Math.min(quantity, 10)).keys()].map(i => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Counter;