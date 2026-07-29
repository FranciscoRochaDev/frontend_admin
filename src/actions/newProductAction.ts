import { type ActionFunctionArgs } from "react-router-dom";

// Funcion que crea el producto
export async function action({request} : ActionFunctionArgs ) {

    const data = Object.fromEntries(await request.formData())

    let error = ''
    if(Object.values(data).includes("")){
        error = "Todos los campos son obligatorios"
    }
    
    if(error.length){
        return error
    }

    return {}
}
