import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Modals from '../components/Modals/Modals';
import ItemListConteiner from '../components/ItemList/ItemListConteiner';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';

const Rutas = () => {
  return (
    <>
      <Router>
        <Modals />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:id" element={<ItemListConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default Rutas;
