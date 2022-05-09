import styled from "styled-components";
import { Link} from "react-router-dom";


export const Item = ({ item }) => {
  return (
    <Cards>
      <div className="itemList">
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <span>Stock: {item.stock}</span>
            <span>$ {item.price}</span>
            <br />
            <Link key={item.id} to={`/product/${item.id}`} className="cartAdd">
            <button> Ver Detalle</button>
            </Link>
          </div>
      </div>
    </Cards>
  );
};

export default Item;

const Cards = styled.div`
  width: 100%;
  margin: auto;

*, *::after, ::before{
  box-sizing: inherit
}

  img {
    display: flex;
    justify-content: center;
    height: 100%;
    max-height: 100px;
  }

  h3{
    display: flex;
    justify-content: center;
}  

  span{
    display: flex;
    justify-content: center;
}

.itemList {
    width: 80%;
    margin: 35px 45px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 50px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.32);
    min-width: 220px;
    max-width: 220px;
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
