# Base create react-app

## Dependencies For this project:
* axios
* react-router-dom
* reactstrap
* formik
* yup
* styled-components
* recharts
* node-sass

## Deployed site can be found here:
https://gigapet1.now.sh/

## About:
Parents are always looking for ways to motivate their kids to eat. With this app, the servings of food the child eats are input, and the child can watch their gigapet grow and flourish...

## App structure:
This app follows standard self explanatory React naming conventions such as "components" in the components folder and the "Dashboard" component named Dashboard.

Primary state management is by way of a sudo store "UserInfoContext" that globally passes in most state for easy access anywhere in the app by way of useContext() hook or ContextAPI as it is more commonly known. When appropriate component state is used, primary for UI/UX corrections.

The side action/useEffect that pulls the primary data set from BackEnd is co-dependent on a helper state called "changeMade" which has its "setChangeMade" accessible thorough the ContextAPI store to allow for easy state based refresh when needed. 
