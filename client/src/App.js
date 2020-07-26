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
        userData: ({ token: undefined, user_id: undefined, displayName: undefined })
    }

    componentDidMount() {
        (async () => {
            // Getting the auth token from local storage
            let token = localStorage.getItem("auth-token");
            // If token is null, create a new token and set it to empty
            // Also set token to empty
            if (token === null) {
                localStorage.setItem("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWEzNzU4MWM0NzE5MGE5YzY4OTM5YiIsImlhdCI6MTU5NTczMjgzMX0.P-Zb7YSudIHDCXOA-BeJ79hVhgOX5Tnj_sbNjBQcKRA")
                token = ""
            }
            const config = {
                // We need a header for sending data
                headers: { 'x-auth-token': token }
            }
            // Making a post request for tokenIsValid to check for valid user tokens
            const res = await axios.post(`/api/v1/user/tokenIsValid`, null, config);

            // If res.data is not empty
            if (res.data) {
                // Set config for get request
                const get_config = {
                    headers: { "x-auth-token": token }
                }
                // Fetching the user data using a get endpoint
                const user_data = await axios.get(`http://localhost:5000/api/v1/user`, get_config)
                // Setting user data
                if(user_data.data){
                    this.setState({
                        userData: {token: token, id: user_data.data.id, displayName: user_data.data.displayName}
                    })
                }
            }

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

