import Counter from './Counter';
import Sizes from './Sizes';
import { Link ,useNavigate} from 'react-router-dom';
import useCart from './UseCart';


// const Card = ({ id,title, description,image,price }) => (
const Card = ({ id, title, description,image,price }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/ProductPayment' , { state: { imageUrl: image, title, price } }); // '/single product checkout'
  };

//   const handleBuyNow = () => {
//   navigate('/checkout', { state: { imageUrl: image, title, price } });
// };

  const handleAddToCart = () => {
    addToCart({ id, title, description, image, price });
    navigate('/CartCheckout',  { state: { imageUrl: image, title, price } }); // '/ cart checkout payment'
  }

    return (
   <Link to={`/ProductsDisplay/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        margin: '16px'
    }}>
        {/* {image && ( */}
            <img
                // src={image}
                src="/assets/pesce-huang-pEzLon__DfM-unsplash.jpg"
                alt={title}
                style={{ width: '100%', borderRadius: '6px', marginBottom: '12px' }}
            />
        {/* )} */}
        <h3 style={{ margin: '0 0 8px 0' }}>
            {title}
            Size 37
        </h3>
        <p style={{ margin: 0 }}>
            {description}
            This is a sample product description.
            </p>
             <p><Sizes /></p>
            <p><Counter /></p>
        <button 
        onClick={handleBuyNow}
        style={{
            marginTop: '12px',
            padding: '8px 16px',
            backgroundColor: '#e214a8ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }}>
           
            Buy Now
        </button>
        <div> 

         <button 
        onClick={handleAddToCart}
        style={{
            marginTop: '12px',
            padding: '8px 16px',
            backgroundColor: '#7cc0e8ff' ,
            color: '#e214a8ff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }}>
           
            Add To Cart
        </button>
        </div>
    </div>
    </Link>
);

};

export default Card;