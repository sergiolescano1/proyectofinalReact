import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img, stock, idCat }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CartContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, idCat };
    agregarProducto(item, cantidad);
  };

  return (
    <div className='container'>
      <div className='columns is-centered'>
        <div className='column is-half custom-centered'> 
          <h2 className='title is-4'>Nombre: {nombre}</h2>
          <h3 className='subtitle is-6'>Precio: {precio}</h3>
          <h3 className='subtitle is-6'>Categoria: {idCat}</h3>
          <img src={img} alt={nombre} style={{ maxWidth: '300px' }} />

          <div className='custom-centered item-detail-container'> 
            {agregarCantidad > 0 ? (
              <Link to="/cart" className='button is-primary'>
                Terminar Compra
              </Link>
            ) : (
              <ItemCount inicial={1} stock={stock} onAdd={manejadorCantidad} />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

