"use client";
import { useEffect, useState } from "react";
import ProductCard, { ProductCardProps } from "./productCard.component";

const ProductList = () => {
    const [productList, setProductList] = useState([]);
   
   useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('/api/products-list');
        const data = await response.json();
        setProductList(data.products); // Adjust according to the structure of the API response
    };

    fetchProducts().catch(console.error);
}, []);

    if (!productList || productList.length === 0) 
        return null;


    return (
        <ul className="flex flex-wrap">
            {productList.map((product: ProductCardProps) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </ul>
    );
};

export default ProductList;