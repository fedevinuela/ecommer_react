import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListConteiner } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  
  return (
    <>
    <NavBar/>
    <ItemListConteiner greeting="Usted puede comprar aqui"/>
    </>
  )
}

export default App
