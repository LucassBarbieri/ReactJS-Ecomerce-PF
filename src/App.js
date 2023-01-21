import CartProvider from './components/Context/Context';
import Rutas from './routes/Rutas';

function App() {

  return (
    <CartProvider>
      {/* <Spinner /> */}
      <Rutas/>
    </CartProvider>
  );
}

export default App;