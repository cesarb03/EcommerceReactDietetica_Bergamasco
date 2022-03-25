import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import styled from "styled-components";

const productosIniciales = [
  {
    name: "Nueces",
    price: 140,
    stock: 5,
    id: 1,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/hisopos-caja11-9f2cf0d7c57f398f8416333590847488-640-0.jpg",
  },
  {
    name: "Almendras",
    price: 160,
    stock: 4,
    id: 2,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/hisopos-caja11-9f2cf0d7c57f398f8416333590847488-640-0.jpg",
  },
  {
    name: "Maní",
    price: 30,
    stock: 3,
    id: 3,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/hisopos-caja11-9f2cf0d7c57f398f8416333590847488-640-0.jpg",
  },
];

const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(productosIniciales);
  }, 2000);
});

export const ItemListContainer = (props) => {
  const { greeting, userName } = props;

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    promesa
      .then((productos) => {
        setProductos(productos);
      })

      .catch(() => {
        console.log("Todo Mal");
      });
  }, []);

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
