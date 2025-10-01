import React from 'react';

const Copyright = () => {
    return (
        <footer style={{ width: '100%', padding: '1rem', background: '#faf8f8ff',
                color: '#999696ff', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} CAF Hills N Toes. All rights reserved.</p>
        </footer>
    );
};

export default Copyright;