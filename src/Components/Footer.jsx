import React from 'react'
import useAnimation from '../Hooks/useAnimation';

const Footer = () => {
    const {Hover,notHover,Active} = useAnimation();
    
  return (
    <div className="w-full bg-gray-200 px-4 py-2 mt-3">
    <ul>
        <li className="pb-1">
            <h3 className="font-semibold text-gray-900 text-md">Redes</h3>
        </li>
        <li>
            <ul className="flex flex-col gap-1">
                <li className="text-sm font-medium flex items-center gap-2">
                    <h4 className="hover:text-blue-700 transition ease-in-out delay-150 cursor-pointer inline" onMouseOver={()=>Hover()} onMouseOut={()=>notHover()}>Facebook</h4>
                    <i className={Active?"fa-brands fa-facebook text-blue-700 fa-bounce":"fa-brands text-blue-700 fa-facebook"}></i>
                </li>
                <li className="text-sm flex font-medium items-center gap-2">
                    <h4 className="hover:text-red-700 transition ease-in-out delay-150 cursor-pointer inline" onMouseOver={()=>Hover()} onMouseOut={()=>notHover()}>Instagram</h4>
                    <i className={Active?"fa-brands text-red-700 fa-instagram fa-bounce":"fa-brands text-red-700 fa-instagram"}></i>
                </li>
                <li className="text-sm flex font-medium items-center gap-2">
                    <h4 className="hover:text-gray-700 transition ease-in-out delay-150 cursor-pointer inline" onMouseOver={()=>Hover()} onMouseOut={()=>notHover()}>GitHub</h4>
                    <i className={Active?"fa-brands text-gray-700 fa-github fa-bounce":"fa-brands text-gray-700 fa-github"}></i>
                </li>
            </ul>
        </li>
    </ul>
    </div>
  )
}

export default Footer