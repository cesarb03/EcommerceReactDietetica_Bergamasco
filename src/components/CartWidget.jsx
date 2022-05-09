import { TiShoppingCart } from "react-icons/ti";
import styled from "styled-components";
import { context } from "../context/CartContext";
import React, {useContext } from "react";



const CartWidget = () => {
  const { cartQuantity } = useContext(context)

  return (
    <Cart>
      <div className="cart">
        <TiShoppingCart />
        <div className="position badge">
          { cartQuantity !== 0 ? (<div className="cantidad">{cartQuantity}</div>) : null }</div>
      </div>
    </Cart>
  );
};

export default CartWidget;

const Cart = styled.div`

.cart{
margin-top: 25px;
}
.badge:after{
        content:attr(value);
        font-size:12px;
        box-sizing: border-box;
        color: #d26691;
        background-color: #fff;
        border-radius:15%;
        padding: 7px 30px;
        position:relative;
        left:-7px;
        top:-23px;
        opacity:0.5;
    }
  
  .cantidad{
    margin-left: 25px;
    /* margin-bottom: -20px; */
    margin-top:-24px;
  }
`;
