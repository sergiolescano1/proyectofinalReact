import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css"
const Checkout = () => {
  const { carrito, vaciarCarrito, cantidadTotal } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrdenId] = useState("");

  const manejadorFormulario = async (e) => {
    e.preventDefault();

    if (!nombre || !telefono || !email || !emailConfirmacion) {
      setError("Complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: cantidadTotal,
      nombre,
      telefono,
      email,
      fecha: new Date(),
    };

    try {
      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, "productos", productoOrden.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;
          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad,
          });
        })
      );

      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      vaciarCarrito();
    } catch (error) {
      setError("Error en el proceso de checkout");
    }
  };

  return (
    <div className="item-detail-container">
    <div className=" container">
      <h2 className="title is-4">Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio $ {producto.item.precio} </p>
            <hr className="is-marginless" />
          </div>
        ))}
        <hr className="is-marginless" />

        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Telefono</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email Confirmación</label>
          <div className="control">
            <input
              className="input"
              type="email"
              value={emailConfirmacion}
              onChange={(e) => setEmailConfirmacion(e.target.value)}
            />
          </div>
        </div>

        {error && <p className="has-text-danger">{error}</p>}

        <div className="control">
          <button type="submit" className="button is-primary">
            Finalizar Compra
          </button>
        </div>
      </form>

      {orderId && (
        <strong className="is-size-5">
          ¡Gracias por tu compra! Tu número de orden es {orderId}
        </strong>
      )}
    </div>
       </div>
  );
};

export default Checkout;
