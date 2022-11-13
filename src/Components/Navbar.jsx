import { Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "./Homepage.css"

function Navbar(){
    return(
        <>
        <Box className="nav" display="flex" justifyContent="space-evenly"   padding="20px"  >
            
        <Link to="/"><img src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg" alt="logo" width="200px" height="30px" /></Link>
        <Link to="/products">Products</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/resources" >Resources</Link>
        <h1>Free Tools</h1>
        <h1>Blog</h1>
        <Link to="/login">Login</Link>
        <Button bg="#6639b3" color="white">Free Demo</Button>
        <Button bg="#ff7342" color="white">Free Signup</Button>
        </Box>
        
        </>
    )
}

export default Navbar;