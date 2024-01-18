import config from "../../config";

export async function index(){

    const res = await fetch(config.USER_URL, {method: "GET"});

    if (res.ok){
        return res.json();
    }else{
        throw new Error("Invalid Request");
    }
}

export async function detail(id){
    try{
        const url = `${config.USER_URL}/${id}`; 
        const res = await fetch(url, {
            method: "GET",
        });
        if(res.ok){
            return res.json();
        }
    }catch(err){
        console.log(err);
        throw new Error("Invalidate Request");
    }
}
