import Image from "next/image";

interface ProductProps {
    data:  {
        title: string;  
        description: string;  
        thumbnail: string;
        price: string;
        images: string[];
    } 
};

const formatPrice = (price: string) => {
    return `$${price}`;
}

const Product = ({ data }: ProductProps) => {
    const { title, description, images, price } = data;
    return (
        <>
            <h1>{title}</h1>
           <p>{description}</p>
           <p>{formatPrice(price)}</p>
           <Image src={images[0]} alt={title} width={200} height={200}/>
        </>
    );
};
export default Product;