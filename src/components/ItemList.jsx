import styled from "styled-components";
import Item from "./Item";
import Loader from "./Loader";

export const ItemList = ({ productos }) => {
  return (
    <Poscards>
      {productos.length > 0 ? (
        productos.map((card) => (
          <div key={card.id}>
            <Item item={card} />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </Poscards>
  );
};

export default ItemList;

const Poscards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
