import React, { useState } from 'react';

const initialSizes = [36, 37, 38.5, 39, 40.5, 41, 42.5];

const Sizes = () => {
  const [sizes, setSizes] = useState(initialSizes);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h3>Available Shoe Sizes</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {sizes.map(size => (
          <button
            key={size}
            onClick={() => handleSelect(size)}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: '6px',
              border: selectedSize === size ? '2px solid #e214a8ff' : '1px solid #ccc',
              background: selectedSize === size ? '#e214a8ff' : '#fff',
              color: selectedSize === size ? '#fff' : '#222',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {size}
          </button>
        ))}
      </div>
      {selectedSize && (
        <div style={{ marginTop: '1rem', color: '#e214a8ff', fontWeight: 'bold' }}>
          Selected Size: {selectedSize}
        </div>
      )}
    </div>
  );
};

export default Sizes;