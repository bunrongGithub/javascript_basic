import axios from "axios";
import ProductsProps from "./definitionProduct";
import Link from "next/link";
import Categories from "./Categories";
import ProductItems from "./ProductItems";
const BASE_URL = `http://localhost:3000`;
async function getProducts(base_url: string): Promise<ProductsProps[]> {
    try {
        const response = (await axios.get(`${base_url}/products`));
        if (response.status !== 200) throw new Error("Failed to fetch data")
        return response.data;
    } catch (error) {
        return [];
    }
}
export default async function Page() {
    const products = await getProducts(BASE_URL);

    if (products.length === 0) {
        return <p className="text-center text-red-500  mt-10">No products available</p>;
    }
    return (
        <>
            <Categories/>
            <section className="w-full m-auto p-4 md:p-6 lg:p-8 flex flex-wrap gap-8">
                <ProductItems products ={ products } />
            </section>
        </>
    );
}