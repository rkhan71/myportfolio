/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const projects = [
  {
      "title": "My Portfolio",
      "id": 0,
      "date": "July 2023",
      "body": "My Portfolio is a web application I created using React.js and AWS Amplify to showcase my work (this web app).\n\nI initially started on this project to teach myself how to develop applications using React.js. I quickly learned a lot about the variety of tools that come with React.js including React Router, using in-built and custom hooks, using props, and much more. I was also able to expand my knowledge of JavaScript outside of using it within HTML. I learned more about async functions, using the map and foreach methods to display lists of data, and using the console to test and debug my application.\n\nOnce the web app reached a certain level, I decided I wanted to publish it and began looking into the details of that process. I decided to use AWS Amplify to host it as I wanted to familiarize myself with different AWS services. I integrated a REST API into the web app to serve all the data about my different projects. I developed this API using AWS Lambda and Node.js which introduced me to serverless computing. I also created an S3 bucket and a CloudFront distribution for the images and other files used in my app. Additionally, I gained experience with Route 53, Systems Manager, IAM, and other AWS services.",
      "preview": "My Portfolio is a web application I created using React.js and AWS Amplify to showcase my work (this web app).",
      "link": "https://github.com/rkhan71/myportfolio"
  },
  {
      "title": "Frogger Remake",
      "id": 1,
      "date": "May 2023",
      "body": "Frogger Remake is a group project I completed alongside 5 peers over the course of a semester where we recreated a classic game in Java using Android Studio.\n\nThe goal of the game is to get a character from one side of the screen to another. In between the start and finish there is a road where the character has to avoid cars and a river where the character has to move on logs to avoid drowning.\n\nThis was the main project in a class where we learned about different software development processes and different aspects of software architecture. Doing the project with these topics in mind allowed me to truly learn and implement them while I worked through sprints with my team. It was also the first long term software development project I had done in a group, so I gained a lot of experience in that regard.\n\nOn the technical side, I vastly expanded my knowledge of Git. Using it within a group of developers gave me an understanding of the utility of branches, pull requests, and many other features. I also learned a lot about using Java and Android Studio to develop Android apps. I found learning how to write and run unit tests for an application particularly useful as I had only previously done this for small algorithmic programs.",
      "preview": "Frogger Remake is a group project I completed alongside 5 peers over the course of a semester where we recreated a classic game in Java using Android Studio.",
      "link": "https://github.gatech.edu/Team-49/team-49"
  },
  {
    "title":"Freekicks",
    "id": 2,
    "date": "April 2023",
    "body": "Freekicks is a game I created using C for the GameBoy Advance as a project for my Computer Organization and Programming course.\n\nThis is a fairly simple game where you have to move a ball around obstacles while keeping it within the bounds of the field, and get the ball into the goal. As the game progresses, the obstacles start to move around making it harder to get past them.\n\nCoding this game in C taught me a great deal about optimizing code for hardware limitations. The GameBoy Advance was released in 2001 so has multiple constraints related to how much it can compute within a given time period. This meant that showing movement on the screen was challenging as the machine could not output a full image to the screen within a frame, so trying to update the full screen every frame would cause tearing in the pictures. Therefore, I had to come up with creative ways to show objects moving on the screen without re-rendering the full screen every frame.\n\nThis project also enhanced my ability to create and use structs, enums, unions, and other complex data structures in C.",
    "preview": "Freekicks is a game I created using C for the GameBoy Advance as a project for my Computer Organization and Programming course.",
    "link": "https://github.com/rkhan71/freekicks"
  },
  {
    "title":"Invisible Populations",
    "id": 3,
    "date": "February 2023",
    "body": "Invisible Populations is a project I completed over the course of a 36-hour hackathon with 3 other team members and ended up winning a prize for. The aim of the project was to use census data from the US to estimate the homeless populations around the country.\n\nThe hackathon was organized by the Data Science club at Georgia Tech so the projects were focused on using data to create meaningful impacts, hence our choice of project. The most challenging part of the project was cleaning and manipulating the very large sets of data we were working with. This work was done using Python with Jupyter Notebook which taught me a lot about many useful libraries for working with data such as numpy and pandas. I also got experience creating and customizing different types of graphs with plotly to display our data in creative ways.\n\nOur final product was a website which we created using Velo by Wix. None of us had ever used the platform before so it was a steep learning curve for us to create the site in under 36 hours. However, we learned quickly and eventually managed to use the database integrated into the platform to add interactive features to our site, such as looking up counties and seeing our estimate for their homeless population. The website we created won the prize for Best Use of Velo by Wix.",
    "preview": "Invisible Populations is a project I completed over the course of a 36-hour hackathon with 3 other team members and ended up winning a prize for. The aim of the project was to use census data from the US to estimate the homeless populations around the country.",
    "link": "https://github.com/iiisong/homeless-hacklytics23"
  },
  {
      "title": "To-Do List",
      "id": 4,
      "date": "December 2022",
      "body": "To-Do List is a simple To-Do List application I created using JavaFX. This was a project I completed for my Intro to Object-Oriented Programming course intended to teach the class the basics of JavaFX.\n\nDue to the restrictions of the course which I was doing the project for, I was not allowed to use any plug-ins, so the code is all simple JavaFX. The app creates Task objects which store the tasks name, type, and due date. These objects can be created through a form in the application and enqueued to an ObservableList which is displayed as a table in the application. Tasks can then be dequeued from the list, at which point they are added to another ObservableList and displayed in a completed tasks table on the app.\n\nWorking on this To-Do List application allowed me to gain a basic understanding of JavaFX. I learned how to create simple interactive UI elements and test my application. I was also able to implement the Object-Oriented Programming principles I learned in the course to improve my code. Creating my own Task class with different constructors made handling the enqueuing and dequeuing functions according to the given requirements for the project much simpler.",
      "preview": "To-Do List is a simple To-Do List application I created using JavaFX. This was a project I completed for my Intro to Object-Oriented Programming course intended to teach the class the basics of JavaFX.",
      "link": "https://github.com/rkhan71/ToDoList"
  },
  {
      "title": "Harvest Havoc",
      "id": 5,
      "date": "July 2022",
      "body": "Harvest Havoc is a game I coded in Lua with the Love2D framework as my final project for Harvard's CS50x Online Course.\n\nThe goal of the game is to harvest fruits that fall from the sky by moving a basket at the bottom of the screen under them. There are multiple fruits and the one you must harvest changes randomly throughout the game. Harvesting the wrong fruit or dropping the fruit you have to harvest 3 times in a row means you lose 1 of your 3 lives. Harvesting the correct fruit gives you a point and if you do this continuously, the number of points you gain each time increases.\n\nThis was my first attempt at creating a full game and taught me a lot about the process that goes into game development. I started out by creating a very basic version of the game including only the simplest concepts. This was a black and white game where there was only one fruit which fell at the same speed every time and you gained a point if you caught it in the basket. I then progressively added new features to the game such as creating different ways for a player to lose lives, making the fruit fall faster as the game progresses, adding different fruits and changing which one you had to harvest, adding streaks so that harvesting multiple fruits in a row gets you more points, tracking high scores etc.\n\nOnce I had all these features working properly, I added basic UI features such as color, sound, menus for when you open, pause, and finish the game, and other small things like showing the fruit you miss splat on the ground.",
      "preview": "Harvest Havoc is a game I coded in Lua with the Love2D framework as my final project for Harvard's CS50x Online Course.",
      "link": "https://github.com/rkhan71/love2Dgames"
  },
  {
      "title": "myJim",
      "id": 6,
      "date": "June 2022",
      "body": "myJim is a web application I built using the Flask framework with Python, SQL, HTML, CSS, and JavaScript. The application allows users to create accounts and upload data about their gym workouts so that they can track their progress over time.\n\nBuilding this application taught me how to manage user accounts using a simple SQL database. Users could register accounts, with a username and password which was encrypted in the database. This gave them an ID which was associated with all the data they uploaded to the database so it could be used to query for their data when necessary. I also gained experience with form validation to make sure users couldn’t upload bad data to the database.\n\nThe web application did not only display user data in text format but also used uploaded data to generate graphs so users could see their gym progress visually. Adding this feature to the application taught me how to create graphs with Python using the matplotlib library. I also used HTML forms and some JavaScript to allow users to choose which graphs they wanted to see.",
      "preview": "myJim is a web application I built using the Flask framework with Python, SQL, HTML, CSS, and JavaScript. The application allows users to create accounts and upload data about their gym workouts so that they can track their progress over time.",
      "link": "https://github.com/rkhan71/myJim"
  },
  {
      "title":"34",
      "id": 7,
      "date": "June 2022",
      "body": "34 is a project where I solved a mathematical problem using Python and SQL. The problem involves 2 overlapping squares which create 16 vertices. The goal is to place each number from 1-16 on a vertex so that the numbers on every edge from the 2 squares add up to 34.\n\nMy Dad was the one who initially showed me this problem. He told me that he wrote a computer program to solve this when he was younger, but due to the low specs of computers back then, the code took 3 days to run before he got an answer. I thought with modern technology a simple brute force approach would work. However, I quickly realized that there are over 20 trillion permutations for 16 numbers, so running code using this algorithm would take forever.\n\nAfter trying to optimize my algorithm a few different ways, I came up with the following approach. I created a Python program which found all the permutations of 4 numbers from 1-16 that add up to 34, and stored them in a table in an SQL database. These permutations would be the edges I used to build my solutions. I wrote another Python program which queried this table to find combinations of edges that formed a valid square. From there I could query the table again to see which edges I could add to the already complete square to create a full solution. If a solution was found the program added it to another table in the database. I ended up with 1,792 solutions.\n\nEvery time I queried the database, I added details to the query such as which numbers the edges should start and end with, and which numbers the edges should or shouldn’t contain. This greatly reduced the size of the lists I was searching through. The project gave me great experience in working with SQL using Python and building complex queries to find specific pieces of data.",
      "preview": "34 is a project where I solved a mathematical problem using Python and SQL. The problem involves 2 overlapping squares which create 16 vertices. The goal is to place each number from 1-16 on a vertex so that the numbers on every edge from the 2 squares add up to 34.",
      "link": "https://github.com/rkhan71/34"
  }
]

app.get('/projects', function(req, res) {
  res.json({ projects });
});

app.get('/projects/:id', function(req, res) {
  const { id } = req.params;
  res.json(projects[id]);
});

app.get('/projects/images/:id', function(req, res) {
  const { id } = req.params;
  res.json(projects[id]);
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
