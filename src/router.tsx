import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import { action as newProductAction, loader as editProductLoader } from "./actions/newProductAction";
import { loader as lodaerProducts } from "./actions/loaderProducts";
import { action as updateAvailabilityAction } from "./actions/loaderProducts";
import EditProduct from "./pages/EditProduct";
import { action as EditProductAction } from "./actions/EditProductAction";
import { action as deleteProductAction } from "./actions/ProductDetailsActions";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: lodaerProducts,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROAD Pattern - Resource-oriented desing
                element: <EditProduct />,
                loader: editProductLoader,
                action: EditProductAction
            },
            {
                path: 'productos/:id/eliminar', // ROAD Pattern - Resource-oriented desing
                element: <Navigate to="/" replace />,
                action: deleteProductAction,
            }
        ]
    }
])

