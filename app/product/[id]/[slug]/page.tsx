import Product from '@/components/product/product.component';
import { Metadata } from 'next';

interface PageProps {
    params: {
        slug: string;
        id: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

    return {
        title: `Product - ${params.slug}`,
    };
}
const ProductPage = async ({params}: PageProps) => {

        const { id } = params;
        
    try {
        const response = await fetch(`/api/product?id=${id}`, {
            cache: 'no-store'
        });
        
        if (!response.ok) {
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