import { useState } from 'react';
import swal from 'sweetalert';
import styled from 'styled-components'


const ItemCount = (props) =>{

    const [counterItem, setCounterItem] = useState(1);
    const itemStock = props.stock;

    const itemAdd = () => {
            if(itemStock === 0){
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
            setCounterItem(0);
        }else{
            if(counterItem < itemStock){
                setCounterItem(counterItem + 1);
            }else{
                swal({
                    text: 'No puedes superar el stock disponible',
                    icon: 'warning'
                });
            }
        }
    }

    const itemRemove = () => {
        if(itemStock === 0){
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

    const onAddCart = () =>{
        // props.stock > 0 ? props.cartAdd(counterItem) : props.cartAdd(0);
        console.log(counterItem)
    }

    return (
        <Card>
            <div className="ItemListContainer">
                <div className='Items'>
                    <div className="itemList">
                        <div>
                            <div className="item">
                                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/hisopos-caja11-9f2cf0d7c57f398f8416333590847488-640-0.jpg" alt="" />
                             <h3>Hisopos Biodegradables De Bambú Meraki</h3>
                            <span>$239</span><br />
                                <div className="containerItemCount">
                                    <p>Stock: {props.stock}</p>
                                    {
                                     props.stock > 0
                                    ?
                                    <>
                                    <div className="detailItemCount">
                                    <button onClick={itemRemove} className="itemRemove">-</button>
                                    <div className="itemCuantity">
                                        <span>{counterItem}</span>
                                    </div>
                                    <button onClick={itemAdd} className="itemAdd">+</button>
                                    </div>
                                    <div className="cartAdd">
                                    <button onClick={onAddCart}>Añadir al Carrito</button>
                                    </div>
                                    </>
                                    :
                                    <p className="noStock">Sin stock 😟</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </Card>
    )
}

export default ItemCount;

const Card = styled.div`

.detailItemCount{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.itemCuantity{
    width: 100%;
    border: 0.5px solid #c7c7c7;
    text-align: center;
}

.detailItemCount button{
    background-color: #fe7bb0;
    border: none;
    box-sizing: border-box;
    padding: 5px 10px;
    cursor: pointer;
    color:white;
    font-weight: bold;
}
.itemRemove{
    border-radius: 5px 0px 0px 5px;
}
.itemAdd{
    border-radius: 0px 5px 5px 0px;
}

.noStock{
    font-weight: normal;
    font-size: 18px;
    color: #808080;
    text-align: center;
}

.cartAdd button{
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

.item button:hover{
    background-color: #D26691;
}

.ItemListContainer{
    width: 90%;
    margin: auto;
}

.ItemListContainer img{
    width: 100px;
}

.Items{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.textTitle{
    text-align: center;
}

.itemList {
    margin: 15px 450px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 50px;
    box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 32%);
}
.itemList img {
    width: 150px;
}
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

`