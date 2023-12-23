import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./index.css"

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/resume",
        element: <Resume></Resume>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header>
            <RouterProvider router={router}></RouterProvider>
        </Header>
    </React.StrictMode>,
)
