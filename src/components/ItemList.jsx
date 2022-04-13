import styled from "styled-components";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <Poscards>
      {
        productos.map((card) => (
          <div key={card.id}>
            <Item item={card} />
          </div>
        ))
      }
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
