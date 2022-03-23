import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {
  const greeting = "Tenemos todos los productos saludables que buscas"
  const userName = "César Bergamasco"
  const stock = "4"

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={greeting} userName={userName} />
    <ItemCount stock={stock}/>
    </>
  );
}

export default App;
