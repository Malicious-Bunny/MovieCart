import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Pages/Home";
import CartPage from "./Components/Pages/CartPage";
import MobileCart from "./Components/Macro/MobileCart";
import PreviewPage from "./Components/Pages/PreviewPage";

export default function Router(){
   const BrowserRouter = createBrowserRouter([
    {
      path : '/',
      element : <App />,
      children : [
        {index:true, element : <Home /> },
        {path : 'Cart', element : <CartPage /> },
        {path: 'mobile', element : <MobileCart />},
        {path : 'Preview/:name', element : <PreviewPage /> }
      ]

    },
    {
      path : '/Preview/:name',
      element : <PreviewPage />
    }

   ])

   return <RouterProvider router={BrowserRouter} />
}