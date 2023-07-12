# Diet Tracking App

The inspiration for this App was to show off our group's skills for a school project. Our directive was to create an app using the MERN stack, that is, MongoDB, Express, React, Node.js. We had to make an app that users interacted witha  database with full CRUD functionality (create, read, update, delete). As a simple thing that a user might want to store/see/change data in an app, we decided to make a diet tracking app. The user can Create records in the MongoDB that represent foods that the user has consumed, and that data will persist in MongoDB so that the user can see how many calories they have eaten. In the case of a user making mistakes on input, per project requirements we also added full CRUD functionality.

## Getting Started

If you copy the entire repo you will notice that you have two main folders, backend and frontend. Each has its own package.json file with the list of dependencies, and you will need to do an npm i command inside of each of these two subfolders in order to have all the necessary packages installed. Once you've done this, you need to change all the references to mongoDB to your own local mongo database. Once you've done that, you need to start the backend and frontend separately with npm start in wach subfolder. Then you should be good to use the app! Feel free to clone the repo to your own github and try it out for yourself and make your own changes!

### Prerequisites

See above. This is a normal npm project with the slight caveat that it is basically split in two. There are separate packages needed for backend and frontend and you will need to install them into their respective subfolders separately.



## Deployment

This project is currently deployed at netlify: https://main--snazzy-gaufre-1c0031.netlify.app/ for the frontend and the backend in heroku: https://milestone-project2-mern-app-c8267116782f.herokuapp.com/api/foods





## Built With


MongoDB

Express

React

Node.js



## Authors

Aaron Canales

Alicia MacEwan-Gutierrez

Austin Sipp 

Carlo Quesada

Edwin Tolentino



## Schema Diagram

We only have one collection in our NoSQL database. It has documents that have only two key-value pairs, food item name, and number of calories.


## License
This project is licensed under the MIT License - see the LICENSE.md file for details.


## Acknowledgments

Go Rebels!


## Post-MVP Plans

Eventually we want to add a time period aspect to the data. This way a user can track by day what they ate, which would really be essential for a normal user of the app. As well, we could make it look a bit more like a calendar once we add this aspect to the data.
