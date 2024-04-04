"use client"

import { FC } from "react";
import { ProductType } from "@/interface/Product";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "./Image";

type ProductProps = {
    product: ProductType
}


const Product: FC<ProductProps> = ({ product }: ProductProps) => {
    return (
        <Link href={`product/${product.id}`} className="h-96 flex flex-col bg-white border p-6 rounded-lg group hover:scale-105 transition-all ease-out duration-200">
                <div className="relative max-h-72 flex-1">
                    <CustomImage product={product} fill />
                </div>
            <h3 className="tracking-widest text-indigo-500 mt-4 text-xs font-medium title-font">{product.category}</h3>
            <div className="flex justify-between">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 line-clamp-1">{product.title}</h2>
                <p className="text-gray-900 font-medium title-font mb-4">{product.price}</p>
            </div>
            <p className="leading-relaxed text-base line-clamp-2">{product.description}</p>
        </Link>
    )
}

export default Product