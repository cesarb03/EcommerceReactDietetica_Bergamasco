import styled from "styled-components";
import ItemCount from "./ItemCount";

export const Item = ({ item }) => {
  return (
    <Cards>
      <div className="itemList">
        <div>
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <span>Stock: {item.stock}</span>
            <br />
            <span>$ {item.price}</span>
            <br />
            <br />
            <ItemCount stock={item.stock} />
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default Item;

const Cards = styled.div`
  width: 90%;
  margin: auto;

  img {
    width: 100px;
  }

  .itemList {
    margin: 15px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 50px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.32);
  }

  .item button:hover {
    background-color: #d26691;
  }
`;
