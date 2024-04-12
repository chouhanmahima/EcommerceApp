import logo from './logo.svg';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import {productData} from './api/api';

const Layout = () =>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
     <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productData}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
     </Route>
  ))
  return (
    <div className="font-bodyFont bg-gray-100">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
