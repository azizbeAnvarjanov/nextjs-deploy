import Product from "@/components/Product";
import Cta from "@/components/cta";
import { ProductType } from "@/interface/Product";


const Products = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products: ProductType[] = await res.json();

    return (
        <section className="flex flex-col space-y-12 pt-32 px-32">
            <h1 className="text-5xl font-bold text-center">AZIZ SHOP DEALS</h1>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <Cta />
        </section>
    )
}

export default Products