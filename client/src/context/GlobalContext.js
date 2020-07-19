import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

//Object to store any initial global state
const initialState = {
    groceryLists: [],
    groceryCount: 0,
    selectedDate: new Date(),
    error: null,
    weatherError: '',
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState);

// Provider component to provide the state to other components
export const GlobalProvider = ({ children }) => {
    // An alternative to useState
    // Accepts a reducer of type (state, action) => newState, 
    // and returns the current state paired with a dispatch method
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Function to get grocery list items
    async function getGroceryLists(searchDate) {
        try {
            const res = await axios.get(`/api/v1/groceries?searchDate=${searchDate}`);
            // Getting a list of groceries
            dispatch({
                type: "GET_GROCERIES",
                payload: res.data.data
            })
            dispatch({
                type: "GET_GROCERIES_COUNT",
                payload: res.data.count
            })
        } catch (err) {
            // Setting the error message
            dispatch({
                type: "GROCERY_ERROR",
                payload: err.response.data.error
            })
        }
    }

    // Delete item on the list
    async function deleteTransaction(id) {
        try {
            // Calling the delete method
            await axios.delete(`/api/v1/groceries/${id}`);
            // Deleting an item from the grocery list
            dispatch({
                type: "DELETE_GROCERIES",
                payload: id
            })

        } catch (err) {
            // Setting the error message
            dispatch({
                type: "GROCERY_ERROR",
                payload: err.response.data.error
            })
        }
    }

    // Add a new grocery item
    async function addTransaction(groceryItem) {
        const config = {
            // We need a content type for sending data
            heasers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            // Calling the delete method
            const res = await axios.post(`/api/v1/groceries`, groceryItem, config);
            // Deleting an item from the grocery list
            dispatch({
                type: "ADD_GROCERIES",
                payload: res.data.data
            })

        } catch (err) {
            // Setting the error message
            dispatch({
                type: "GROCERY_ERROR",
                payload: err.response.data.error
            })
        }
    }

    //  Fecthhing current weather
    async function currentWeather(city) {
        try {
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=raleigh&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
            localStorage.setItem('weatherData', JSON.stringify(res.data));
            localStorage.setItem('weatherCounter', 0);
            // localStorage.removeItem('weatherData');
            // localStorage.removeItem('weatherCounter');

        } catch (err) {
            console.log(err)
            dispatch({
                type: "WEATHER_ERROR",
                payload: err.response.data.error
            })
        }
    }

    // ClobalContext.Provider will wrap all the components(children)
    return (<GlobalContext.Provider value={{
        groceryLists: state.groceryLists,
        error: state.error,
        loading: state.loading,
        groceryCount: state.groceryCount,
        selectedDate: state.selectedDate,
        getGroceryLists,
        addTransaction,
        deleteTransaction,
        currentWeather,
        weatherError: state.weatherError
    }}>
        {children}
    </GlobalContext.Provider>);
}