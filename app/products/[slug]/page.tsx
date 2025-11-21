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
		(async () => {
			try {
                const response = await fetch(`/api/products`);
                setProductList( response?.products?.length ? await response.products : []);
			} catch (error) {
                console.error("Error:", error);
            }
		})();
	}, []);


    console.log('productList', productList);

    if(!productList?.products?.length) return null;

    return (
        <ProductList productList={productList.products}/>
    );
}

export default ProductPage;