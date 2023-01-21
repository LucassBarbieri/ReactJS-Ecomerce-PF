import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Modals from './components/Modals/Modals';
import ItemListConteiner from './components/ItemList/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './components/Context/Context';
// import useFirebase from './hook/useFirebase';

function App() {

  return (
    <CartProvider>
      <Router>
        <Modals />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:id" element={<ItemListConteiner />} />
          <Route path="/productos" element={<ItemListConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;