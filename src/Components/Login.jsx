import { Box,Button,Image, Input } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom"

import "./Login.png"
function Login(){

   const handleLogin =()=>{

        return <Navigate to="/" />
    }
    
    
    return (
        <>
        <Box display="flex" gap="30px">
            <Box width='480px'  marginLeft="30px">
                 <Box  marginTop="80px"><Image width="200px" height="30px" margin="auto" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png"/></Box>
                 <Box  width="400px" height="60px" fontSize="40px" margin="auto" marginTop="20px">Login</Box>
                 <Box  width="400px" height="25px" fontSize="15px" margin="auto" marginTop="20px" textAlign="left">Username</Box>
                 <Input  variant="outline" width="400px" height="50px" border="1px solid red" marginTop="7px" placeholder="Work-Email"/>
                 <Box  width="400px" height="25px" fontSize="15px" margin="auto" marginTop="20px" textAlign="left">Password</Box>
                 <Input  variant="outline" width="400px" height="50px" border="1px solid red" marginTop="7px" placeholder="Password"/>
                  <Link to="/" ><Button width="400px" height="50px" bg="#ff7342" color="white" marginTop="40px" onClick={handleLogin}>Login</Button></Link>
                 <Box width="400px" height="50px" display="flex" margin="auto" marginTop="20px"><Box border="1px solid #007bff" borderRight="none" width="55px" height="50px" padding="10px"><Image src="https://d2p078bqz5urf7.cloudfront.net/cloud/dev/assets/img/google-favicon.png"/></Box><Button bg="#007bff" color="white" width="340px" height="50px">SIGN IN WITH G SUITE</Button></Box>
                 <Box width="400px" height="25px" fontSize="12px" margin="auto" marginTop="35px" textAlign="centre">Forgot Password?</Box>
                 <Box width="400px" height="25px" fontSize="12px" margin="auto" marginTop="5px" textAlign="centre">Don't have an account? Sign Up</Box>
                 <Box width="400px" height="25px" fontSize="12px" margin="auto" marginTop="5px" textAlign="centre">Privacy Policy</Box>
            </Box>
            <Box width="1023px"> 
                <Image width="1023px" height="740px" src="https://i.ibb.co/PWFKJbQ/Login.png" />
            </Box>
       
        </Box>
        </>
    )
}
export default Login;