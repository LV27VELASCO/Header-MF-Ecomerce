import React from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'

const Cart = ({ product,addToCard }) => {
  const numberItem=product.length;

  const deleteProduct=(id)=>{
    const token=localStorage.getItem("token");
    if(token){
      const url=`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
      axios.delete(url,{
        headers: {
        Authorization: `Bearer ${token}`
      }})
      .then((res)=>{
        addToCard()
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    
  }

  const subtotal = product.reduce((acc, curr) => {
    return acc + curr.quantity * parseFloat(curr.product.price);
  }, 0);
  
  const navigate =useNavigate()
  const toHome=()=>navigate('/')
  return (
    <div className="w-64 right-8 top-14 absolute bg-white rounded-md">
      <div className="py-2 px-3">
        {
        product.length<1
        ? 
        (
          <div className="w-full h-10 flex flex-col justify-center items-center">
            <i className="fa-solid fa-cart-arrow-down text-xl text-yellow-500"></i>
            <h3 className="text-base font-bold">Tu carro está vacío</h3>
          </div>
        ) 
        : 
        (
          <>
            <div className="border-green-400 flex flex-col gap-1  overflow-hidden overflow-y-auto max-h-44">
              {
              product.map(prod => (
                
                <div className="flex border h-14 bg-gray-50" key={prod?.id}>
                  <div className="w-20 relative h-full">
                    <img
                      src={prod.product.images[0]?.url}
                      className="w-full h-full bg-cover"
                      alt="Imagen producto"
                    />
                    <div onClick={()=>deleteProduct(prod.id)} className="absolute cursor-pointer top-0 w-4 h-4 bg-red-700 flex justify-center items-center">
                      <i className="fa-solid fa-xmark text-xs font-bold text-white"></i>
                    </div>
                  </div>
                  <div className="pl-3 pr-2 w-3/4 flex flex-col justify-around">
                    <h3 className="tracking-tight pb-1 uppercase leading-none font-medium text-xs line-clamp-2 border-b border-red-600">
                      {prod?.product?.title}
                    </h3>
                    <div>
                      <span className="text-sm font-light">
                        {prod?.quantity}x
                      </span>
                      <span className="pl-2 text-sm font-semibold">${prod?.product?.price * prod?.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-1 mt-3 border-gray-500 pb-4 border-t-2">
              <span className="text-gray-600 text-xs">{numberItem} item(s) selected</span>
              <h3 className="font-semibold">SUBTOTAL: ${subtotal}</h3>
            </div>
          </>
        )
        }
      </div>
      {
      product.length<1
      ? 
      (
        <button onClick={()=>toHome} className="bg-blue-600 outline-none text-white rounded-b-md w-full text-lg font-bold px-2 py-2 hover:bg-blue-500 transition-colors duration-700 ease-in-out">
          Ver Productos<i className="fa-solid fa-arrow-right text-base pl-1"></i>
        </button>
      ) 
      : 
      (
        <button className="bg-red-600 outline-none rounded-b-md w-full text-white text-lg font-bold px-2 py-2 hover:bg-red-500 transition-colors duration-700 ease-in-out">
          Checkout <i className="fa-solid fa-arrow-right text-base pl-1"></i>
        </button>
      )}
    </div>
  );
};

export default Cart;
