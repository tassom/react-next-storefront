import Image from "next/image";

interface ProductListProps {
    productList: string[];
}

const ProductList = ({productList}: ProductListProps) => {
    return (
        <ul className="flex flex-wrap">
        {productList.map((product: any) => (
            <li key={product.id} className="p-2 max-w-[100px]">
                <a href={`/product/${product.sku}`}>
                <Image src={product.thumbnail} alt={product.title} width={100} height={100}/>
                <p>{product.title} {product.price}</p>
                </a>
            </li> 
        ))}
        </ul>
    );
};

export default ProductList;