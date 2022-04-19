import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import './App.css'
import Register from './components/pages/Register'
import Ranking from './components/pages/Ranking'
import MyStat from './components/pages/MyStat'

export default function App() {

    
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/register" component={ Register } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/ranking" component={ Ranking } />
                    <Route path="/mystat" component={ MyStat } />
                </Switch>
                
            </div>
        </Router>
    )
}
/* 
const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://github.com/vanessadjieya" target="_blank" rel="noopener noreferrer">Vanessa_Weber</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
} */