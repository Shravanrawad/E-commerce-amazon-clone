import React from "react"
import Header from "./componants/header/header"
import Footer from "./componants/footer/footer"
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, ScrollRestoration } from "react-router-dom"
import Home from "./pages/home"
import { productdata } from "./api/api"
import Cart from "./pages/cart"
import Signin from "./pages/signin"
import Registration from "./pages/registration"



function App() {

  const Layout = () => {
        return (
          <div>
            <Header/>
            <ScrollRestoration/>
            <Outlet/>
            <Footer/>
          </div>
        )
  }

  const router = createBrowserRouter(
       createRoutesFromElements(
        <Route>
         <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} loader={productdata}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        </Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/Register" element={<Registration/>}></Route>
        </Route> 
       )    
  )

  return (
    <div className="font-bodyFont bg-gray-100">
         <RouterProvider router={router}>

         </RouterProvider>
    </div>
  )
}

export default App
