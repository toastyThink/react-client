import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFavs, deleteFavs } from "../../utilities/product-service";
import { useNavigate } from "react-router-dom"; 

const Favorites = (props) =>{
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    async function handleRequest(){
        const favoriteData = await getFavs();
        if(Array.isArray(favoriteData)){
            setFavorites(favoriteData);
        }else{
            console.log(favoriteData);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        handleRequest();
    },[]);

    const Loaded = () => {
        return favorites?.map((favorite) => {

            const handleDelete = async () => {
                try{
                    const deletedItem = await deleteFavs(favorite._id);
                    console.log(deletedItem);
                    navigate("/favorites");
                } catch(err){
                    console.log(err);
                    navigate("/");
                }
            }


            return (
                <>
                <div key={favorite._id}>
                    <img className="product-image" src={favorite.image} alt={favorite.title + " Image"}/>
                    <h3>{favorite.title}</h3>
                    <h4>Category: {favorite.category}</h4>
                    <p>{favorite.description}</p>
                    <h3>Price: ${favorite.price}</h3>
                    <h4>
                      <Link to={`/favorites/${favorite._id}/edit`}>Edit This Description</Link>
                    </h4>
                    <button onClick={() => handleDelete()}>
                        Delete
                    </button>
                </div>
                </>
            );
        });
    };


    const loading = () => (
        <div className="favorites-list">
            <h1>
                Loading Your Favorites...
            </h1>
        </div>
    );

    return (
        <>
        <h2>Your Favorites</h2>
        <hr/>
        <section className="favorites-list">
            {isLoading ? loading() : Loaded()}
        </section>
        </>
    );

}

export default Favorites;
