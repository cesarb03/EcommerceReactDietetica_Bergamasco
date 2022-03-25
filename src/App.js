import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  const greeting = "Tenemos todos los productos saludables que buscas";
  const userName = "César Bergamasco";

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting} userName={userName} />
    </>
  );
}

export default App;
