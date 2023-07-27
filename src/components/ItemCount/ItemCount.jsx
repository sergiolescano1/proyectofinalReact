import React, { useState } from 'react';

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className='has-text-centered'>
      <div className='buttons are-small'>
        <button className='button' onClick={decrementar}>-</button>
        <p className='button'>{contador}</p>
        <button className='button' onClick={incrementar}>+</button>
      </div>
      <button className='button is-primary' onClick={() => onAdd(contador)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
