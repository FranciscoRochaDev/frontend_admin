import { Form, useFetcher, useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({ product } : ProductDetailsProps) {

    const fetcher = useFetcher()
    const navigate = useNavigate();
    const isAvailibity = product.availability

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form 
                    method="POST"
                >
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${isAvailibity ? 'text-blue-500 border-blue-600' : 'text-red-500'}
                            rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
                    >
                        { isAvailibity ? 'Disponible' : 'No Disponible'}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button 
                        onClick={() => navigate(`/productos/${product.id}/editar`, {
                            
                        })}
                        className="bg-indigo-500 text-white rounded-lg w-full p-2 text-center uppercase font-bold text-sm"
                    >
                        Editar
                    </button>
                    <Form 
                        className="w-full"
                        method="POST"
                        action={`productos/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if(!confirm("¿Eliminar Producto?")){
                                e.preventDefault()
                            }
                        }}
                    >
                        <input 
                            type="submit"
                            value="Eliminar"
                            className="bg-red-500 text-white rounded-lg w-full p-2 text-center uppercase font-bold text-sm"
                        />
                    </Form>
                </div>
            </td>
        </tr> 
    )

}

