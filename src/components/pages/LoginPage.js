import React, {useState} from 'react'
import { Link }  from 'react-router-dom'

import '../../App.css'


export default function SignInPage() {


    
    const adminUser = {
        email:"admin@gmail.com",
        password : "admin123"
    }
    
    
      const [user, setUser] = useState({
        name: "",
        email: ""
      }) 
    
    const [error, setError] = useState("");

    // Hooks Pour préparer le modèle de données à recevoir 
    
    const [details, setDetails] = useState({
        email: "", 
        password: ""
    });

    // La fonction de soumission du formulaire

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    const Login = details =>{
        
        console.log(details);
    
        if(details.email === adminUser.email && details.password === adminUser.password){
          console.log("logged In");
    
          setUser({
            name:details.name,
            email:details.email
    
          });

          setError("");

          
    
        }else{
          console.log("Details do not match ! ");
          setError("Echec d'authentification. Try again or Sign up ! ");
        }
      }

      // redirection funciton

    return (
        <div className="text-center m-5-auto">

            
            {
            
            (error !=="") ?

            (<div className="error">{error}</div>) 
            
            : 
            
            ""
          
          
          }

          {
              (user.email!=="")?
              (
                <div className="main-title home-page-title">
                    <h1>welcome to our app</h1>
                    <Link to="/">
                        <button className="primary-button">Log out</button>
                    </Link>
                </div>
              ):
              (
                
                <form onSubmit={submitHandler}>
                    <h2>Sign in to us</h2>
                    <p>
                        <label>Username or email address</label><br/>
                        <input type="text" name="email" onChange={ e=> setDetails({...details, email: e.target.value})} value={details.email} required />
                    </p>
                    <p>
                        <label>Password</label>
                        <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                        <br/>
                        <input type="password" name="password" onChange={ e=> setDetails({...details, password: e.target.value})} value={details.password} required />
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Login</button>
                    </p>
                </form>
              )
          }
            
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
