import React, { useEffect, useState } from "react";
import ItemDetail from "../containers/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const itemDetailFiltered = doc(db, "productos", `${id}`);

    getDoc(itemDetailFiltered)
      .then((result) => {
        if (result.exists()) {
          setProducto({
            id: result.id,
            ...result.data(),
          });
        }
      })
      .catch((error) => {
        setError(true);
        console.log(`Error: ${error}`);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      });
  }, [id]);

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>Lo sentimos, ocurrió un error...</h1>
        ) : (
          <div>
            <ItemDetail itemDetail={producto} />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
