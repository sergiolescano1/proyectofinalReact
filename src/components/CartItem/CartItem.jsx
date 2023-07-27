import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div className="item-detail-container">
    <div className="box">
      <h4 className="title is-4">{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>
      <button
        className="button is-danger"
        onClick={() => eliminarProducto(item.id)}
      >
        Eliminar
      </button>
    </div>
    </div>
  );
};

export default CartItem;
