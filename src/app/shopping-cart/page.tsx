"use client"

import CustomImage from "@/components/Image";
import { ProductType } from "@/interface/Product";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";


const ShoppingCart = () => {

  const [total, setTotal] = useState(0);

  const [products, setProducts] = useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );


  const removeProduct = (id: number) => {
    const updatedCart = products.filter(p => p.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  }



  const handleIncrement = (id: number) => {
    const updatedCart = products.map((prodct) => {
      if (prodct.id === id) {
        return {
          ...prodct,
          quantity: prodct.quantity + 1
        }
      }
      return prodct;
    })
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  }
  const handleDecrement = (id: number) => {

    const existProduct = products.find(p => p.id === id);

    if (existProduct?.quantity === 1) {
      removeProduct(existProduct.id)
    } else {
      const updatedCart = products.map((prodct) => {
        if (prodct.id === id) {
          return {
            ...prodct,
            quantity: prodct.quantity - 1
          }
        }
        return prodct;
      })
      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  }


  useEffect(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.price + item.quantity
    }, 0);
    setTotal(total)
  }, [products])


  return (
    <>
      {
        products.length ? (
          <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {
                  products.map((product) => (
                    <div key={product.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <div className="relative w-28 h-28">
                        <CustomImage product={product} fill />
                      </div>
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                          <p className="line-clamp-2">{product.description}</p>
                          <p className="mt-1 text-lg font-medium flex items-center">
                            <p className="mr-2">
                              {product.rating.rate}
                            </p>
                            <ReactStars value={product.rating.rate} size={20} />
                          </p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleDecrement(product.id)}> - </span>
                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product.quantity} min="1" />
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => handleIncrement(product.id)}> + </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-md font-bold">${product.price * product.quantity}</p>
                            <svg onClick={() => removeProduct(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">${total}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">$10</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">${Math.floor(total + 10)} USD</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-4 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[100vh]">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="red" className="w-[200px] h-[200px]">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>
            <h1 className="text-[3em] font-bold uppercase">Bag is emty</h1>
            <Link href={"/products"}>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-3 px-4 font-medium text-blue-50 hover:bg-blue-600">All products</button>
            </Link>
            
          </div>
        )
      }
    </>


  )
}

export default ShoppingCart