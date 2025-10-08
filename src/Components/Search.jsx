import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../Components/UseCart';

// Sample products data (replace with your actual data source, e.g., API or Context)
const products = [
  { id: 1, title: 'Running Sneakers', imageUrl: 'https://via.placeholder.com/150', price: 59.99 },
  { id: 2, title: 'Casual Shoes', imageUrl: 'https://via.placeholder.com/150', price: 39.99 },
  { id: 3, title: 'Sports Jacket', imageUrl: 'https://via.placeholder.com/150', price: 79.99 },
  { id: 4, title: 'T-Shirt', imageUrl: 'https://via.placeholder.com/150', price: 19.99 },
];

const Search = () => {
  const [query, setQuery] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleBuyNow = (product) => {
    navigate('/checkout', { state: { imageUrl: product.imageUrl, title: product.title, price: product.price } });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-6">
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="ml-2 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Search Results */}
      {query && (
        <div>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">No products found.</p>
          ) : (
            <ul className="space-y-4">
              {filteredProducts.map((product) => (
                <li key={product.id} className="flex items-center space-x-4 bg-white p-4 rounded-md shadow">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{product.title}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <div className="flex space-x-2 mt-2">
                      <button
                        onClick={() => addToCart({ ...product, qty: 1 })}
                        className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition"
                        aria-label={`Add ${product.title} to cart`}
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition"
                        aria-label={`Buy ${product.title} now`}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Link to Cart */}
      {query && (
        <div className="text-center mt-4">
          <Link to="/Cart" className="text-blue-600 hover:underline" aria-label="View cart">
            View Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default Search;