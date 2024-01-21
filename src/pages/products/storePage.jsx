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
    
    const Loaded = () => {

    return (
   
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Best Deals</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((products) => (
                <>
                <div key={products._id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                    src={products.image}
                    alt={products.title + " Image"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`../products/${products._id}`}>View Item Details
                        <span aria-hidden="true" className="absolute inset-0" />
                        </Link>
                    </h3>
                    </div>
                    <p className="text-sm font-bold text-gray-900"> {"$ " + products.price}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{products.title}</p>

                </div>
                
            </>
            ))}
            </div>
        </div>
        </div>
        )
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
         {isLoading ? loading() : Loaded()}
        </>
    );
}

export default Products;
