import axios from "axios"
import { authFetch } from  "./auth";

//TODO: Implementar Hooks en lugar de funciones normales.
export const getData = async (route)=>{
    try{
        const data = await axios.get(
            `/api/${route}/list`           
        );
        console.log(data);
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export const useFetch = async (url, _loading, options) =>{
    let status = null;
    let response = null;
    let data = null;

    try {
        const crftoken = document.querySelector('meta[name="csrf-token"]').content;
        
        response = await authFetch(`/api/${url}`, {
            headers: {
                "X-CSRF-TOKEN": crftoken,
            },
            ...options,
        });

        ({ data, status } = response);
    } catch (error) {
        console.log(error);
    } finally {
        _loading = false;
    }

    return {
        data,
        status,
        response,
    };
}

