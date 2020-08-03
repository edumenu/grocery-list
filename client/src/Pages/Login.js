import React, { useContext, useState, useEffect } from 'react';
import logo from '../assets/images/groceryImage.png';
import { GlobalContext } from '../context/GlobalContext';
import { withRouter } from 'react-router-dom';
import ErrorMessage from '../Components/ErrorMessage';

function Login(props) {
    const { loginUser, user_data, login_error, ClearLoginError } = useContext(GlobalContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user_data.token) {
            props.history.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user_data])

    function onSubmit(e) {
        e.preventDefault();
        loginUser(email, password)
    }

    return (
        <div className="flex items-center">
            <div className="rounded mx-auto px-48 pt-8 pb-8 card_element background_custom">
                <img className="mx-auto my-auto w-32" src={logo} alt="logo" />
                <h1 className="text-3xl mx-auto text-gray-300 font-bold mb-16">Monthly Grocery planner</h1>
                <ErrorMessage error_message={login_error} ClearErrorMessage={ClearLoginError} />
                <form onSubmit={onSubmit}>
                    <div className="mb-8">
                        <label className="block text-gray-300 text-md font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                                Email
                            </label>
                        <input name="username" id="username" value="user@gmail.com" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" type="email" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                    </div>

                    <div className="mb-8">
                        <label className="block text-gray-300 text-md font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                                Password
                            </label>
                        <input name="password" id="password" type="password" value="1234zxcv" onChange={(e) => setPassword(e.target.value)} className="card_element2 block pr-10 w-full py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                    </div>

                    <div className="mb-4 text-center">
                        <button className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-green-500 font-bold py-4 px-8 mx-6" type="submit">
                            Login
                            </button>
                        <a href="/signup" className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-green-500 font-bold py-4 px-8 mx-6">
                            Signup
                            </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login)
