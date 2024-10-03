import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Details from "./components/Details";
import ProductForm from "./components/ProductForm";
import SharedComponent from "./shared/SharedComponent";
import './ProductForm.css';
import './ProductDetails.css';
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"; 
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { useState } from "react";
import { productsList } from "./Data/productList";
function App() {
    let [products, setProducts] = useState(productsList);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route index element={<Login />} /> 
                <Route path='/' element={<SharedComponent />}>
                    <Route
                        path='home'
                        element={
                            <PrivateRoute>
                                <Home  />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='products'
                        element={
                            <PrivateRoute>
                                <Products products={products} setProducts={setProducts} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='products/:id'
                        element={
                            <PrivateRoute>
                                <Details products={products} setProducts={setProducts} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='products/:id/edit'
                        element={
                            <PrivateRoute>
                                <ProductForm products={products} setProducts={setProducts} />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </>
        )
    );
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}
export default App;
