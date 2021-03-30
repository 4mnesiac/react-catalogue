import React from "react";
import Header from "./components/Header";
import acc from "./assets/acc.png";
import Sidebar from "./components/Sidebar";
import brands from './redux/brands.json';
import { Route } from 'react-router-dom';
// import { Home, Cart } from './pages';
import Home from './pages/Home';
import Cart from './pages/Cart';


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
			<div className="catalog__container">
            <div className="catalog-item">
              <img
                className="catalog-item__image"
                src={acc}
                alt="Not allowed "
              />
              <h2>Product 1</h2>
              <p>Brand</p>
              <p>$88.20</p>
              <div className="catalog-item_configurable">
                <fieldset>
                  <label htmlFor="color1">
                    <span
                      style={{
                        backgroundColor: "red",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    ></span>
                  </label>
                  <input name="color" type="radio" id="color1" />
                  <label htmlFor="color2">
                    <span
                      style={{
                        backgroundColor: "green",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    ></span>
                  </label>
                  <input name="color" type="radio" id="color2" />
                  <label htmlFor="color3">
                    <span
                      style={{
                        backgroundColor: "orange",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    ></span>
                  </label>
                  <input name="color" type="radio" id="color3" />
                </fieldset>
                <fieldset>
                  <label htmlFor="size1">
                    <span
                      style={{
                        textAlign: "center",
                        lineHeight: "1",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      S
                    </span>
                  </label>
                  <input type="radio" name="size" id="size1" />
                  <label htmlFor="size2">
                    <span
                      style={{
                        textAlign: "center",
                        lineHeight: "1",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      М
                    </span>
                  </label>
                  <input type="radio" name="size" id="size2" />
                  <label htmlFor="size3">
                    <span
                      style={{
                        textAlign: "center",
                        lineHeight: "1",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      L
                    </span>
                  </label>
                  <input type="radio" name="size" id="size3" />
                </fieldset>
              </div>
            </div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
          </div>
        </div>
		</div>
      </div>
    </div>
  );
}

export default App;
