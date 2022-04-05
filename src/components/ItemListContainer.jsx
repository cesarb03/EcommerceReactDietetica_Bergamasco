import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { InitialProducts } from "../mock/InitialProducts";
import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(InitialProducts);
  }, 2000);
});

export const ItemListContainer = (props) => {
  const apiUrl = "https://mocki.io/v1/2b4a0fb9-be2c-4ace-881b-cf86977c2e87";
  const { greeting, userName } = props;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { brandName } = useParams()

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
    getItems();
  }, [brandName]);

  return (
    <Estilos>
      <div>
        <h1>Bienvenido, {userName}!</h1>
        <h4>{greeting}</h4>
      </div>

      <ItemList productos={productos} />
    </Estilos>
  );
};

export default ItemListContainer;

const Estilos = styled.div`
  h1,
  h4 {
    text-align: center;
  }
`;
