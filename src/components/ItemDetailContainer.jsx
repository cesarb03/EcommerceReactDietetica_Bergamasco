import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { InitialProduct } from "../mock/InitialProduct";
import Loader from './Loader'
import { useParams } from "react-router-dom"; 

const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(InitialProduct);
    }, 2000);
});

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    const apiUrl = "https://mocki.io/v1/765ea156-bdb7-47a5-ad9d-96b0cafcff1e"
    const {id} = useParams()
 
    useEffect(() => {
          fetch(apiUrl)
          .then(productos => productos.json())
          .then((productos) => {
              if (id) {
                  const filterProducto = productos.filter(
                      (element) => element.id === id
                  )
                  setProducto(filterProducto)
              }else{
                  <h1>No hay ningún producto seleccionado</h1>
              } 
          }) 
      }, [id]) 

    useEffect(() => {
        getItem.then((producto) => {
            setProducto(producto)
        }).catch(() => {
            console.log("Algo salió mal")
        })
    }, [])

  return (
      <>
          <div>
              {
                  producto.length > 0 ?
                      producto.map((itemDetail) => (
                          <div key={itemDetail.id}>
                              <ItemDetail itemDetail={itemDetail} />
                          </div>
                      )) : (
                          <Loader />
                      )
              }
          </div>
      </>
  )
}

export default ItemDetailContainer