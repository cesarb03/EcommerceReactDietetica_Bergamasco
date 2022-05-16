import styled from "styled-components";
import Item from "../components/Item";

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
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center;
`;
