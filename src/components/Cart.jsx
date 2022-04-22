import React, { useContext } from "react";
import { context } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Cart = () => {

    const { cartItems, removeItem, totalCost, clear } = useContext(context)

    const deleteItem = (id) => {
       removeItem(id) 
    }


    if (cartItems.length === 0) {
        return (
            <CartStyle>
            <div className="container">
                <div className="column">
                    <div className="column">

                        <h1 className="">NO HAY PRODUCTOS EN EL CART</h1>
                        <Link to={`/`}><button className=""><h2>Seguir comprando</h2></button></Link>

                    </div>
                </div>
            </div>
            </CartStyle>
        )
    } else {
        return (
                <CartStyle>
                    <div className="column">
                        <div className="column">
                            <h1 className="">CART</h1>
                        </div>
                    </div>
                    <div className="column">
                        <div className="cart-items">
                        {
                            cartItems.map((cartItem) => (
                                <div key={cartItem.id} className="cart-item">
                                    <div className="column">
                                        <button className="" onClick={ ()=> deleteItem(cartItem.id) }>X</button>
                                    </div>
                                    <div className="column">
                                    <img src={cartItem.img} className="cart-item--img" alt="" />
                                    </div>
                                    <div className="">
                                            <div><h4>{cartItem.qty}x {cartItem.name}</h4></div>
                                            <div>
                                                <h4>$ {cartItem.price}</h4>
                                            </div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div><button className="cart-items--clear column" onClick={ ()=> clear() }><h3 className="">Clear all items</h3></button> </div>
                        <div className="cart-items column">
                            <h3 className="">Total: $ {totalCost()}</h3>
                        </div>
                    </div>
                </CartStyle>
        )
    }

}

export default Cart

const CartStyle = styled.div`

@media (min-width: 768px){
.container {
    max-width: 720px;
}}
@media (min-width: 576px){
.container {
    max-width: 540px;
}}
.container {
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
}

.column{
    display: flex;
    justify-content: center;
}

.cart-items {
  color: #313149;
  padding: 10px;
  display: inline-block;
  margin: 75px 0;
  position: relative;
  z-index: 0;
}
.cart-items:before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  padding: 5px;
  border-radius: 15px;
  background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
          mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;

}  

.cart-item{
 border: 1px solid rgb(228, 228, 228);
 border-radius: 20px;
}

.cart-item--img{
 width: 50px;
}

.cart-items--clear {
  padding: 10px;
  display: inline-block;
  position: relative;
  z-index: 0;
  border: none;
  background: none;
}

.cart-items--clear:before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  padding: 5px;
  border: none;
  border-radius: 15px;
  background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
          mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;

}

.cart-items--clear p {
  margin: 0;
}

`;
