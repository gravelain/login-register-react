import axios from 'axios';
import React, {useState} from 'react'
import { Link }  from 'react-router-dom'

import '../../App.css'


export default function SignInPage(props) {


    
   

    // Hooks Pour préparer le modèle de données à recevoir 
    
    const [details, setDetails] = useState({
        email: "", 
        password: ""
    });

    // La fonction de soumission du formulaire

    const submitHandler = e =>{

      axios.post("http://localhost:3333/auth/local/signin", {
        email : details.email,
        password : details.password
      })
      .then(reponse =>{
        console.log("response =====>", reponse);
      })
      .catch(error =>{
        console.error("error =====>", error);
      });

        /* e.preventDefault();
        props.history.push('/home') */
    }

    
      // redirection funciton

    return (
        <div className="text-center m-5-auto">

            
          
                
                <form onSubmit={submitHandler}>
                    <h2>Sign in to us</h2>
                    <p>
                        <label>Username or email address</label><br/>
                        <input type="text" name="email" onChange={ e=> setDetails({...details, email: e.target.value})} value={details.email}  />
                    </p>
                    <p>
                        <label>Password</label>
                        <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                        <br/>
                        <input type="password" name="password" onChange={ e=> setDetails({...details, password: e.target.value})} value={details.password}  />
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Login</button>
                    </p>
                </form>
              
          
            
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
