import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/network-6511448_1920.jpg'


export default function LandingPage(props) {

    const HandleLogout = ()=>{

        props.history.push('/home');
      }

    const sprintOnGame = {
        color : 'white',
        fontSize: '100px',
        textAlign: 'center'
    }
    return (
        <header style={ HeaderStyle }>
        <h5 className="sprintongame" style={sprintOnGame}>SprintOn Starter </h5>

        <div className="text-center m-5-auto">   
                            
                            <form>
                                <h2>Sign in to us</h2>
                                <p>
                                    <label>Username or email address</label><br/>
                                    <input type="text" name="email"  placeholder='Your email' required="required" />
                                </p>
                                <p>
                                    <label>Password</label>
                                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                                    <br/>
                                    <input type="password" placeholder='' required />
                                </p>
                                <p>
                                    <button id="sub_btn" type="submit" onClick={HandleLogout}>Login</button>
                                </p>
                            </form>
                
                
                
                            
                           <div className='footer'>
                            <p>First time ? you can =&gt; <Link to="/register">Create an account</Link>.</p>
                           
                           </div>
                            
        </div>

        <br/><br/><br/><br/>
        <br/><br/><br/><br/>


            
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}