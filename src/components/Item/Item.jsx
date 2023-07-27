import { Link } from 'react-router-dom';

const Item = ({ id, idCat, nombre, precio, img, stock }) => {
  return (
    <div className="column is-8">
      <article>
        <div className="card has-background-black" style={{ borderRadius: '10px' }}> {/* Ajusta el valor del radio según desees */}
          <div className="card-content has-text-centered">
            <p className="is-size-5 has-text-white mb-4">Articulo: {nombre}</p>
            <figure className="image is-3by2">
              <img
                src={img}
                alt="logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </figure>
            <div className="media-content ">
              <p className="has-text-white">El Precio es: $ {precio}</p>
              <p className="has-text-white mb-4">Stock: {stock}</p>

              <Link to={`/item/${id}`} className="button is-primary">Ver detalle</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Item;
