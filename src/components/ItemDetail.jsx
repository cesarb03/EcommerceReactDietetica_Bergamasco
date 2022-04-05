import ItemCount from "./ItemCount";
import swal from "sweetalert";
import styled from "styled-components";

const onAdd = (counterItem) => {
  swal({
    text: "Added to Cart",
    icon: "success",
  });
  console.log(`User added ${counterItem} items`);
};

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
            <ItemCount stock={itemDetail.stock} />
          </div>
        </div>
      </div>
    </EstilosID>
  );
};

export default ItemDetail;

const EstilosID = styled.div``;
