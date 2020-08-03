## Covid Tracker

This is a MERN application that users can track their grocery lists for a week. The idea of this applciation is to sum up a list of all grocery items while shopping to make sure you don't exceed the amount budgeted for and at the end of the week, you have a picture of items you purchased throughout the week. Here's a live project https://grocery-tracker-react.herokuapp.com/

## Project Status

First phase complete, adding more features as needed

## Project Screen Shot(s)

#### Example:   

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker1.png?raw=true "Login page")

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker2.png?raw=true "Signup page")

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker3.png?raw=true "Dashboard page")

![alt text](https://github.com/edumenu/grocery-tracker-react/blob/master/grocery-tracker4.png?raw=true "About page")

## Installation and Setup Instructions

You can clone this repository. You will need `node`, `npm` and `tailwindcss` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`   

#### Example:  

This was a side project I created during the Covid 19 outbreak. I created this project for people to use and track Covid 19 cases all over the world. This project obtains all it's data from https://covid19api.com/ and https://restcountries.eu/ API.

I built this project by using `create-react-app` boilerplate, then I installed tailwindcss to build the UI (I used this link https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/ for settting up tailwindcss on react). The technologies implemented in this project are React, React-Router, JSX, and tailwindCSS.

For deployment, I used docker to containerize this app and included both Docker files, connected this repository to Travis CI for continues integration using the travis.yml file and then uploaded it onto AWS Elastic Beanstalk
