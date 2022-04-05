import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import {Routes, Route} from 'react-router-dom'
import Error from "./components/Error"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"


function App() {
  const greeting = "Tenemos todos los productos saludables que buscas";
  const userName = "César Bergamasco";

  return (
    <>
    <Navbar />
    <Routes>
      <Route
        path='/'
        element={<ItemListContainer userName={userName} greeting={greeting} />}
      />
      <Route
        path='/brands/:brandName'
        element={<ItemListContainer userName={userName} greeting={greeting} />}
      />
      <Route
        path='/product/:id'
        element={<ItemDetailContainer />}
      />
      <Route
        path='/cart'
        element={<Cart />}
      />
      <Route 
        path='*'
        element={<Error />}
      />
    </Routes>
  </>
  );
}

export default App;
