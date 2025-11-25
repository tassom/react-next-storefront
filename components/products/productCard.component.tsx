import Image from "next/image";
export interface ProductCardProps {
    id: string;
    thumbnail: string;
    title: string;
    price: string;
}

const formatSlug = (title: string) => {
    return title.replaceAll(" ", "-").toLowerCase();
}

const ProductCard = (props: ProductCardProps) => {
    const { id, thumbnail, title, price } = props;
    const slug = formatSlug(title);
    return (
        <li key={id} className="p-2 max-w-[100px]">
            <a href={`/product/${id}/${slug}`}>
                <Image src={thumbnail} alt={title} width={100} height={100}/>
                <p>{title} {price}</p>
            </a>
        </li> 
    );
};

export default ProductCard;