import React from 'react';
import useActiveFilter from '../Hooks/useActiveFilter';
import "../styles/Animations.css";

const Filter = ({activeFilter}) => {
    const style="transition bg-gray-100 ease-in-out duration-700 border top-full left-1/2 border-gray-200 absolute p-2 rounded-lg shadow-md"
  return (
<div className={activeFilter?`${style} filterAct`:` ${style} filterInact`}>
    <ul>
        <li className="border-b border-gray-700">
          <span className="font-medium text-base text-Turqueza">Marcas</span>
        </li>
        <li className="pl-2">
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <div className="flex items-center gap-1"> 
                <input className="w-4 h-4" type="checkbox" id="Samsung"/>
                <label htmlFor="Samsung" className="font-medium text-gray-800 text-base">Samsung</label>
                </div>
            </li>
            <li>
                <div className="flex gap-1 items-center">
                  <input className="w-4 h-4" type="checkbox" id="Apple"/>
                  <label htmlFor="Apple" className="font-medium text-gray-800 text-base">Apple</label>
                </div>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                  <input className="w-4 h-4" type="checkbox" id="Xiaomi"/>
                  <label htmlFor="Xiaomi" className="font-medium text-gray-800 text-base">Xiaomi</label>
              </div>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                  <input className="w-4 h-4" type="checkbox" id="Cosmo"/>
                  <label htmlFor="Cosmo" className="font-medium text-gray-800 text-base">Cosmo</label>
              </div>
            </li>
          </ul>
        </li>
        <li className="border-b border-gray-700">
          <span className="font-medium text-base text-Turqueza">Categoria</span>
        </li>
        <li className="pl-2">
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <div className="flex gap-1 items-center">
                <input className="w-4 h-4" type="checkbox" id="Computers"/>
                <label htmlFor="Computers" className="font-medium text-gray-800 text-base">Computers</label>
              </div>
            </li>
            <li>
                <div className="flex gap-1 items-center">
                  <input className="w-4 h-4" type="checkbox" id="Smartphones"/>
                  <label htmlFor="Smartphones" className="font-medium text-gray-800 text-base">Smartphones</label>
                </div>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                  <input className="w-4 h-4" type="checkbox" id="Stoves"/>
                  <label htmlFor="Stoves" className="font-medium text-gray-800 text-base">Stoves</label>
              </div>
            </li>
            <li>
              <div className="flex gap-1 items-center">
                  <input className="w-4 h-4" type="checkbox" id="Smart_TV"/>
                  <label htmlFor="Smart_TV" className="font-medium text-gray-800 text-base">Smart TV</label>
              </div>
            </li>
          </ul>
        </li>
    </ul> 
</div>
  )
}

export default Filter