import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useCart from './UseCart';

const images = [
  '/assets/pesce-huang-pEzLon__DfM-unsplash.jpg',
  '/assets/cassidy-mills-0XbYF0o3uSY-unsplash.jpg',
  '/assets/alexander-fae-NHqLJrlHvDY-unsplash.jpg',
  '/assets/kelly-sikkema-Tn8DLxwuDMA-unsplash.jpg',
];

const ProductsDisplay = ({ title = "Product Title", description = "Product description goes here.", price = "GHC 120.00" }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart({ id, title, description, price });
    navigate('/ProductPayment');
  };

   const handleAddToCart = () => {
    addToCart({ id, title, description, price });
    navigate('/CartCheckout'); // or '/payment'
  };

  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '2rem',
      justifyContent: 'center'
    }}>
      {/* Left Column: Images */}
      <div style={{ flex: '1 1 300px', maxWidth: 400, marginLeft: '2rem' }}>
        <img
          src={mainImage}
          alt="Main product"
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '1rem',
            border: '2px solid #e214a8ff'
          }}
        />
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          {images.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Sub ${idx + 1}`}
              style={{
                width: 70,
                height: 70,
                objectFit: 'cover',
                borderRadius: '6px',
                border: mainImage === img ? '2px solid #e214a8ff' : '1px solid #ccc',
                cursor: 'pointer',
                opacity: mainImage === img ? 1 : 0.7,
                transition: 'border 0.2s, opacity 0.2s'
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right Column: Details */}
      <div style={{ flex: '2 1 300px', maxWidth: 500, marginLeft: '2rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>{title}</h2>
        <p style={{ marginBottom: '1.5rem', color: '#555' }}>{description}</p>
        <h3 style={{ color: '#e214a8ff', marginBottom: '2rem' }}>{price}</h3>
        <div>
          Product ID: {id}
        </div>
        <button
          style={{
            padding: '0.8rem 2rem',
            background: '#e214a8ff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
        <div>
          <button
          style={{
            padding: '0.8rem 2rem',
            background: '#e214a8ff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '1rem'
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

ProductsDisplay.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
};

export default ProductsDisplay;