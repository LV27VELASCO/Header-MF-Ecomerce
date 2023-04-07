import React, { useState } from 'react'

const useAnimation = () => {
    const [Active, setActive] = useState(false)

    const Hover=()=>{
        setActive(true)
    }

    const notHover=()=>{
        setActive(false)
    }

    return {Active, Hover,notHover}
}

export default useAnimation