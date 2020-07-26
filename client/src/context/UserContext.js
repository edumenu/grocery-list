import React, { createContext, useState, Component } from 'react';
import UserReducer from './AppReducer'
import axios from 'axios'

//Create context
// const UserContext = createContext(null);
// export default createContext(null);
const UserContext = React.createContext()

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext

// Provider component to provide the state to other components
// class UserProvider extends Component {
//     state = {
//         user_id: 0
//     }

//     componentDidMount() {
//         // const { groceryCount } = useContext(GlobalContext);
//         // this.context.clearCookie()
//     }


//     render() {
//         // UserContext.Provider will wrap all the components(children)
//         return (
//             <Provider value={0}>
//                 {this.props.children}
//             </Provider >
//         );
//     }
// }

// export { UserProvider };

// // I make this default since it will probably be exported most often.
// export default Consumer;

