import { useState } from "react";
import swal from "sweetalert";
import styled from "styled-components";

const ItemCount = (props) => {
  const { stock, onAdd } = props;
  const [counterItem, setCounterItem] = useState(1);

 const itemAdd = () => {
            if(stock === 0){
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
            setCounterItem(0);
        }else{
            if(counterItem < stock){
                setCounterItem(counterItem + 1);
            }else{
                swal({
                    title: 'No puedes superar el stock disponible',
                    icon: 'warning'
                });
            }
        }
    }

    const itemRemove = () => {
        if(stock === 0){
        swal({
            title: 'No hay stock disponible',
            icon: 'error'
        });
        setCounterItem(0);
        }else{
        if(counterItem > 1){
            setCounterItem(counterItem - 1);
        }else{
                swal({
                    text: 'No puede añadir menos de 1 producto',
                    icon: 'info'
                });
            }
        }
    } 

    const onAddCart = () => {
        if (counterItem > 0) {
            onAdd(counterItem)
        }
    }

  return (
    <Contador>
      <div className="containerItemCount">
        {stock > 0 ? (
          <>
            <div className="detailItemCount">
              <button onClick={itemRemove} className="itemRemove">
                -
              </button>
              <div className="itemCuantity">
                <span>{counterItem}</span>
              </div>
              <button onClick={itemAdd} className="itemAdd">
                +
              </button>
            </div>

            <div className="cartAdd">
              <button onClick={onAddCart}>Añadir al Carrito</button>
            </div>
          </>
        ) : (
          <p className="noStock">Sin stock 😟</p>
        )}
      </div>
    </Contador>
  );
};

export default ItemCount;

const Contador = styled.div`
  .detailItemCount {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .itemCuantity {
    width: 100%;
    border: 0.5px solid #c7c7c7;
    text-align: center;
  }

  .detailItemCount button {
    background-color: #fe7bb0;
    border: none;
    box-sizing: border-box;
    padding: 5px 10px;
    cursor: pointer;
    color: white;
    font-weight: bold;
  }
  .itemRemove {
    border-radius: 5px 0px 0px 5px;
  }
  .itemAdd {
    border-radius: 0px 5px 5px 0px;
  }

  .noStock {
    font-weight: normal;
    font-size: 18px;
    color: #808080;
    text-align: center;
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

`
