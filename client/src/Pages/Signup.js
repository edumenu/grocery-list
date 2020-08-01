import React, { useState, useContext, useEffect } from 'react'
import logo from '../assets/images/groceryImage.png';
import gmail from '../assets/images/gmail.png';
import { GlobalContext } from '../context/GlobalContext';
import { withRouter } from 'react-router-dom';
import ErrorMessage from '../Components/ErrorMessage';

function Signup(props) {
    const { registerUser, user_data, signup_error, ClearSignupError } = useContext(GlobalContext);
    const [displayName, setDisplayName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user_data.token) {
            props.history.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user_data])

    const onSubmit = e => {
        e.preventDefault();
        registerUser(displayName, email, city, password);
    }

    return (
        <div className="flex items-center">
            <div className="rounded mx-auto px-48 pt-8 pb-8 card_element background_custom">
                <img className="mx-auto my-auto w-24" src={logo} alt="logo" />
                <h1 className="text-4xl text-center text-gray-300 font-bold mb-8">Weekly grocery planner</h1>
                <h3 className="text-center text-xl font-bold mb-8 text-gray-300">Sign up to create an account </h3>
                <ErrorMessage error_message={signup_error} ClearErrorMessage={ClearSignupError} />
                <form onSubmit={onSubmit}>
                    <div className="mb-8">
                        <label className="block text-gray-300 text-md font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                                Display Name
                            </label>
                        <input name="displayName" id="displayName" value={displayName} type="text" onChange={(e) => setDisplayName(e.target.value)} className="card_element2 block pr-10 w-full py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                    </div>

                    <div className="mb-8">
                        <label className="block text-gray-300 text-md font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                                Email
                            </label>
                        <input name="email" id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                    </div>

                    <div className="mb-8">
                        <label className="block text-gray-300 text-md font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                                    City
                            </label>
                        <input name="city" id="city" type="text" onChange={(e) => setCity(e.target.value)} className="card_element2 block pr-10 w-full py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                    </div>

                    <div className="mb-8">
                        <label className="block text-gray-300 text-md font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                                Password
                            </label>
                        <input name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                    </div>

                    <div className="mb-4 text-center">
                        <button className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-green-500 font-bold py-4 px-8 mx-6" type="submit">
                            Sign up
                            </button>
                        <button className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-red-700 font-bold py-4 px-8 mx-6 my-4" disabled>
                            <img className="w-6 mr-2 float-left" src={gmail} alt="gmail" />
                                Sign up with gmail
                            </button>
                        <h2 className="mt-4 text-gray-400">Do you already have an account? <a href="/login" className="text-green-500">Login here</a></h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Signup);
