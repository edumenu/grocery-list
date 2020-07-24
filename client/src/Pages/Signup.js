import React from 'react'
import logo from '../assets/images/groceryImage.png';
import gmail from '../assets/images/gmail.png';

function Login() {
    return (
        <div className="flex items-center">
            <div className="rounded mx-auto px-48 pt-8 pb-8 card_element background_custom">
                <img className="mx-auto my-auto w-24" src={logo} alt="logo" />
                <h1 className="text-4xl text-center text-gray-300 font-bold mb-8">Weekly grocery planner</h1>
                <h3 className="text-center text-xl font-bold mb-8 text-gray-300">Sign up to create an account </h3>
                    <form method="POST" action="#login">
                        <div className="mb-8">
                            <label className="block text-gray-300 text-md font-bold mb-2">
                                <span className="text-red-500">&nbsp;*</span>
                                First name
                            </label>
                                <input name="firstname" id="firstname" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                        </div>

                        <div className="mb-8">
                            <label className="block text-gray-300 text-md font-bold mb-2">
                                <span className="text-red-500">&nbsp;*</span>
                                Last name
                            </label>
                            {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                                <input name="lastname" id="lastname" type="password" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                            {/* </div> */}
                        </div>
                        
                        <div className="mb-8">
                            <label className="block text-gray-300 text-md font-bold mb-2">
                                <span className="text-red-500">&nbsp;*</span>
                                    City
                            </label>
                            {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                                <input name="city" id="city" type="text" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                            {/* </div> */}
                        </div>
                        
                        <div className="mb-8">
                            <label className="block text-gray-300 text-md font-bold mb-2">
                                <span className="text-red-500">&nbsp;*</span>
                                Email
                            </label>
                                <input name="email" id="email" type="email" placeholder="example@gmail.com" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                        </div>

                        <div className="mb-8">
                            <label className="block text-gray-300 text-md font-bold mb-2">
                                <span className="text-red-500">&nbsp;*</span>
                                Password
                            </label>
                            {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                                <input name="password" id="password" type="password" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                            {/* </div> */}
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <a className="font-bold text-sm text-gray-300 hover:text-orange-800" href="#password-request">
                                        forgot password
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 text-center">
                            <button className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-green-500 font-bold py-4 px-8 mx-6" type="submit">
                                Sign up
                            </button>
                            <button className="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-red-700 font-bold py-4 px-8 mx-6 my-4" type="submit">
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

export default Login
