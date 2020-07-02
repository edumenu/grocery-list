import React from 'react';
import logo from './assets/images/groceryImage.png';

import Login from './Pages/Login'

function App() {
  return (
    // <div className="container">
        <div className="flex items-center my-12">

                  <div className="rounded mx-auto px-12 pt-12 pb-8 card_element">

                  <img className="mx-auto my-auto w-24" src={logo} alt="logo" />
                  <h1 className="text-3xl text-gray-600 font-bold mb-24">Weekly grocery planner</h1>
                      <form method="POST" action="#login">
                          <div className="mb-8">
                              <label className="block text-gray-600 text-md font-bold mb-2">
                                  <span className="text-red-500">&nbsp;*</span>
                                  Username
                              </label>
                              {/* <div className="mt-1 relative"> */}
                                  <input name="username" id="username" placeholder="example@gmail.com" className="input_element block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                              {/* </div> */}
                              {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
                          </div>

                          <div className="mb-8">
                              <label className="block text-gray-600 text-md font-bold mb-2">
                                  <span className="text-red-500">&nbsp;*</span>
                                  Password
                              </label>
                              {/* <div className="mt-1 relative rounded-md shadow-sm"> */}
                                  <input name="password" id="password" type="password" className="input_element block pr-10 w-full py-4 px-4 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out" />
                              {/* </div> */}
                          </div>

                          <div className="mb-6">
                              <div className="flex items-center justify-between">
                                  <div>
                                      <a className="font-bold text-sm text-gray-600 hover:text-orange-800" href="#password-request">
                                          forgot password
                                      </a>
                                  </div>
                              </div>
                          </div>

                          <div className="mb-4 text-center">
                              {/* <button className="transition duration-500 button hover:bg-orange-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="submit"> */}
                              <button className="transition duration-500 button hover:button_hover focus:outline-none focus:shadow-outline text-green-500 font-bold py-4 px-8 mx-6" type="submit">
                                  Login
                              </button>
                              <button className="transition duration-500 button hover:button_hover focus:outline-none focus:shadow-outline text-green-500 font-bold py-4 px-8 mx-6" type="submit">
                                  Signup
                              </button>
                          </div>
                      </form>
                  </div>

      </div>
    // </div>
  );
}

export default App;
