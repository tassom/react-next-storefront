"use client";
import ProductList from '@/components/products/productList.component';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

interface PageProps {
    params: {
        slug: string;
    };
}

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//     return {
//         title: `Product - ${params.slug}`,
//     };
// }

const ProductPage = ({ params }: PageProps) => {
    const [productList, setProductList] = useState([]);
   // const { slug } = params;

    
    
   useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProductList(data.products); // Adjust according to the structure of the API response
    };

    fetchProducts().catch(console.error);
}, []);


    if(!productList?.length) return null;

    return (
        <ProductList productList={productList}/>
    );
}

export default ProductPage;