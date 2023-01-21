import CartProvider from './components/Context/Context';
import Rutas from './routes/Rutas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Loading from './components/Loading/Loading';

function App() {

  const [loading, setLoading ] = useState(false);

  window.onload = function () {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  if (loading) {
    return (
      <Loading/>
    )
  }else{
    return (
      <>
        <CartProvider>
          <Rutas />
        </CartProvider>
      </>
    );
  }

}

export default App;