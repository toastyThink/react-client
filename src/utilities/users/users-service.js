import * as usersAPI from "../users/users-api";

export async function getUsers(){
    try {
        const data = await usersAPI.index();
        return data;
    } catch (err){
        console.log(err);
        return err;
    }
}

export async function getUser(id){
    try{
        const foundUser = await usersAPI.detail(id);
        return foundUser;
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}

