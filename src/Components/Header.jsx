import React, { useState } from "react";
import "../styles/header.css";
import Filter from "./Filter";
import useActiveFilter from "../Hooks/useActiveFilter";
import { Outlet, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import UserLogued from "./userLogued";

const Header = ({ product }) => {
  const {
    ModalFilter,
    activeFilter,
    menuActive,
    Menu,
    activeCard,
    CardActive,
  } = useActiveFilter();
  const [logued, setLogued] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const toHome = () => navigate("/");
  const toLogin = () => navigate("/login");
  const toPurchases = () => navigate("/purchases");
  return (
    <>
      <header className="bg-gray-100 py-5 px-4 border-b sticky top-0 z-20 border-gray-300 flex items-center justify-between box-border md:px-7">
        <div onClick={toHome} className="cursor-pointer">
          <h1 className="font-semibold text-lg font-serif text-gray-700">
            Tienda Virtual
          </h1>
        </div>
        {/* Contenedor filtrado, user, menu */}
        <div className="flex items-center gap-6">
          <nav className={menuActive ? "navBar sm:block" : "hidden sm:block"}>
            <ul className="flex flex-col gap-5 sm:flex-row">
              {token ? 
              <>
                <li
                  onClick={() => setLogued(!logued)}
                  title="Usuario"
                  className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1 relative">
                  <i className="fa-solid fa-user"></i>
                </li>
                <UserLogued logued={logued}/>
              </>
                :
                <li
                  onClick={toLogin}
                  title="Loguearte"
                  className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center justify-center gap-1"
                >
                  <p>Login</p>
                  <i className="fa-solid fa-right-to-bracket"></i>
                </li>
              }
              <li
                title="Compras"
                onClick={toPurchases}
                className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center gap-1"
              >
                <p>Purchases</p>
                <i className="fa-solid fa-bag-shopping"></i>
              </li>
            </ul>
          </nav>
          {/* Boton filtrado */}
          <button
            onClick={() => ModalFilter()}
            className="border bg-gray-200 rounded-xl border-gray-300 px-3 py-1 flex items-center gap-2"
            title="Filtrar Productos"
          >
            <span className="text-sm font-medium text-gray-800">FILTER BY</span>
            {activeFilter ? (
              <i className="fa-solid fa-filter transition ease-in-out duration-700 text-Turqueza"></i>
            ) : (
              <i className="fa-solid fa-filter transition ease-in-out duration-700 text-gray-300"></i>
            )}
          </button>

          <button
            title="Carrito"
            className="relative"
            onClick={() => CardActive()}
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            <span className="w-4 h-4 grid place-content-center absolute -top-1 -right-2 rounded-full text-white font-medium bg-green-600 text-xs">
              {product.length}
            </span>
          </button>
          <button
            onClick={() => Menu()}
            className={
              menuActive
                ? "hamburger-menu active sm:hidden"
                : "hamburger-menu sm:hidden"
            }
            title="Menu"
          >
            <span className="line bg-gray-800"></span>
            <span className="line bg-gray-800"></span>
            <span className="line bg-gray-800"></span>
          </button>
        </div>
        <Filter activeFilter={activeFilter} />
        {activeCard && <Cart product={product} />}
      </header>
      <div className="h-6 w-full bg-white"></div>
      <Outlet />
    </>
  );
};

export default Header;
