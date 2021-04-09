import React from "react";
import Header from "./components/Header";

import Sidebar from "./components/Sidebar";
import brands from './redux/brands.json';
import { Route } from 'react-router-dom';
// import { Home, Cart } from './pages';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from "./components/Category";


function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
		    <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <div className="main-container">
          <Sidebar items={brands}></Sidebar>
          <div className="catalog">
              <h1>Catalog</h1>
              <Category></Category>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
