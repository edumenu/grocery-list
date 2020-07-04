import React from 'react'
import logo from '../assets/images/groceryImage.png';

function Login() {
    return (
        <div className="flex items-center my-12">
            <div className="rounded mx-auto px-12 pt-12 pb-8 card_element">
                <img className="mx-auto my-auto w-24" src={logo} alt="logo" />
                <h1 className="w-full text-center text-3xl text-gray-600 font-bold mt-4 mb-8">About</h1>

                <div className="container text-gray-700 max-w-lg">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    )
}

export default Login
