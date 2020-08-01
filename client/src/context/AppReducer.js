// An alternative to useState. Accepts a reducer of type (state, action) => newState, 
// and returns the current state paired with a dispatch method
// The main goal of the reducer is to change the state and send it back to the components
export default (state, action) => {
    switch(action.type){
        case 'GET_USER_DATA':
            return {
                ...state,
                user_data: action.payload
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                login_error: action.payload
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                signup_error: action.payload
            }
        case 'CLEAR_LOGIN_ERROR':
            return {
                ...state,
                login_error: action.payload
            }
        case 'CLEAR_SIGNUP_ERROR':
            return {
                ...state,
                signup_error: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user_data: action.payload
            }
        case 'LOGIN_USER':
            return {
                ...state,
                user_data: action.payload
            }
        case 'GET_GROCERIES':
            return {
                ...state,
                loading: false,
                groceryLists: action.payload,
            }
        case 'GET_GROCERIES_COUNT':
            return {
                ...state,
                groceryCount: action.payload,
            }
        case 'GROCERY_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_GROCERIES':
            return {
                ...state,
                groceryLists: state.groceryLists.filter(groceryList => groceryList._id !== action.payload)  // Creating a new list and remove the item with the id provided
            }
        case 'ADD_GROCERIES':
            return {
                ...state,
                groceryLists: [action.payload, ...state.groceryLists]  // Creating a new array and adding the new grocery item to it
            }
            case 'WEATHER_ERROR':
            return {
                ...state,
                weatherError: action.payload
            }

        default:
            return state;
    }
}