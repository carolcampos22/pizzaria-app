import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { SignUpPage } from '../pages/signup/SignUpPage'
import { Homepage } from '../pages/homepage/Homepage'
import { Menu } from '../pages/menu/Menu'
import { ListOfOptions } from '../pages/ListOfOptions/ListOfOptions'
import Cart from '../pages/CartPage/Cart'
import { Navbar } from '../components/Navbar/Navbar'
import { Checkout } from '../pages/Checkout/Checkout'
import { useSelector } from 'react-redux'


export const Router = () => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  return (
    <BrowserRouter> 
      <Navbar />
      <Routes> 
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/listofoptions' element={<ListOfOptions />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};