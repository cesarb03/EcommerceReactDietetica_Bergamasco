import styled from "styled-components";


const ItemDetail = ({ itemDetail }) => {
  return (
    <EstilosID>
      <div className="itemList">
        <div>
          <div className="item">
            <img src={itemDetail.img} alt="" />
            <h3>{itemDetail.name}</h3>
            <span>Stock: {itemDetail.stock}</span>
            <br />
            <span>$ {itemDetail.price}</span>
            <br />
            <br />
            <h5>{itemDetail.description1}</h5>
          </div>
        </div>
      </div>
    </EstilosID>
  );
};

export default ItemDetail;

const EstilosID = styled.div`
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
`;
