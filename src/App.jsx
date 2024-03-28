import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListConteiner } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner />} />
        <Route path='*' element={404} />
        <Route path='/category/:id' element={<ItemListConteiner />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
