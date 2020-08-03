## Grocery Tracker

This is a MERN stack application that can track your grocery list for a week. The idea of this application is to sum up a list of all grocery items while shopping to make sure you don't exceed the amount budgeted for and at the end of the week, you have a picture of items you purchased throughout the week. Here's a live project https://grocery-tracker-react.herokuapp.com/

## Project Status

First phase complete, adding more features as needed

## Project Screen Shot(s)

#### Example:   

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker1.png?raw=true "Login page")

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker2.png?raw=true "Signup page")

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker3.png?raw=true "Dashboard page")

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker4.png?raw=true "About page")

## Installation and Setup Instructions

You can clone this repository. You will need `node`, `yarn` and `tailwindcss` installed globally on your machine.  

Installation:

`yarn install`  

To Run Test Suite:  

`yarn test`  

To Start the application:

Run `yarn run dev` at the root of the folder and this should run both the server and the client application concurrently. To run only the server, you can run `yarn run serve` and to run the react application, you can run `yarn run client`.    

To Visit App locally:

`localhost:3000`   

#### More information:  

This is a weekly tracker that I have been working on in the last month. My girlfriend and I always lose track of how much we spend while in the grocery store, so I decided to build this tracker to keep track. With this application, I can write down the total amount I want to spend on groceries per day and while I'm in the store, I can keep track of how much I spend and how much I have left. This project also displays the weather at your current location. I used https://openweathermap.org/api API.

I built this project using `create-react-app` boilerplate, then I installed tailwindcss to build the UI. I built a backend with NodeJs and MongoDB as the database. The backend serves the react application with user authentication routes and also all information on grocery lists stored in the database. Context and reducers are used for state management on this react application. The technologies implemented in this project are React, React-Router, JSX, Context, Reducers, tailwindCSS and Express.

For deployment, I connected this repository to Travis CI for continues integration using the travis.yml file and then uploaded it Heroku.
