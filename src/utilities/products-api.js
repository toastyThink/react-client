
import config from "../config";
 

export async function index(){

    const res = await fetch(config.BASE_URL, {method: "GET"});

    if (res.ok){
        return res.json();
    }else{
        throw new Error("Invalid Request");
    }
}


export async function create(data){
    const res = await fetch(config.BASE_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (res.ok){
        return res.json();
    }
}

export async function detail(id){
    try{
        const url = `${config.BASE_URL}/${id}`; 
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

export async function getFavorites(){    
    const res = await fetch(config.EXTRA_URL, {method: "GET"});
    if (res.ok){
        return res.json();
    }else{
        throw new Error("Invalid Request");
    }
}

export async function favoriteDetail(id){
    try{
        const url = `${config.EXTRA_URL}/${id}`; 
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

export async function update(id, formData){
    const url = `${config.EXTRA_URL}/${id}`;

    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if(res.ok){
        return res.json();
    }else{
        throw new Error("Invalidate PUT Request");
    }
}

export async function deleteFavorites(id){
    const url = `${config.EXTRA_URL}/${id}`;
    const res = await fetch(url, {
        method: "DELETE",
    });
    if(res.ok){
        return res.json();
    }else{
        throw new Error("Invalid Request");
    }
}
