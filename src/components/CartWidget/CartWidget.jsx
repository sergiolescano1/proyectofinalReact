import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);
    const imgCarrito = "https://e1.pngegg.com/pngimages/622/847/png-clipart-devine-icons-white-shopping-cart-thumbnail.png";

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Link to="/cart" style={{ display: cantidadTotal > 0 ? 'block' : 'none', marginRight: '10px' }}>
            <img
                src={imgCarrito}
                alt="carrito"
                style={{ width: '60px', height: '60px', marginTop: '10px' }}
            />
            <p>{cantidadTotal}</p>
        </Link>
    </div>
      
    )
}

export default CartWidget