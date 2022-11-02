import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReorderProvider } from '../context/ReorderContext';
import NavBar from './content/NavBar/NavBar';
import Footer from './content/Footer/Footer';
import Home from './content/Home/Home';
import { MyOrders, MyOrdersID } from './content/MyOrders/MyOrders';
import Cart from './content/Cart/Cart';
import Product from './content/Product/Product';
import Category from './content/Category/Category';
import Checkout from './content/Checkout/Checkout';
import Error404 from './layouts/Error404';
import "./styles/App.css";
const App = () => {
  return (
    <>
      <ReorderProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/myorders/' element={<MyOrders />} />
            <Route path='/myorders/:id' element={<MyOrdersID />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ReorderProvider>
    </>
  );
}

export default App;
