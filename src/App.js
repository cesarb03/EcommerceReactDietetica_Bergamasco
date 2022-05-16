import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import Error from "./components/Error";
import CustomProvider from './context/CartContext'
import Footer from "./components/Footer";


function App() {
  const greeting = "Tenemos todos los productos saludables que buscas";
  const userName = "César Bergamasco";

  return (
    <>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer userName={userName} greeting={greeting} />
            }
          />
          <Route
            path="/category/:category"
            element={
              <ItemListContainer userName={userName} greeting={greeting} />
            }
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </CustomProvider>
    </>
  );
}

export default App;
