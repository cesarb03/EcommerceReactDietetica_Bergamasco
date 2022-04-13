import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { InitialProducts } from "../mock/InitialProducts";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

// const promesa = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(InitialProducts);
//   }, 2000);
// });

export const ItemListContainer = (props) => {
  const apiUrl = "https://mocki.io/v1/dafa7457-1258-4b32-abfb-8402047fd584";
  const { greeting, userName } = props;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { brandName } = useParams();

  const getItems = async () => {
    try {
      const response = await fetch(apiUrl);
      const productos = await response.json();

      if (brandName) {
        const filterProductos = productos.filter(
          (element) => element.brand === brandName
        );
        setProductos(filterProductos);
      } else {
        setProductos(productos);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems()
  }, [brandName])

  return (
    <Estilos>
      <div>
        <h1>Bienvenido, {userName}!</h1>
        <h4>{greeting}</h4>
      </div>

      {loading ? (
        <Loader />
      ) 
      : error ? (
        <h1>Lo sentimos, ocurrió un error...</h1>
      ) 
      : (
        <ItemList productos={productos} />
      )}
    </Estilos>
  )
}

export default ItemListContainer;

const Estilos = styled.div`
  h1,
  h4 {
    text-align: center;
  }
`;
