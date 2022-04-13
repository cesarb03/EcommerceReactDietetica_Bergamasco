import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import { InitialProduct } from "../mock/InitialProduct";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://mocki.io/v1/dafa7457-1258-4b32-abfb-8402047fd584";
  const { id } = useParams();

  const getItem = async () => {
    try {
      const response = await fetch(apiUrl);
      const productos = await response.json();

      if (id) {
        const filterProducto = productos.filter(
          (element) => element.id.toString() === id
        );
        setProducto(filterProducto);
      } else {
        <h1>No hay ningún producto seleccionado</h1>;
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem()
  }, [id])

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>Lo sentimos, ocurrió un error...</h1>
        ) : (
          producto.map((itemDetail) => (
            <div key={itemDetail.id}>
              <ItemDetail itemDetail={itemDetail} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
