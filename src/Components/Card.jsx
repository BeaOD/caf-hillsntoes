import Counter from './Counter';
import Sizes from './Sizes';
import { Link ,useNavigate} from 'react-router-dom';
import useCart from './UseCart';


// const Card = ({ id,title, description,image,price }) => (
const Card = ({ id, title, description,image,price }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart({ id, title, description, image, price });
    navigate('/ProductPayment'); // or '/payment'
  };

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
    </div>
    </Link>
);

};

export default Card;