import ItemList from "../containers/ItemList";
import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { db } from "../firebase/firebase"


export const ItemListContainer = (props) => {
  const { greeting, userName } = props;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const itemsCollection = collection(db, 'productos')
    const itemsFiltered = query(itemsCollection, where("category", "==", `${category}`))
    
    if (category) {
        getDocs(itemsFiltered)
            .then((result) => {
                const docs = result.docs
                const list = docs.map(item => {
                    const id = item.id
                    const producto = {
                        id, ...item.data()
                    }
                    return producto
                })
                setProductos(list)
            })
            .catch(error => { 
                setError(true)
                console.log(`Error: ${error}`)
            })
            .finally(() => {
              setTimeout(() => {
                setLoading(false)
              },1000)
            })
    } else {
        getDocs(itemsCollection)
            .then((result) => {
                const docs = result.docs
                const list = docs.map(item => {
                    const id = item.id
                    const producto = {
                        id, ...item.data()
                    }
                    return producto
                })
                setProductos(list)
            })
            .catch(error => { 
                setError(true) 
                console.log(`Error: ${error}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }
}, [category])

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
* {
    margin:0; 
    padding:0;
}
  h1,
  h4 {
    text-align: center;
  }

  @media only screen and (max-width: 600px){ 
    h1,
    h4 {
      text-align: center;
      max-width: 370px;
    }
  }
    
  
`;
