import React from 'react'
import { Link }  from 'react-router-dom'

import '../../App.css'


function LoginPage() {
    
      // redirection funciton

    return (
        <div className="text-center m-5-auto">

            
          
                
                <form>
                    <h2>Sign in to us</h2>
                    <p>
                        <label>Username or email address</label><br/>
                        <input type="text" name="email"  placeholder='Your email'  />
                    </p>
                    <p>
                        <label>Password</label>
                        <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                        <br/>
                        <input type="password" name="password"  value=''  />
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

export default LoginPage
