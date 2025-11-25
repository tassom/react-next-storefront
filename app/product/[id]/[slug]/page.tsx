import Product from '@/components/product/product.component';
import { Metadata } from 'next';

interface PageProps {
        slug: string;
        id: string;
}

export async function generateMetadata({ params }: { params: Promise<PageProps>}): Promise<Metadata> {

    return {
        title: `Product`,
    };
}

const ProductPage = async ({ params }: { params: Promise<PageProps>}) => {

    const { id } = await params;
      
    try {
        const response = await fetch(`http://localhost:3000/api/product?id=${id}`, {
            cache: 'no-store'
        });
   
        if (response.status !== 200) {
            throw new Error('Failed to fetch product');
        }
        
        const productData = await response.json();

        return (
            <Product data={productData} />
        );
    } catch (error) {
        throw new Error('Failed to fetch product');
    }

}


export default ProductPage;