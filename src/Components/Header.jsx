import React from 'react';
import "../styles/header.css"
import Filter from './Filter';
import useActiveFilter from '../Hooks/useActiveFilter';

const Header = () => {
  const {ModalFilter,activeFilter} =useActiveFilter()
  return (
    <>
      <header className="bg-gray-100 py-5 px-4 border-b sticky top-0 z-10 border-gray-300 flex items-center justify-between box-border mb-6">
        <div>
          <h1 className="font-semibold text-lg font-serif text-gray-700">Tienda Virtual</h1>
        </div>
        {/* Contenedor filtrado, user, menu */}
        <div className="flex items-center gap-6">
          {/* Boton filtrado */}
          <button onClick={()=>ModalFilter()} className="border border-gray-300 px-1 flex items-center gap-2" title='Filtrar Productos'>
            <span className="text-sm font-medium text-gray-800">FILTER BY</span>
            {
              activeFilter
              ?
              <i className="fa-solid fa-filter transition ease-in-out duration-700 text-Turqueza"></i>
              :
              <i className="fa-solid fa-filter transition ease-in-out duration-700 text-gray-300"></i>
            }
          </button>

          <button title='Usuario'>
            <i className="fa-solid fa-user text-Turqueza text-xl"></i>
          </button>
          <div className="h-6 w-6  flex flex-col justify-around cursor-pointer" title='Menu'>
            <span className="w-full h-0.5 rounded-lg bg-gray-700 block"></span>
            <span className="w-full h-0.5 rounded-lg bg-gray-700 block"></span>
            <span className="w-full h-0.5 rounded-lg bg-gray-700 block"></span>
          </div>
        </div>
        <Filter activeFilter={activeFilter}/>
      </header>
    </>
    
  )
}

export default Header