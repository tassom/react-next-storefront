
import ProductList from '@/components/productsList/productList.component';
import { Metadata } from 'next';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    return {
        title: `Product List`,
    };
}

const ProductPage = () => {

    return (
        <ProductList />
    );
}

export default ProductPage;