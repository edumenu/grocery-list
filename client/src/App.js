import React, { Component } from 'react'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Header from './Components/header'

import { GlobalProvider } from './context/GlobalContext';


export class App extends Component {
    render() {
        return (
            <GlobalProvider>
                <Dashboard />
            </GlobalProvider>
            // <Profile />
            // <Login />
            // <Signup />
            // <About />
        )
    }
}

export default App

