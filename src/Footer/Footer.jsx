import React from 'react';

const Footer = () => {
    return (
        <> 
        <div
            style={{
                padding: '1rem',
                background: '#222',
                color: '#fff',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <div style={{ flex: 1 }}>
                <p>PUT HEELS N TOES LOGO HERE</p>
                <p>CONTACT</p>
                <p>email@example.com</p>
                <p>(123) 456-7890</p>
               
            </div>

            <div style={{ flex: 1 }}>
                <p>SOCIALS</p>
                <p>facebook</p>
                <p>instagram</p>
                <p>tiktok</p>
                </div>
            <div style={{ flex: 1 }}>
                 <p>ABOUT HEELSNTOES</p>
                  <p>HOW WE DELIVER</p>
                
            </div>
        </div>
        </>
    );
};

export default Footer;