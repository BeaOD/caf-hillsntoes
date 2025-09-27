import React from 'react';
import PropTypes from 'prop-types';

const ProductPayment = ({ imageUrl, title, price }) => {
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
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => alert('Proceed to payment')}
        >
          Proceed to Payment
        </button>
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


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProductPayment from './components/ProductPayment';
// import Home from './components/Home'; // Example component for the home page

// function App() {
//   // Sample product data (you can fetch this from an API or pass via props)
//   const product = {
//     imageUrl: 'https://via.placeholder.com/300',
//     title: 'Sample Product',
//     price: 49.99,
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Home route */}
//         <Route path="/" element={<Home />} />
//         {/* Payment route */}
//         <Route
//           path="/payment"
//           element={
//             <ProductPayment
//               imageUrl={product.imageUrl}
//               title={product.title}
//               price={product.price}
//             />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;