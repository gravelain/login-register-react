import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import LoginPage from './LoginPage'

export default function HomePage() {

    const adminUser = {
        email:"admin@gmail.com",
        password : "admin123"
      }
    
    
      const [user, setUser] = useState({
        name: "",
        email: ""
      }) 
    
      const [error, setError] = useState("");
    
      // function Login 
    
    
    
      const Login = details =>{
        
        console.log(details);
    
        if(details.email === adminUser.email && details.password === adminUser.password){
          console.log("logged In");
    
          setUser({
            name:details.name,
            email:details.email
    
          });
    
        }else{
          console.log("Details do not match ! ");
          setError("Echec d'authentification. Try again or Sign up ! ");
        }
      }
    
      // function Logout
    
      const Logout = () =>{
        setUser({
          name:"",
          email:""
        });
      }

    return (
       
        <div className="text-center">

        {
            (user.email!=="") ? 
            
            (
                <div className="main-title home-page-title">
                    <h1>welcome to our app</h1>
                    <Link to="/">
                        <button className="primary-button" onClick={Logout}>Log out</button>
                    </Link>
                </div>

            ) 
            
            : 
            
            
            (
                <LoginPage Login={Login} error={error}/>
            )


        }
        
        </div>


    )
}
