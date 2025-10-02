import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductPayment = ({ imageUrl, title, price }) => {
  const [phone, setPhone] = useState('');
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setMessage('');

    // Simulate payment API call
    setTimeout(() => {
      setProcessing(false);
      setMessage('Payment request sent to your MTN Mobile Money. Approve on your phone.');
    }, 2000);

    // In production, call your backend/payment gateway here
    // Example:
    // await fetch('/api/pay', { method: 'POST', body: JSON.stringify({ phone, amount: price }) })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-xl text-gray-600 mb-6">${price.toFixed(2)}</p>
        <form onSubmit={handlePayment} className="mb-4">
          <label className="block mb-2 text-gray-700 font-semibold">
            MTN Mobile Money Number
          </label>
          <input
            type="tel"
            required
            pattern="^0\d{9}$"
            placeholder="e.g. 024XXXXXXX"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            disabled={processing}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
            disabled={processing}
          >
            {processing ? 'Processing...' : 'Pay with MTN Mobile Money'}
          </button>
        </form>
        {message && <div className="text-green-600 font-semibold">{message}</div>}
      </div>
    </div>
  );
};

ProductPayment.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductPayment;