import React, { useState } from 'react'

const useActiveFilter = () => {
    const [activeFilter, setActiveFilter] = useState(false);
    const [menuActive, setMenuActive] = useState(false)
    const [activeCard, setactiveCard] = useState(false)
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

    const CardActive=()=>{
        if(!activeCard)
            setactiveCard(true)
        else{
            setactiveCard(false);
            }
    }
  return {activeFilter,ModalFilter,menuActive,Menu,activeCard,CardActive}
}

export default useActiveFilter