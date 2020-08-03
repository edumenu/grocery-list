import React, { useEffect } from 'react'
import logo from '../assets/images/groceryImage.png';
import { withRouter } from 'react-router-dom';


function Login(props) {
    useEffect(() => {
        if (localStorage.getItem("auth-token") === 'undefined' || localStorage.getItem("auth-token") === '') {
            props.history.push('/login')
        }
    })

    return (
        <div className="flex items-center my-2">
            <div className="rounded mx-auto px-8 pt-4 pb-8 card_element background_custom">
                <img className="mx-auto my-auto w-24" src={logo} alt="logo" />
                <h1 className="w-full text-center text-3xl text-gray-300 font-bold mt-4 mb-8">About</h1>
                <div className="container text-gray-300 text-xl max-w-lg">
                    This is a weekly tracker that I have been working on in the last month. My girlfriend and I always lose track of how much we spend
                    while in the grocery store, so I decided to build this tracker to keep track.
                </div>
                <div className="container text-gray-300 text-xl max-w-lg">
                    This application keeps of all our expenses on a weekly bases, I might change this to a
                monthly expense tracker in the future but for now, it will be a weekly tracker. I built this application using <span className="font-extrabold text-2xl">React</span> as the front-end
                and <span className="font-extrabold text-2xl">Tailwindcss</span> for the UI. For the backend,
                I used <span className="font-extrabold text-2xl">NodeJs</span> and <span className="font-extrabold text-2xl">MongoDB</span> as
                the database. This is the first phase of the app, I'll keep building on top of this.
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
