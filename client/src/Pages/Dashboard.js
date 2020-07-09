import React, { Component } from 'react'

import Header from '../Components/header'
import Income from '../Components/Income'
import Expense from '../Components/Expense'
import Balance from '../Components/Balance'
import Weather from '../Components/Weather'
import GroceryList from '../Components/GroceryList'
import AddGrocery from '../Components/AddGrocery'
import CurrentDate from '../Components/CurrentDate'
import Modal from '../Components/Modal'

import { GlobalProvider } from '../context/GlobalContext';


export class Dashboard extends Component {

    state = {
        historyButton: true,    // Bool for displaying history list section
        addGroceryButton: false,    // Bool for displaying Add grocery list section
        modalOpen: false,
        deleteItem: {},
        groceryItem: [
                   {id: 1, item: "Tomatoes", amount: 40}, 
                   {id: 2, item: "Peanuts", amount: 34}, 
                   {id: 3, item: "Mangos", amount: -20}, 
                   {id: 4, item: "Salsa", amount: 22}, 
                   {id: 5, item: "Pineapples", amount: -12}, 
                   {id: 5, item: "Milk", amount: -15.34} 
                ]    // 
    }

    componentDidMount() {
        console.log("mount")
    }

    // This function displays history list section
    changeHistoryListStatus = () => {
        if (!this.state.historyButton) {
            this.setState({
                addGroceryButton: !this.state.addGroceryButton,
                historyButton: !this.state.historyButton
            })
        }     
    }
    
    // This function displays grocery list section
    changeGroceryAddStatus = () => {
        if (!this.state.addGroceryButton) {
            this.setState({
                addGroceryButton: !this.state.addGroceryButton,
                historyButton: !this.state.historyButton
            })
        }     
    }

    // Toggle modal state
    toggleModalOpen = (item) => {
        // Toggle modal open and close
        this.setState({
            modalOpen: !this.state.modalOpen,
            deleteItem: item
        })
    }


    render() {

        // Setting the state values
        const { historyButton , addGroceryButton, modalOpen, deleteItem } = this.state

        return (
            
            <div>
                {/* Header */}
                <Header />
                {/* Modal */}
                <Modal modalOpen={modalOpen} toggleModalOpen={this.toggleModalOpen} deleteItem={deleteItem} />
                <section className="text-gray-700s mt-8">
                    <div className="container card_element px-2 lg:max-h-screen md:max-h-screen sm:mb-0 md:mb-8 h-1/2 py-8 mx-auto bg-gray-100 flex overflow-hidden">
                        <div className="w-full mx-auto flex flex-wrap">
                            {/* Weather, Date, Income, Expense, Balance  */}
                            <div className="lg:w-1/2 w-full lg:pr-10 md:pr-4 p-4 lg:mb-0">
                                <Weather />
                                <CurrentDate />
                                <div className="container">
                                    <div className="flex flex-wrap mt-12 text-center">
                                        {/* Income component */}
                                        <Income />
                                        {/* Expense component */}
                                        <Expense />
                                        {/* Balance component */}
                                        <Balance />
                                    </div>
                                </div>
                            </div>

                            {/* History, Add Grocery */}
                            <div className="lg:w-1/2 w-full pr-8 px-4 py-6">
                                <div className="flex mb-4">
                                    <button onClick={this.changeHistoryListStatus} className={`flex-grow text-gray-700 focus:outline-none p-4 text-lg ${this.state.historyButton ? "card_element2" : "card_element hover:card_element2"}`}><i className="text-lg fa fa-list mr-2" aria-hidden="true"></i>History</button>
                                    <button onClick={this.changeGroceryAddStatus} className={`flex-grow text-gray-700 focus:outline-none text-lg p-4 ${this.state.addGroceryButton ? "card_element2" : "card_element hover:card_element2"}`} ><i className="text-lg fa fa-cart-plus mr-2" aria-hidden="true"></i>Add Grocery</button>
                                </div>
                                {/* Grocery list History */}
                                <GroceryList historyButton={historyButton} toggleModalOpen={this.toggleModalOpen} />

                                {/* Add grocery item */}
                                <AddGrocery addGroceryButton={addGroceryButton} changeHistoryListStatus={this.changeHistoryListStatus} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default Dashboard
