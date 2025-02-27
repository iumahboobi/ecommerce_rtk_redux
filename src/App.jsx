// App.js
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import { Footer } from './Components/Footer';
import './App.css'
import SuperCoins from './Components/SuperCoin';
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
        <SuperCoins />
        <Footer/>
      </div>

  );
};

export default App;
