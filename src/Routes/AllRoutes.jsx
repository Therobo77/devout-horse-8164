import { Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Pricing from "../Components/Pricing";
import Products from "../Components/Products";
import Resources from "../Components/Resources";
import Login from "../Components/Login";
function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes;