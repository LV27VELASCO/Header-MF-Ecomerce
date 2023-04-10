import React from 'react';
import "../styles/header.css"
import Filter from './Filter';
import useActiveFilter from '../Hooks/useActiveFilter';
import {Outlet,useNavigate} from "react-router-dom"

const Header = () => {
  const {ModalFilter,activeFilter,menuActive,Menu} =useActiveFilter();
  const navigate =useNavigate()
  const toLogin=()=>navigate('/login')
  const toPurchases=()=>navigate('/purchases')
  return (
    <>
      <header className="bg-gray-100 py-5 px-4 border-b sticky top-0 z-10 border-gray-300 flex items-center justify-between box-border mb-6 md:px-7">
        <div>
          <h1 className="font-semibold text-lg font-serif text-gray-700">Tienda Virtual</h1>
        </div>
        {/* Contenedor filtrado, user, menu */}
        <div className="flex items-center gap-6">
        <nav className={menuActive?"navBar sm:block":"hidden sm:block"}>
            <ul className="flex flex-col gap-5 sm:flex-row">
              <li onClick={toLogin} title='Loguearte' className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center gap-1">
                <p>Login</p>
               <i className="fa-solid fa-right-to-bracket"></i>
              </li>
              <li title='Compras' onClick={toPurchases} className="px-3 py-1 font-medium  bg-gray-200 rounded-xl cursor-pointer flex items-center gap-1"> 
                <p>Purchases</p>
                <i className="fa-solid fa-bag-shopping"></i>
              </li>
            </ul>
        </nav>
          {/* Boton filtrado */}
          <button onClick={()=>ModalFilter()} className="border bg-gray-200 rounded-xl border-gray-300 px-3 py-1 flex items-center gap-2" title='Filtrar Productos'>
            <span className="text-sm font-medium text-gray-800">FILTER BY</span>
            {
              activeFilter
              ?
              <i className="fa-solid fa-filter transition ease-in-out duration-700 text-Turqueza"></i>
              :
              <i className="fa-solid fa-filter transition ease-in-out duration-700 text-gray-300"></i>
            }
          </button>
          
          <button title='Carrito' className="relative">
          <i className="fa-solid fa-cart-shopping text-lg"></i>
          <span className="w-4 h-4 grid place-content-center absolute -top-1 -right-2 rounded-full text-white font-medium bg-green-600 text-xs">0</span>
          </button>
          <button onClick={()=>Menu()} className={menuActive?"hamburger-menu active sm:hidden":"hamburger-menu sm:hidden"} title='Menu'>
          <span className="line bg-gray-800"></span>
          <span className="line bg-gray-800"></span>
          <span className="line bg-gray-800"></span>
          </button>
        </div>
        <Filter activeFilter={activeFilter}/>
      </header>
      <Outlet/>
    </>
    
  )
}

export default Header