import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFavs, deleteFavs } from "../../utilities/product-service";
import { useNavigate } from "react-router-dom"; 

const Favorites = (props) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    
    async function handleRequest(){
        const favoriteData = await getFavs();
        if(Array.isArray(favoriteData.products)){
            setFavorites(favoriteData.products);
        }else{
            console.log(favoriteData.products);
        }
        setIsLoading(false);
    }

    const handleDelete = async (favId) => {
        try{
            await deleteFavs(favId);
            navigate("/")
        } catch(err){
            console.log(err);
            navigate("/");
        }
    }

    useEffect(() => {
        handleRequest();
    },[]);

    const Loaded = () => {
 
        return (
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Favorites</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {favorites?.map((favorite) => (
                        
                        <div key={favorite._id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                            src={favorite.image}
                            alt={favorite.title + " Image"}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3 className="text-sm text-gray-700">
                                {favorite.title}
                            </h3>
                           
                            </div>
                            <p className="text-sm font-medium text-gray-900">${favorite.price}</p>
                        </div>
                            <button onClick={() => handleDelete(favorite._id)}>
                            <Link to={"/"}> Delete </Link>
                            </button>
                        </div>
                    ))}
                    
                    </div>
                </div>
            </div>
        )

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
            {isLoading ? loading() : Loaded()}

        </>
    );

}

export default Favorites;
