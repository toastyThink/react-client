import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users/users-service";
import { Link, useParams } from "react-router-dom";

const MyProfile = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);


    const handleRequest = async () => {
        try{
            const userData = await getUser(userId);
            setUser(userData);   
        }catch(err){
            console.log(err);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        handleRequest();
    }, []);

    const loaded = () => {
        return(
        <>
            <div className="user" key={user._id}>
                <img className="user-image" src={user.image} alt={user.title + "'s" + " Image"}/>
                <h3>{user.userName}</h3>
                <h4>Bio: {user.bio}</h4>
                <div>
                    <h4>Your Favorites</h4>
                    <ol>
                        {user.favorites}
                    </ol>
                </div>
            </div>
            
        
            <Link to={"/"}>Go Back</Link>
    
        </>
        )
    }

    const loading = () => {
        return isLoading ? <h1>Loading User....</h1> : <h1>Error Loading User</h1>
    }

    return !isLoading ? loaded() : loading();
}

export default MyProfile;