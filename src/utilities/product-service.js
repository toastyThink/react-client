
import * as productsAPI from "../utilities/products-api";

export async function getProducts(){
    try {
        const data = await productsAPI.index();
        return data;
    } catch (err){
        console.log(err);
         err;
    }

}

export async function getProduct(id){
    try{
        const foundProduct = await productsAPI.detail(id);
        return foundProduct;
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}

export async function getFavs(){
    try{
        const favoriteData = await productsAPI.getFavorites();
        return favoriteData;
    }catch(err){
        console.log(err);
        err;
    }
}

export async function getFavorite(id){
    try{
        const foundFavorite = await productsAPI.favoriteDetail(id);
        return foundFavorite;
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}

export async function updateFavorite( id, data){
    try{
        const updatedPerson = await productsAPI.update(id, data);
        return updatedPerson;
    }catch(err){
        throw err;
    }
}

export async function deleteFavs(id){
    try{
        const deletedFav = await productsAPI.deleteFavorites(id);
        return deletedFav;
    }catch(err){
        throw err;
    }
}

export async function createFavorite(data){
    try{
        const newFavorite = await productsAPI.create(data);
        return newFavorite
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

