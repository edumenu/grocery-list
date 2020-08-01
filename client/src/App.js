import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalProvider } from './context/GlobalContext';
import Header from '../src/Components/header';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';


export class App extends Component {
    render() {

        return (
            <Router>
                <GlobalProvider>
                    <Header />
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </GlobalProvider>
            </Router>
        )
    }
}

export default App

