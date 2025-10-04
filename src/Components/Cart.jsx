import React from 'react';
import { useCart } from './CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto my-8">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between mb-2">
                <span>{item.title} (x{item.qty})</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={e => updateQty(item.id, Number(e.target.value))}
                  className="w-12 mx-2 border rounded"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;