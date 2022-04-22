import styled from "styled-components";
import { Link} from "react-router-dom";


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
            <Link key={item.id} to={`/product/${item.id}`} className="cartAdd">
            <button> Ver Detalle</button>
            </Link>
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default Item;

const Cards = styled.div`
  width: 95%;
  margin: auto;

  img {
    width: 100px;
  }

  .itemList {
    margin: 15px 30px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 50px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.32);
  }

  .item button:hover {
    background-color: #d26691;
  }
  .cartAdd button {
    border: none;
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    background-color: #fe7bb0;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }
`;
