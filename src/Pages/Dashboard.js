
import React, { Component } from 'react'
import Header from '../Components/header'
import test from '../assets/images/cloudy-weather.gif'


export class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header />
                <section class="text-gray-700s mt-8">
                    <div class="container card_element px-2 lg:max-h-screen md:max-h-screen sm:mb-0 md:mb-8 h-1/2 py-8 mx-auto bg-gray-100 flex overflow-hidden">
                        <div class="w-full mx-auto flex flex-wrap">
                            <div class="lg:w-1/2 w-full lg:pr-10 md:pr-4 p-4 lg:mb-0">
                                <div class="flex w-full">
                                    <div class="icon">
                                        <div class="rays">
                                            <div class="ray"></div>
                                            <div class="ray"></div>
                                            <div class="ray"></div>
                                            <div class="ray"></div>
                                        </div>
                                        <div class="sun"></div>
                                    </div>
                                    <div className="text-4xl text-gray-700">90 &#8457;</div>
                                </div>
                                <div className="flex float-right sm:m-0 md:m-0 text-xl text-gray-700">Saturday June, 6 2020</div>
                                <div className="container">
                                    <div class="flex flex-wrap mt-12 text-center">
                                        <div class="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full">
                                            <div class="card_element4 px-4 py-6 rounded-lg">
                                                <h2 class="font-medium text-3xl text-green-600">$500.00</h2>
                                                <p class="leading-relaxed text-gray-700">Income</p>
                                            </div>
                                        </div>
                                        <div class="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full">
                                            <div class="card_element4 px-4 py-6 rounded-lg">
                                                <h2 class="font-medium text-3xl text-red-600">$240.00</h2>
                                                <p class="leading-relaxed">Expense</p>
                                            </div>
                                        </div>
                                        <div class="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full">
                                            <div class="card_element4 px-4 py-6 rounded-lg">
                                                <h2 class="font-medium text-3xl text-gray-700">$260.00</h2>
                                                <p class="leading-relaxed">Your balance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:w-1/2 w-full pr-8 py-6">
                                <div class="flex mb-4">
                                    <a href="#" class="flex-grow text-gray-700 card_element2 p-4 text-lg"><i class="text-lg fa fa-list mr-2" aria-hidden="true"></i>History</a>
                                    <a href="#" class="flex-grow text-gray-700 card_element text-lg p-4"><i class="text-lg fa fa-cart-plus mr-2" aria-hidden="true"></i>Add Grocery</a>
                                </div>
                                <div className="history-list overflow-y-auto max-h-screen">
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                    <div class="flex flex-col card_element2 p-4 items-center border-r-8 border-green-600 mb-1">
                                        <h2 class="font-bold">Tomatoes</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Dashboard
