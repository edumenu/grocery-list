import React, { useContext, useEffect } from 'react'
import logo from '../assets/images/groceryImage.png';
import { GlobalContext } from '../context/GlobalContext'

function Login() {
    const { authUser, readCookie } = useContext(GlobalContext)

    function onSubmit(e) {
        e.preventDefault(); // Prevents a link from opening a URL
    }



    return (
        <div className="flex items-center">
            <div className="rounded mx-auto px-48 pt-8 pb-8 card_element background_custom">
                <img className="mx-auto my-auto w-32" src={logo} alt="logo" />
                <h1 className="text-3xl mx-auto text-gray-300 font-bold mb-16">Monthly Grocery planner</h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-8">
                        <label className="block text-gray-300 text-md font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                                Username
                            </label>
                        {/* <div className="mt-1 relative"> */}
                        <input name="username" id="username" placeholder="example@gmail.com" className="card_element2 block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                        {/* </div> */}
                        {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
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
                        {/* <button className="transition duration-500 button hover:bg-orange-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="submit"> */}
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

export default Login
