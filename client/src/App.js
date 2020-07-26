import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'

import Header from '../src/Components/header'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'

import { GlobalProvider } from './context/GlobalContext';
import { UserProvider } from './context/UserContext';


export class App extends Component {
    state = {
        userData: ({ token: undefined, user: undefined, })
    }

    componentDidMount() {
        // const checkLoggedIn = async () => {
        //     // Getting the auth token from local storage
        //     const token = localStorage.getItem("auth-token");
        //     const config = {
        //         // We need a content type for sending data
        //         heasers: {
        //             'x-auth-token': token
        //         }
        //     }
        //     const res = await axios.post(`/api/v1/user/tokenIsValid`, null, config);

        //     console.log(res)
        // }

        (async () => {
            // Getting the auth token from local storage
            let token = localStorage.getItem("auth-token");
            // If token is null, create a new token and set it to empty
            // Also set token to empty
            if(token === null){
                localStorage.setItem("auth-token", "")
                token = ""
            }
            const config = {
                // We need a header for sending data
                headers: {
                    'x-auth-token': token
                }
            }
            // Making a post request for tokenIsValid to check for valid user tokens
            const res = await axios.post(`/api/v1/user/tokenIsValid`, null, config);
            console.log(res)

            //
            if(res){}

        })();
    }

    render() {
        return (
            <Router>
                <UserProvider value={this.state.userData}>
                    <GlobalProvider>
                        {/* Header */}
                        <Header />
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        {/* <Signup /> */}
                        {/* <About /> */}
                    </GlobalProvider>
                </UserProvider>
            </Router>
        )
    }
}

export default App

