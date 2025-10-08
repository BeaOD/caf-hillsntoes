import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useCart from '../Components/UseCart';

const CartCheckout = () => {
  const { cart } = useCart();
  const [phone, setPhone] = useState('');
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');

  // Calculate total price from cart items
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

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
    // await fetch('/api/pay', {
    //   method: 'POST',
    //   body: JSON.stringify({ phone, amount: totalPrice, items: cart }),
    // });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Cart Checkout</h1>
        
        {/* Cart Summary */}
        {cart.length === 0 ? (
          <p className="text-gray-600 mb-6">Your cart is empty.</p>
        ) : (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Summary</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{item.title}</h3>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold text-gray-800 mt-4">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
        )}

        {/* Payment Form */}
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
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            disabled={processing || cart.length === 0}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition disabled:bg-gray-400"
            disabled={processing || cart.length === 0}
          >
            {processing ? 'Processing...' : 'Pay with MTN Mobile Money'}
          </button>
        </form>

        {/* Payment Message */}
        {message && <div className="text-green-600 font-semibold mb-4">{message}</div>}

        {/* Back to Cart Link */}
        <div className="text-center">
          <Link to="/Cart" className="text-blue-600 hover:underline">
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

CartCheckout.propTypes = {
  // No props required since cart data comes from useCart
};

export default CartCheckout;