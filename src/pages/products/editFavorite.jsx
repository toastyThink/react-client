
import { getFavorite, updateFavorite } from "../../utilities/product-service";
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const ShowFavorite = (props) => {
  const [favorite, setFavorite] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [editForm, setEditForm] = useState({ description: " "});
  const {id} = useParams(); 
  const navigate = useNavigate();

  const handleRequest = async () => {
    try{
        //you might need _id instead of id
      const favoriteData = await getFavorite(id);
      if(favoriteData){
        setFavorite(favoriteData);
      }else{
        navigate('/favorites');
      }
      
      const { description } = favoriteData;
      setEditForm({ description });
    }catch(err){
      console.log(err);
      navigate(`/favorites/${id}`);
    }
    setIsLoading(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editForm);
    try{
        const updateFav = await updateFavorite(id, editForm);
        console.log(updateFav);
        navigate(`/favorites`);
    }catch(err){
        console.log(err);
        navigate(`/favorites/${favorite._id}/edit`);
    }
  }

  const handleChange = (e) => {
    setEditForm({ ...editForm, description: e.target.value});
    console.log("here", editForm.description);
  }

  useEffect(() => {
    handleRequest();
  }, []);

  const loaded = () => {
    return(
      <>
      <div className="product" key={favorite._id}>
        <img className="product-image" src={favorite.image} alt={favorite.title + " Image"}/>
        <h3>{favorite.title}</h3>
        <h4>ategory: {favorite.category}</h4>
        <p>{favorite.description}</p>
        <h3>Price: ${favorite.price}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
        style={{width: "200px", height: "100px"}}
        type="text"
        value={editForm.description}
        name="description"
        placeholder="Add your description here"
        onChange={handleChange}
        />
        <input type="submit" value="Update Description"/>
      </form>
     
        <Link to={"/favorites"}>Go Back</Link>
  
      </>
    )
  };

  const loading = () => {
    return isLoading ? <h1>Loading Product....</h1> : <h1>Error Loading Product</h1>
  }


    return !isLoading ? loaded() : loading();
  };
  
  export default ShowFavorite;