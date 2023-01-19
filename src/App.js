import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Modals from './components/Modals/Modals';
import ItemListConteiner from './components/ItemList/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <Router>
      <Modals />
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productos" element={<ItemListConteiner />} />
        </Routes>
    </Router>
  );
}

export default App;