

//grab two items from db "favorites" collection

//if more than 2 items selected, all extra items return error and are rejected

//2) BackEnd Routes Being Hit: /favorites/:id
//getCompare 
// getCompare will be triggered by a button placed on each favorite

    //get by id -> /favorites/:id 
//////////////////////////////////////////////////////////////////////


//3) Which models you are interfacing with and what the expected data to be returned might be
//Favorites Model expected to be hit with /favorites/:id req 
// /favorites/:id -> is epected to pass through favorites.js router ->
        //fav router will then direct req through 
                    // show/details page route
                    //router.get("/:id", favoritesCtrl.show);

        //Then req will acces favorites.js controller function to hit database "favorites" collection
        //and return the document with the matching id

//////////////////////////////////////////////////////////////////////

///// Favorites model expected to be used ///////////////////////////
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const FavoritesSchema = new Schema({
// title: String,
// price: String,
// description: String,
// category: String,
// image: String,

// },{timestamps: true});

// module.exports = mongoose.model("Favorites", FavoritesSchema);

///////////////////////////////////////////////////////////////////

//1)///What is triggering the comparison (which page and service functions in the client)

//Use useState([]), set to an empty array to save the get requested items

//if( compareItems.length > 2){
    //compareItems.pop()
    //console.log("you can't have more than 2 items")
//}else{
    //console.log(error);
//}

// const [isLoading, setIsLoading] = useState(true); 
 //const [compareItems, setCompareItems] = useState([]);
 //items will be stored in empty [] from useState

 //What the handlReq function will look like:
 //will be grabbing favorites based on the id of the item
 //that had its "Compare Price" button clicked
 
//  const handleRequest = async () => {
//     try{
//       const compareData = await getCompare(id);
//       if(compareData){
//         setCompare(compareData);
//       }else{
//         navigate('/comparePrice');
//       }
//     }catch(err){
//       console.log(err);
//       navigate(`/favorites`);
//     }
//     setIsLoading(false);
//   }

//Compare Function: 
//will be a simple if statement that checks if first item
//in useState([]) array is bigger than second item

// if(compareItems[0].price > compareitems[1].price){
    //<h1>{compareItems[0].name} is more expensive!</h1>
//}else{
     //<h1>{compareItems[1].name} is more expensive!</h1>
//}

 //delete button -> compareItems.pop() 2 times to remove all items 
    //onClick -> <h1>Youre items have been removed</h1>

