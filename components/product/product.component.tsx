interface ProductProps {
    data:  {
        title: string;  
        description: string;  
    } 
};


const Product = ({ data }: ProductProps) => {
    const { title, description } = data;
    return (
        <div>
            <h1>{title}</h1>
           <p>{description}</p>
        </div>
    );
};
export default Product;