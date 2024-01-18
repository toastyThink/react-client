
import { getProduct } from "../../utilities/product-service";
// import { getUser } from "../../utilities/users/users-service";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import { createFavorite } from "../../utilities/product-service";

const Show = (props) => {
  const [product, setProduct] = useState(null); 

  const [isLoading, setIsLoading] = useState(true); 
  const {id} = useParams(); 

  // const userId = "65a7e3222022fa6a590f9289";

  const handleRequest = async () => {
    try{
      const productData = await getProduct(id);
      setProduct(productData);
      
      // const userData = await getUser(userId);
      // setUser(userData);   
    }catch(err){
      console.log(err);
    }
    setIsLoading(false);
  };

 const addFavorite = async (e) => {
  e.preventDefault();
    try{
    console.log(product);
     const newFav = await createFavorite(product);
     console.log("this is new ", newFav);

    }catch(err){
      console.log(err);
    } 
  }

  useEffect(() => {
    handleRequest();
  }, []);

  const loaded = () => {
    return(
      <>
      <div className="product" key={product._id}>
        <img className="product-image" src={product.image} alt={product.title + " Image"}/>
        <h3>{product.title}</h3>
        <h4>ategory: {product.category}</h4>
        <p>{product.description}</p>
        <h3>Price: ${product.price}</h3>
      </div>


      <button onClick={(e) => addFavorite(e)}>
        Add to Favorites
      </button>
     
        <Link to={"/"}>Go Back</Link>
  
      </>
    )
  };

  const loading = () => {
    return isLoading ? <h1>Loading Product....</h1> : <h1>Error Loading Product</h1>
  }


    return !isLoading ? loaded() : loading();
  };
  
  export default Show;
  