// An alternative to useState. Accepts a reducer of type (state, action) => newState, 
// and returns the current state paired with a dispatch method
// The main goal of the reducer is to change the state and send it back to the components
export default (state, action) => {
    switch(action.type){
        case 'GET_GROCERIES':
            return {
                ...state,   // Creating a new state
                loading: false,
                groceryLists: action.payload
            }
        case 'GROCERY_ERROR':
            return {
                ...state,  // Creating a new state
                error: action.payload
            }
        case 'DELETE_GROCERIES':
            return {
                ...state,  // Creating a new state
                groceryLists: state.groceryLists.filter(groceryList => groceryList._id !== action.payload)  // Creating a new list and remove the item with the id provided
            }
        case 'ADD_GROCERIES':
            return {
                ...state,  // Creating a new state
                groceryLists: [action.payload, ...state.groceryLists]  // Creating a new array and adding the new grocery item to it
            }
        default:
            return state;
    }
}