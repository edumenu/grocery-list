import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    user_data: {},
    groceryLists: [],
    groceryCount: 0,
    selectedDate: new Date(),
    error: null,
    addGrocery_error: null,
    login_error: null,
    signup_error: null,
    weatherError: '',
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    // Accepts a reducer of type (state, action) => newState, 
    // and returns the current state paired with a dispatch method
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Get the User information
    async function checkLoggedIn() {
        let token = localStorage.getItem("auth-token");
        if (token === null) {
            localStorage.setItem("auth-token", undefined)
            token = ""
        }

        if (token !== 'undefined') {
            try {
                const environ_variable = check_environ()
                const config = { headers: { 'x-auth-token': token } }
                const res = await axios.post(`${environ_variable}/api/v1/user/tokenIsValid`, null, config);

                if (res.data) {
                    const get_config = {
                        headers: { "x-auth-token": token }
                    }
                    const user_data = await axios.get(`${environ_variable}/api/v1/user`, get_config)
                    user_data.data['token'] = token
                    dispatch({
                        type: "LOGIN_USER",
                        payload: user_data.data
                    })
                }
            } catch (err) {
                dispatch({
                    type: "ERROR",
                    payload: err.response
                })
            }
        }
    }

    // Log the user out
    function logUserOut() {
        localStorage.setItem("auth-token", undefined)
        dispatch({
            type: "LOGOUT",
            payload: { token: undefined, id: undefined, displayName: undefined, city: undefined }
        })
    }

    // Register a user
    async function registerUser(displayName, email, city, password) {
        try {
            const environ_variable = check_environ()
            const res = await axios.post(`${environ_variable}/api/v1/user/registration`, { displayName, email, city, password });
            if (res.status === 201) loginUser(email, password);
        } catch (err) {
            dispatch({
                type: "SIGNUP_ERROR",
                payload: err.response.data.message
            })
        }
    }

    // Login user
    async function loginUser(email, password) {
        try {
            const environ_variable = check_environ()
            console.log(environ_variable)
            const loginRes = await axios.post(`${environ_variable}/api/v1/user/login`, { email, password });
            localStorage.setItem("auth-token", loginRes.data.token)
            dispatch({
                type: "LOGIN_USER",
                payload: loginRes.data
            })
            if (loginRes.status === 201) ClearLoginError();
        } catch (err) {
            dispatch({
                type: "LOGIN_ERROR",
                payload: err.response.data.message
            })
        }
    }

    // Get grocery list items
    async function getGroceryLists(createdAt) {
        try {
            const environ_variable = check_environ()
            const res = await axios.get(`${environ_variable}/api/v1/groceries?createdAt=${createdAt}`);
            dispatch({
                type: "GET_GROCERIES",
                payload: res.data.data
            })
            dispatch({
                type: "GET_GROCERIES_COUNT",
                payload: res.data.count
            })
        } catch (err) {
            dispatch({
                type: "GROCERY_ERROR",
                payload: err.response.data.error
            })
        }
    }

    // Delete item on the list
    async function deleteGroceryItem(id) {
        try {
            const environ_variable = check_environ()
            await axios.delete(`${environ_variable}/api/v1/groceries/${id}`);
            dispatch({
                type: "DELETE_GROCERIES",
                payload: id
            })
        } catch (err) {
            dispatch({
                type: "GROCERY_ERROR",
                payload: err.response.data.error
            })
        }
    }

    // Add a new grocery item
    async function addGroceryItem(groceryItem) {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        }
        try {
            const environ_variable = check_environ()
            const res = await axios.post(`${environ_variable}/api/v1/groceries`, groceryItem, config);
            dispatch({
                type: "ADD_GROCERIES",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "GROCERY_ERROR",
                payload: err.response.data.message
            })
        }
    }

    function ClearAddGroceryErr() {
        dispatch({
            type: "CLEAR_ADD_GROCERY_ERROR",
            payload: null
        })
    }
    function ClearLoginError() {
        dispatch({
            type: "CLEAR_LOGIN_ERROR",
            payload: null
        })
    }

    function ClearSignupError() {
        dispatch({
            type: "CLEAR_SIGNUP_ERROR",
            payload: null
        })
    }

    function check_environ(){
        return process.env.NODE_ENV === 'production' ? "https://grocery-tracker-react.herokuapp.com" : "http://localhost:5000";
    }

    //  Fetching current weather
    async function currentWeather(cityWeather) {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather ? cityWeather : "Raleigh"}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
            localStorage.setItem('weatherData', JSON.stringify(res.data));
            localStorage.setItem('weatherCounter', 0);
            // localStorage.removeItem('weatherData');
            // localStorage.removeItem('weatherCounter');
        } catch (err) {
            dispatch({
                type: "WEATHER_ERROR",
                payload: err.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value={{
        user_data: state.user_data,
        groceryLists: state.groceryLists,
        login_error: state.login_error,
        signup_error: state.signup_error,
        addGrocery_error: state.addGrocery_error,
        loading: state.loading,
        groceryCount: state.groceryCount,
        selectedDate: state.selectedDate,
        checkLoggedIn,
        logUserOut,
        registerUser,
        ClearAddGroceryErr,
        ClearLoginError,
        ClearSignupError,
        loginUser,
        getGroceryLists,
        addGroceryItem,
        deleteGroceryItem,
        currentWeather,
        weatherError: state.weatherError
    }}>
        {children}
    </GlobalContext.Provider>);
}
