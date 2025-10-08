import { useContext } from 'react';
import CartContext from './CartContext';

const useCart = () => 
     useContext(CartContext);
// {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

export default useCart;