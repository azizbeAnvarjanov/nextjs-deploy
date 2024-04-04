import ProductFullDetails from "@/components/ProductFullDetails";
import { notFound } from "next/navigation";


interface Props {
    params: {
        id: string
    }
}


const PageDetailingPage = async ({ params: { id } }: Props) => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        return (
            <ProductFullDetails product={product}/>
        )
    } catch (error) {
        notFound()
    }
}

export default PageDetailingPage