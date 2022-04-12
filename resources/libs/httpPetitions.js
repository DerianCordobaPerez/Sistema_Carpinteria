import axios from "axios"

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