import Item from "./Item";
import Loader from "./Loader"

export const ItemList = ({ productos }) => {

  return (
    <>
      { productos.length > 0
      ? 
            productos.map((card) => (
          <div key={card.id} item>
            <Item item={card} />
          </div>
        ))
       : 
        <Loader />
      }
    </>
  )
};

export default ItemList;
