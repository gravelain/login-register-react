import React from "react";
import '../../App.css';
import BackgroundImage from '../../assets/images/network-6511448_1920.jpg'

function HomePage(){

    const sprintOnGame = {
        color : 'white',
        fontSize: '80px',
        textAlign: 'center'
    }

    return (

        <div className="HomePage">

            <header style={ HeaderStyle }>
            <h5 className="sprintongame" style={sprintOnGame}> SprintOn Game - Welcome User </h5>

            
               
            <div className="blocMenu1">
                Start game
            </div> <br/>
              
                <a href="/mystat">
                  <div className="blocMenu1">
                  My Statistics 
                </div>
                </a>
               <br/>
             
              <a href="/ranking">
                <div className="blocMenu1">
                  SprintOn Game - Ranking
                </div>
              </a>
              <br/>
              
              <a href="/">
                <div className="blocMenu1">
                  
                  End Game
                
                </div>
              </a>


            </header>

        </div>
    )
}export default HomePage



const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}