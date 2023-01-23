import CartProvider from './components/Context/Context';
import Rutas from './routes/Rutas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';

function App() {

  return (
    <>
      <CartProvider>
        <Layout>
          <Rutas />
        </Layout>
      </CartProvider>
    </>
  );
  // }

}

export default App;