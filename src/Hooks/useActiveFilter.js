import React, { useState } from 'react'

const useActiveFilter = () => {
    const [activeFilter, setActiveFilter] = useState(false)
    const ModalFilter=()=>{
        if(!activeFilter)
            setActiveFilter(true)
        else{
            setActiveFilter(false);
            }
    }
  return {activeFilter,ModalFilter}
}

export default useActiveFilter