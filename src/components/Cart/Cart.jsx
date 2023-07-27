import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'
const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
        <div className="item-detail-container">
      <div className="container has-text-centered">
        <h2 className="title is-4">No hay ITEMS en el carrito</h2>
        <Link to="/" className="button is-link">Productos</Link>
      </div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
    <div className="container">
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <h3 className="title is-5">Total: $ {total}</h3>
      <h3 className="title is-5">Cantidad Total: {cantidadTotal}</h3>
      <div className="buttons">
        <button className="button is-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout" className="button is-primary">CHECK</Link>
      </div>
    </div>
    </div>
  );
};

export default Cart;
