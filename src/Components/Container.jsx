import React, { Children, Suspense } from 'react'
import Header from "./Header";
import Footer from "./Footer"
const Container = (props) => {
  return (
    <>
    <Header/>
    {
        props.children
    }
    <Footer/>
    </>
  )
}

export default Container