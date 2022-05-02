import React, { useContext, useState } from "react";
import { context } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {collection, addDoc, serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import swal from 'sweetalert';


const Cart = () => {
  const { cartItems, removeItem, totalCost, clear } = useContext(context);

  const deleteItem = (id) => {
    removeItem(id);
  };


  
  const [BuyerInfo, setBuyerInfo ] = useState({
    buyerName: "",
    buyerLastName: "",
    buyerEmail: ""
})

const formHandler = ((e) =>{
    setBuyerInfo({
        ...BuyerInfo,
        [e.target.name]: e.target.value
    })
}  
)


const confirmCheckout = () => {
    const order = {
        buyer: {...BuyerInfo},
        items: cartItems,
        date: serverTimestamp(),
        total: totalCost(),
    }

    const userOrder = collection(db,"OrderCollection")
    addDoc(userOrder,order)
    .then( result => {
        swal({
            title: 'Compra Exitosa!',
            text: `
            Tu Orden ID: ${result.id}\n
            Total: $${totalCost()}`,
            icon: 'success'
            })
    } 
    )
    .then(
            cartItems.forEach( element => {
                const PurchasedQuantity = element.qty
                const updateCollection = doc(db,"ItemCollection", `${element.id}`)
                getDoc(updateCollection)
                .then( result => {
                    const updatedStock = result.data().stock - PurchasedQuantity
                    console.log(updatedStock)
                    updateDoc(updateCollection, {"stock": updatedStock})
                }
                )
            }                  
        )
    )
    
    clear()
}






  if (cartItems.length === 0) {
    return (
      <CartStyle>
        <div className="container">
              <h1 className="">NO HAY PRODUCTOS EN EL CART</h1>
              
              <div className="centrado">
                  <Link to={`/`}>
                    <button className="btn_vaciar">
                      <h2>Seguir comprando</h2>
                    </button>
                  </Link>
              </div>
            </div>
      </CartStyle>
    );
  } else {
    return (
      <CartStyle>
          <div className="column">
            <h1>CART</h1>
          </div>

        <div className="column">
          <div className="cart-items">
            {
            cartItems.map((cartItem) => (
                <div key={cartItem.id} className="tarjeta_cart">
                  <img
                    className="img_cart"
                    src={cartItem.img}
                    alt={cartItem.name}
                  />
                  <h3>{cartItem.name}</h3>
                  <p>Unidades: {cartItem.qty}</p>
                  <p>Precio unitario: $ {cartItem.price}</p>
                  <p>Precio total: $ {cartItem.price * cartItem.qty}</p>
                  <button
                    className="btn"
                    onClick={() => deleteItem(cartItem.id)}
                  >
                    x
                  </button>
                
                
            

            </div>
            )
            )
        }
        <div className="container bloque">
            <button
                  className="btn_vaciar"
                  onClick={() => clear()}
                >
                <h3>Vaciar Carrito</h3>
                </button>
            
                
                        <p className="precio_total">Total: $ {totalCost()}</p>
                
        </div>
        </div>
     </div>


     <div className="personalInfoContainer">
                <div className="personalInfo">
                    <form action="#">
                        <div className="input">
                            <label htmlFor="">Nombre: </label><br />
                            <input value={BuyerInfo.buyerName} type="text" className="form-control" name="buyerName" placeholder="Nombre" onChange={formHandler} autoComplete="off"/>
                        </div>
                        <div className="input">
                            <label htmlFor="">Last Name: </label><br />
                            <input value={BuyerInfo.buyerLastName} type="text" className="form-control" name="buyerLastName" placeholder="Apellido" onChange={formHandler} autoComplete="off"/>
                        </div>
                        <div className="input">
                            <label htmlFor="">Email: </label><br />
                            <input value={BuyerInfo.buyerEmail} type="email" className="form-control" name="buyerEmail" placeholder="E-mail" onChange={formHandler} autoComplete="off"/>
                        </div>
                        <button 
                            type="button" 
                            onClick={confirmCheckout}
                            disabled={!(BuyerInfo.buyerName && BuyerInfo.buyerEmail && BuyerInfo.buyerLastName)}
                        >
                            Finalizar Compra
                        </button>
                    </form>
                </div>
            </div>
    
      </CartStyle>
    );
    }
};

export default Cart;

const CartStyle = styled.div`
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  .container {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
  }

  .column {
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
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
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
    display:flex;
    justify-content: center;
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 5px;
    border: none;
    border-radius: 15px;
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

 


  .tarjeta_cart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid grey;
    margin: auto 3rem;
    
}
.tarjeta_cart * {
    width: 20%;
}

.tarjeta_cart :last-child {
    width: 5%;
}

.img_cart {
    width: 3rem;
}

.btn_vaciar {
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
    mask-composite: exclude;
    border-radius: 30px;
    border: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    transition: .5s;
    padding: 0.02rem 0.5rem;
    margin-top: 20px;
    font-size: .7rem;
    cursor: pointer;
}
.centrado{
    display: flex;
    justify-content: center;
}
.precio_total {
    font-size: large;
    color: #fe7bb0;
    display: block;
    padding: 0.02rem 0.5rem;
    margin: 1.5rem 1rem 0 auto;
    text-decoration: underline;
}
.bloque{
    display: inline-flex;
}



.personalInfoContainer{
    width: 50%;
    margin: 0;
}

.personalInfo{
    width: 80%;
    margin: 0 60%;
}
.containerResume{
    padding: 10px 20px;
    position: relative;
    -webkit-box-shadow: 1px 0px 20px 2px rgba(0,0,0,0.3); 
    box-shadow: 1px 0px 20px 2px rgba(0,0,0,0.3);
    width: 80%;
    border-radius: 5px;
    margin-left: 10%;
}

.containerResume h4{
    margin: 0;
}


.thead th{
    font-size: 12px;
}

tbody tr td{
    font-size: 12px;
}

.containerResume h3{
    font-size: 16px;
    text-align: right;
}

.form-control{
    border: 1px solid #fe7bb0;
}
.input label{
    font-weight: bold;
}
.input input{
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    color: #fe7bb0;
}
.input input:focus{
  outline: unset;
  border:3px solid #fe7bb0;
  background-color:#f5f2f3;
  margin-right:30px;

}

.personalInfo button{
    margin-top: 15px;
    background-color:#fe7bb0;
    border: none;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;
    color:white;
    font-weight: bold;
    border-radius: 10px;
}

.personalInfo button:hover{
    background-color:#d26691;
}

.personalInfo button:disabled{
    cursor: unset;
    background-color: #808080;
}
`;
