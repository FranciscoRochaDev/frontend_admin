import { Form, Link, useActionData } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";

export default function NewProduct() {

    const error = useActionData() as string

    return (
    <>
        <div className="flex justify-between">
            <h2 className="text-4xl font-bold text-slate-500">Registrar Productos</h2>
            <Link
                to='/'
                className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white
                    shadow-md hover:bg-indigo-400"
            >
                Volver a Producto
            </Link>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form
            className="mt-10"
            method="post"   
        >
            <ProductForm 
                
            />
            <input
                type="submit"
                className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                value="Registrar Producto"
            />
        </Form>
    </>
  )
}

