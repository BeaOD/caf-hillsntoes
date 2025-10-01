import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <> 
        <div
            style={{
                padding: '1rem',
                background: '#faf8f8ff',
                color: '#999696ff',
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
                 <Link to="/About" style={{textDecoration:'none',color:'#999696ff'}}>
                 <p>ABOUT HEELSNTOES</p>
                 </Link>
                  <Link to="/Delivery" style={{textDecoration:'none',color:'#999696ff'}}><p>HOW WE DELIVER</p></Link>
                <p>LOCATION OF SHOP GOES HERE</p>

            </div>
        </div>
        </>
    );
};

export default Footer;