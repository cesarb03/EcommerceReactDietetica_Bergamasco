import ItemCount from "./ItemCount";
import React, { useContext } from "react"
import { context } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";




const ItemDetail = ({ itemDetail }) => {
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  // const [itemQty, setItemQty] = useState(0);
  const { addItem, removeItem } = useContext(context)


  const onAdd = (counterItem) => {
    setAddToCartClicked(true);
    swal({
      text: 'Agregado al Carrito',
      icon: 'success'
      })
      addItem(itemDetail, counterItem) 
  };

const deleteItem = () => {
  removeItem(itemDetail.id) //El item se remueve del carrito
  setAddToCartClicked(false) //Desaparece el boton "DELETE FROM CART"
}


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
            <h5>{itemDetail.description1}</h5>
            <br />
            { addToCartClicked ? 
              (<>
              <ItemCount stock={itemDetail.stock} onAdd={onAdd} />
              <Link to="/Cart" className="cartAdd">
                <button>
                  Comprar
                </button>
              </Link>
              <div className="cartAdd"><button onClick={deleteItem}>Eliminar del Carrito</button></div>
              </>
            )
            :(
            <ItemCount stock={itemDetail.stock} onAdd={onAdd} />
            )
          }
          </div>
        </div>
      </div>
    </EstilosID>
  );
};

export default ItemDetail;

const EstilosID = styled.div`
  width: 50%;
  margin: auto;

  .item {
  }

  img {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 200px;
  }

  h3 {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 200px;
  }
  span {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 200px;
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
