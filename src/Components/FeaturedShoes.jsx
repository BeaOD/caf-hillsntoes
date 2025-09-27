import React, { useState } from 'react';
import Card from './Card';

const initialCards = [
  { id: 1, title: 'Card 1', description: 'Description 1', image: '/assets/pesce-huang-pEzLon__DfM-unsplash.jpg' },
  { id: 2, title: 'Card 2', description: 'Description 2', image: '/assets/cassidy-mills-0XbYF0o3uSY-unsplash.jpg' },
  { id: 3, title: 'Card 3', description: 'Description 3', image: '/assets/alexander-fae-NHqLJrlHvDY-unsplash.jpg' },
  { id: 4, title: 'Card 4', description: 'Description 4', image: '/assets/kelly-sikkema-Tn8DLxwuDMA-unsplash.jpg' },
];

const FeaturedShoes = () => {
  const [cards, setCards] = useState(initialCards);

  // Example state change: shuffle cards
  const shuffleCards = () => {
    setCards(prev =>
      [...prev].sort(() => Math.random() - 0.5)
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Cards</h2>
      <button
        onClick={shuffleCards}
        style={{
          display: 'block',
          margin: '0 auto 2rem auto',
          padding: '0.5rem 1.5rem',
          background: '#e214a8ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Shop Now
      </button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedShoes;