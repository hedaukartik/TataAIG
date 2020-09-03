# TataAIG
# Building A Full-Stack Application of Meal Analyser

https://hedaukartik.github.io/TataAIG/

## Stack

### Frontend
  - Web
    - React
    - Redux
    - React Router
    - Bootstrap
    
### Backend
  - API
    - NodeJS
    - Express
  - Database
    - MongoDB
    
### Deployment
- Technologies
    - AWS for backend with CodePipeline created from github master
    - Github Pages for frontend or localhost
    
## Setup
- Prerequisites
    - Node (`v10.x`)
    
## How to run this code locally
- Clone this repository
- Open command line in the cloned folder,
  - For Backend if need
    - To install dependencies, run npm install
    - npm start
  - For Frontend if need
    - go to frontend folder
    - configure your server host:port on TataAIG/frontend/src/constants/
    - To install dependencies, run npm install
    - npm start
    - Open localhost:3000 in the browser
    
## At a high level, here are our goals for this project:

-   Build a single-page application (SPA) with JWT user authentication (sign up, sign in, sign out).
-   Build an app that can add meal, retrieve all meals of that day, edit meal, and delete meal data in a mongoDB database
-   Build at datepicker chart to show the days, they go green if the total for that day is less than 2000 calories per day, otherwise they go red.

## Folder structure

- └───TataAIG-master
    ├───backend
    │   ├───controllers- *api handling*
    │   ├───models- *mongoose models for mongoDB*
    │   └───routes- *api routes*
    ├───frontend
    │   ├───public
    │   └───src
    │       ├───components
    │       │   ├───header
    │       │   ├───home
    │       │   ├───manageMeals
    │       │   ├───mealList
    │       │   ├───meals
    │       │   ├───privateRoute
    │       │   ├───signin
    │       │   └───signup
    │       ├───constants
    │       ├───redux
    │       │   ├───actions
    │       │   ├───reducers
    │       │   ├───store
    │       │   └───types
    │       └───util
    └───images
    
## Design decisions

- Database
  - Plan to keep the mongoDB simple with two schema USERS and MEALS
  - Used mongoDB altas for live data availablity
- Backend
  - Create all user related api like signup, signin and signout first to first build an authenticated system and store all data in DB
  - Use JWT for authentication
  - Create api to store addMeal, editMeal, deleteMeal, getAggregatedMealWithDates and getMealByDate
  - Enabling cors for different domains
  - Creating CodePipeline with github repo where I had to move the app.js and package.json to home directory and deploying on AWS elastic beanstack
- Frontend
  - First, Header component for component routing, especially authentication functionality and after signin storing token in localStorage and deleting on signout
  - Store user details in store so that it can be used in any components after signin
  - If, not signin an trying to access meals would be redirected to signin screen
  - Meals screen, Retrieve meals data for particular date selected in datepicker on left to present in table on right. api used- allMeal?requestDate=
  - Datepicker will represent date with green if that date has calories less than expected and vice versa. This was down using backend api response with date and sumOfCalories aggregated in the response
  - Add Meal and Edit Meal have same component but redirected from different dom. Edit Meal on clicking on meal in table to redirect to Edit Meal where it check of mealId is recieved in props.
  
## ScreenShots

- **HomePage**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/HomePage.PNG)
  
- **SignUp**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/signup.PNG)
  
- **Signin**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/signin.PNG)
  
- **HomeScreen After Login**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/HomeScreenAfterLogin.PNG)
  
- **No meal data for new user**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/No%20Meal%20Data.PNG)
  
- **Add Meal**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/Add%20Meal.PNG)
  
- **Date display with high as Meal was above 2000**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/Meal%20display%20with%20date%20high.PNG)
  
- **Click to Edit Meal**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/click%20to%20Edit.PNG)
  
- **Edit Meal Screen already with meal data populated**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/Edit%20Meal.PNG)
  
- **List of meal for particular date after adding**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/List%20of%20Meal%20for%2010th.PNG)
  
- **Afer signout**
  ![alt text](https://github.com/hedaukartik/TataAIG/blob/master/images/After%20log%20out.PNG)
 
 
## Thank You
  

