import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="columns is-multiline">
      {productos.map(prod => (
        <div className="column is-4" key={prod.id}> 
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;