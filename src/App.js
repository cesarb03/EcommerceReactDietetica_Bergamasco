import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Error from "./components/Error";

function App() {
  const greeting = "Tenemos todos los productos saludables que buscas";
  const userName = "César Bergamasco";

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer userName={userName} greeting={greeting} />
          }
        />
        <Route
          path="/brands/:brandName"
          element={
            <ItemListContainer userName={userName} greeting={greeting} />
          }
        />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
