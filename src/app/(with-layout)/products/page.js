import SingleProducts from "@/components/HomePage/Products/SingleProducts";
import getAllProducts from "@/utils/getAllProducts";

const ProductsPage = async ({searchParams}) => {

const products = await getAllProducts(searchParams.categoryId)

console.log(products)
    return (
        <div className="grid grid-cols-4 w-[1240px] my-36 mx-auto gap-10">
            {
                products.map(product => <SingleProducts key={product.id} product={product} />)
            }
        </div>
    );
};

export default ProductsPage;