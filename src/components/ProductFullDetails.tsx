"use client"

import { ProductType } from '@/interface/Product'
import ReactStars from 'react-stars'
import CustomImage from './Image'

type Props = {
    product: ProductType
}

const ProductFullDetails = ({ product }: Props) => {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/6 mx-auto flex flex-wrap">
                        <CustomImage product={product} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                            <div className='flex items-center'>
                            <ReactStars className='mr-2' value={product.rating.rate} edit={false} size={25}/>
                            <p>{product.rating.count} Reviews</p>
                            </div>
                            <p className="leading-relaxed my-4">{product.description}</p>
                            <hr />
                            <div className="flex mt-4">
                                <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                <button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add to bag</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductFullDetails