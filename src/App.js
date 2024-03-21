import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shope from './Pages/Shope'
import Brands from './Pages/Brands'
import BestSeller from './Pages/BestSeller'
import OfferZone from './Pages/OfferZone'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import Products from './components/Product/Products';
import ShopContextProvider from './components/ShopContext/ShopContext';


function App() {
  return (
    <div className='app'>
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shope/>}></Route>
        <Route path='/brands' element={<Brands/>}></Route>
        <Route path='/bestseller' element={<BestSeller/>}></Route>
        <Route path='/offerzone' element={<OfferZone/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/loginsignup' element={<LoginSignup/>}></Route>
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
