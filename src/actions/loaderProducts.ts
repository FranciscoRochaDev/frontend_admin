import type { ActionFunctionArgs } from "react-router-dom";
import { getProducts, updateProductAvailability } from "../services/ProductService";

export async function loader() {
    const product = await getProducts()
    return product
}

export async function action({request}: ActionFunctionArgs){
    const data = Object.fromEntries(await request.formData())
    await updateProductAvailability(+data.id)
    return {}
}
