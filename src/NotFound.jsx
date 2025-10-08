import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
      background: '#f5f5f5'
    }}>
      <h1 style={{
        fontSize: '4rem',
        color: '#e214a8ff',
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '1.8rem',
        color: '#222',
        marginBottom: '1.5rem'
      }}>
        Page Not Found
      </h2>
      <p style={{
        fontSize: '1.2rem',
        color: '#555',
        marginBottom: '2rem',
        maxWidth: '600px'
      }}>
        Oops! The page you're looking for doesn't exist or has been moved. Let's get you back to safety.
      </p>
      <button
        onClick={handleGoHome}
        style={{
          padding: '0.8rem 2rem',
          background: '#e214a8ff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => (e.target.style.background = '#c5118e')}
        onMouseOut={(e) => (e.target.style.background = '#e214a8ff')}
      >
        Return to Home
      </button>
    </div>
  );
};

export default NotFound;