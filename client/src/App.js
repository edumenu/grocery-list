import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from '../src/Components/header'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'

import { GlobalProvider } from './context/GlobalContext';


export class App extends Component {
    render() {
        return (
            <GlobalProvider>
                <Router>
                    {/* Header */}
                    <Header />
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/about" component={About} />
                    {/* <Route path="/login" component={Login} /> */}
                    {/* <Signup /> */}
                    {/* <About /> */}
                </Router>
            </GlobalProvider>
        )
    }
}

export default App

