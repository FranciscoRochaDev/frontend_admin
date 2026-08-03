import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router-dom";
import { addProduct, getProductsById } from "../services/ProductService";

export async function loader({params} : LoaderFunctionArgs) {
    if(params.id !== undefined){
        const product = await getProductsById(+params.id)
        if(!product){
            // throw new Response('', {status: 404, statusText: 'No encontrado'})
            return redirect('/')
        }
        return product
    }
}

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

    await addProduct(data)

    return redirect('/')
}
