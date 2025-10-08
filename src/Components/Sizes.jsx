import React, { useState } from 'react';

const initialSizes = [36, 37, 38.5, 39, 40.5, 41, 42.5];

const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSelect = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h3>Available Shoe Sizes</h3>
      <select
        value={selectedSize}
        onChange={handleSelect}
        style={{
          padding: '0.5rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          background: '#fff',
          color: '#222',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          outline: 'none',
          width: '200px',
          textAlign: 'center'
        }}
      >
        <option value="" disabled>
          Select a size
        </option>
        {initialSizes.map(size => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      {selectedSize && (
        <div style={{ marginTop: '1rem', color: '#e214a8ff', fontWeight: 'bold' }}>
          Selected Size: {selectedSize}
        </div>
      )}
    </div>
  );
};

export default Sizes;