import { useState, useEffect } from "react";
import { getProducts } from "../../utilities/product-service";
import { Link } from "react-router-dom";


const Products = (props) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    async function handleRequest(){
        const productData = await getProducts();

        if(Array.isArray(productData)){
            setProducts(productData);
        }else{
            console.log(productData);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        handleRequest();
    }, []);

    // console.log(`There are ${products.length} products available to render`);

    const Loaded = () => {
        return products?.map((product) => {
            
            return (
                <>
                <div key={product._id}>
                    <img className="product-image" src={product.image} alt={product.title + " Image"}/>
                    <h3>{product.title}</h3>
                    <h4>Category: {product.category}</h4>
                    {/* <p>{product.description}</p> */}
                    <h3>Price: ${product.price}</h3>
                    <h4>
                      <Link to={`../products/${product._id}`}>See More</Link>
                    </h4>
                </div>
                </>
            );
        });
    };

    const loading = () => (
        <div className="product-list">
            <h1>
                Loading Products...
            </h1>
        </div>
    );
 
    return (
        <>
            <section className="product-list">
            <h2>Our Best Deals</h2>
            <hr/>
                {isLoading ? loading() : Loaded()}
            </section>
        </>
    );
}

export default Products;
