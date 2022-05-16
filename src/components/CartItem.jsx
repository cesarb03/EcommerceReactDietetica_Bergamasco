import React from "react";
import styled from "styled-components";

const CartItem = ({ cartItem, removeItem }) => {
  const { name, price, id, img, qty } = cartItem;

  const removeHandler = () => {
    removeItem(id);
  };

  return (
    <CartItemStyle>
      <div>
        <img src={img} className="img-fluid detailsCartImg" alt="" />
      </div>
      <div className="detailsCartDiv">
        <div className="cartItemTitle">
          {qty}x {name}
        </div>
        <div className="greenColor">
          <div className="cartSubItemTitle">Free Shipping</div>
          <div className="cartSubItemTitle">
            <button variant="outline-primary" onClick={removeHandler}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="priceCartDiv">$ {price}</div>
    </CartItemStyle>
  );
};

export default CartItem;

const CartItemStyle = styled.div`
  .detailsCartImg {
    padding: 15px;
  }
  .detailsCartDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 5%;
  }
  .cartItemTitle {
    font-size: 2.5vh;
    margin-bottom: 15px;
  }
  .cartSubItemTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .priceCartDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    font-size: 3.5vh;
  }
`;
