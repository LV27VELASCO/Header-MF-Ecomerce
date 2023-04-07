import React, { useState } from 'react'

const useActiveFilter = () => {
    const [activeFilter, setActiveFilter] = useState(false);
    const [menuActive, setMenuActive] = useState(false)
    const ModalFilter=()=>{
        if(!activeFilter)
            setActiveFilter(true)
        else{
            setActiveFilter(false);
            }
    }

    const Menu =()=>{
        if(!menuActive)
            setMenuActive(true)
        else{
            setMenuActive(false);
            }
    }
  return {activeFilter,ModalFilter,menuActive,Menu}
}

export default useActiveFilter