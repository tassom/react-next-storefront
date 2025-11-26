import Product from '@/components/product/product.component';
import { Metadata } from 'next';

interface PageProps {
        slug: string;
        id: string;
}

const formatSlug = (slug:string) => slug.replaceAll("-", " ").split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


export async function generateMetadata({ params }: { params: Promise<PageProps>}): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: `Product - ${formatSlug(slug)}`,
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