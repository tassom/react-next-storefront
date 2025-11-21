interface ProductListProps {
    productList: string[];
}

const ProductList = ({productList}: ProductListProps) => {
    return (
        <div className="product-list">
            {/* Product list content */}
        </div>
    );
};

export default ProductList;