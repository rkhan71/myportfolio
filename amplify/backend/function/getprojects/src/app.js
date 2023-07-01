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
      "date": "June 2023",
      "body": "myPortfolio is a web application I created using React.js and AWS Amplify to showcase my work (this web app).\n\nI initially started on this project to teach myself how to develop applications using React.js. I quickly learned a lot about many different aspects of React.js including React Router, using different hooks, using props, creating custom hooks, and much more. I was also able to expand my knowledge of JavaScript outside of using it within HTML. I learned more about async functions, and using the map and foreach methods to display lists of data.\n\nWhen I was ready to publish my web app I decided to use AWS Amplify to host it as I wanted to familiarize myself with different AWS services. I integrated a REST API into the web app to serve all the data about my different projects and the data to fill the resume page as well. I developed this API using AWS Lambda and Node.js which taught me about serverless computing. Furthermore, I was able to learn about AWS authentication and S3 services although I did not use them in the app.",
      "preview": "myPortfolio is a web application I created using React.js and AWS Amplify to showcase my work (this web app).",
      "link": "https://github.com/rkhan71/myportfolio"
  },
  {
      "title": "Frogger Remake",
      "id": 1,
      "date": "May 2023",
      "body": "Frogger Remake is a group project I completed alongside 5 peers over the course of a semester where we recreated a classic game in Java using Android Studio.\n\nThis was the main project in a class where we learned about different software development processes and different aspects of software architecture. Doing the project with these topics in mind allowed me to truly learn and implement them while I worked through sprints with my team. It was also the first long term software development project I had done in a group, so I gained a lot of experience in that regard.\n\nOn the technical side, I vastly expanded my knowledge of Git. Using it within a group of developers gave me an understanding of the utility of branches, pull requests, and many other features. I also learned a lot about using Java and Android Studio to develop Android apps. I found learning how to write and run unit tests for an application particularly useful as I had only previously done this for small algorithmic programs.",
      "preview": "Frogger Remake is a group project I completed alongside 5 peers over the course of a semester where we recreated a classic game in Java using Android Studio.",
      "link": "#"
  },
  {
    "title":"Freekicks",
    "id": 2,
    "date": "April 2023",
    "body": "Freekicks is a game I created using C for the GameBoy Advance as a project for my Computer Organization and Programming course.\n\nThis is a fairly simple game where you have to move a ball around obstacles towards a goal. The game has two levels, in the second level the obstacles start moving so it is harder to get past them.\n\nCoding this game in C taught me a great deal about optimizing code for hardware limitations. The GameBoy Advance was released in 2001 so has multiple constraints related to how much it can compute within a given time period. This meant that showing movement on the screen was challenging as the machine could not output a full image to the screen within a frame, so trying to update a full screen at a time would cause tearing. Therefore, I had to come up with creative ways to show movement on the screen without re-rendering the full screen every frame.\n\nThis project also enhanced my ability to create and use structs, enums, unions, and other complex data structures in C.",
    "preview": "Freekicks is a game I created using C for the GameBoy Advance as a project for my Computer Organization and Programming course.",
    "link": "https://github.com/rkhan71/freekicks"
  },
  {
    "title":"Invisible Populations",
    "id": 3,
    "date": "February 2023",
    "body": "Freekicks is a game I created using C for the GameBoy Advance as a project for my Computer Organization and Programming course.\n\nThis is a fairly simple game where you have to move a ball around obstacles towards a goal. The game has two levels, in the second level the obstacles start moving so it is harder to get past them.\n\nCoding this game in C taught me a great deal about optimizing code for hardware limitations. The GameBoy Advance was released in 2001 so has multiple constraints related to how much it can compute within a given time period. This meant that showing movement on the screen was challenging as the machine could not output a full image to the screen within a frame, so trying to update a full screen at a time would cause tearing. Therefore, I had to come up with creative ways to show movement on the screen without re-rendering the full screen every frame.\n\nThis project also enhanced my ability to create and use structs, enums, unions, and other complex data structures in C.",
    "preview": "Mumble jumble about a fucking project for like a sentence or so. Hopefully this is long enough to look good on the website.",
    "link": "#"
  },
  {
      "title": "To-Do List",
      "id": 4,
      "date": "December 2022",
      "body": "ToDoList is a simple To-Do List application I created using JavaFX. This was a college project intended to test my understanding of Object-Oriented Programming principles and JavaFX.\n\nThe app allows users to add tasks to a To-Do List through a form specifying the task name, type and due date. Tasks of the same name cannot be submitted, but if a task with the same name and type is submitted with a different due date, then this simply updates the due date for the task. The To-Do List is displayed as a table showing the task, task type, time it was posted, and time that it is due. These tasks can be taken off the To-Do List when they are completed, and they are then displayed in a completed tasks table.\n\nAs this was a college project, I was not allowed to use any plug-ins so the code is all simple JavaFX. The code for the app is all in one file with one main ToDoList class that extends the Application class. Within this class we have the main and start functions as required by the Application class, as well as a nested class called Task. The main function launches the app while the start function contains the bulk of the code for the app. This includes the layout and UI on the front-end of the app as well as functions for enqueuing and dequeuing tasks from the To-Do List on the back-end of the app. The Task nested class represents a Task object which can be added to the observable array lists that contain the tasks that need to be done and the completed tasks. The class contains a constructor for Task objects, a copy constructor, and getters and setter to change Tasks attributes as necessary. Using a separate class to represent Tasks simplified the process of displaying the tasks on the users screen, changing the due date when needed, and implementing many other features of the app.\n\nAll in all, working on this To-Do List application allowed me to gain a basic understanding of JavaFX and see how Object-Oriented Programming principles can be used in practice to improve code. I intend to continue working on this project on my own outside of college where there are no restrictions in place to learn about more advanced JavaFX concepts and improve the app in general.",
      "preview": "ToDoList is a simple To-Do List application I created using JavaFX. This was a college project intended to test my understanding of Object-Oriented Programming principles and JavaFX.",
      "link": "https://github.com/rkhan71/ToDoList"
  },
  {
      "title": "Harvest Havoc",
      "id": 5,
      "date": "July 2022",
      "body": "Harvest Havoc is a game I coded in Lua with the Love2D framework as my final project for Harvard's CS50x Online Course.\n\nThe goal of the game is to harvest fruits that fall from the sky by moving a basket at the bottom of the screen under them. There are multiple fruits and the one you must harvest changes randomly throughout the game. Harvesting the wrong fruit or dropping the fruit you have to harvest 3 times in a row means you lose 1 of your 3 lives. Harvesting the correct fruit gives you a point and if you do this continuously, the number of points you gain each time increases.\n\nThis was my first attempt at creating a full game and taught me a lot about the process that goes into game development. I started out by creating a very basic version of the game including only the simplest concepts. This was a black and white game where there was only one fruit which fell at the same speed every time and you gained a point if you caught it in the basket. I then progressively added new features to the game such as creating different ways for a player to lose lives, making the fruit fall faster as the game progresses, adding different fruits and changing which one you had to harvest, adding streaks so that harvesting multiple fruits in a row gets you more points, tracking high scores etc. Once I had all these features working properly, I added basic UI features such as color, sound, menus for when you open, pause, and finish the game, and other small things like showing the fruit you miss splat on the ground.",
      "preview": "Harvest Havoc is a game I coded in Lua with the Love2D framework as my final project for Harvard's CS50x Online Course.",
      "link": "https://github.com/rkhan71/love2Dgames"
  },
  {
      "title": "myJim",
      "id": 6,
      "date": "June 2022",
      "body": "myJim is a web application I built using the Flask framework with Python, as well as SQL, HTML, CSS, and JavaScript. The application allows users to create accounts and upload data about their gym workouts so that they can track their progress over time.\n\nThe web app consists of 5 main pages: pages to register and login, a home page, a diary page, and a progress page.Users can create an account using a form on the register page which stores their unique username and password hash in an SQL table along with an id. This id is used to differentiate between users so that only information relevant to the user is shown on their screen. Once a user is registered, they can use the form on the login page to access their account. The if the username and password submitted from that form match a username and password hash stored in the SQL table, the user is granted access to that account.\n\nOnly once a user is logged in, they can access the diary and progress pages. The diary page contains a form which allows users to submit details about their workouts for a specific day. This information is stored in another SQL table along with the users id. At the bottom of the diary page, all the information the user has submitted for that particular day is shown in a table with buttons to delete entries. The progress page allows users to see their progress visually through graphs. Users can select the exercise they would like to see their progress in, then data for that exercise is collected from the SQL database and represented as a graph of weight and repetitions vs days. Multiple graphs can be shown at a time.\n\nUsing Python with the Flask framework, I can get all the form submissions from the web app and safely turn them into SQL queries. I can then pass any necessary data into HTML templates as variables. The HTML, CSS, and JavaScript is all used to implement the front end of the web app. I use Bootstrap 5 to aid with the design of the web app.",
      "preview": "myJim is a web application I built using the Flask framework with Python, as well as SQL, HTML, CSS, and JavaScript. The application allows users to create accounts and upload data about their gym workouts so that they can track their progress over time.",
      "link": "https://github.com/rkhan71/myJim"
  },
  {
      "title":"34",
      "id": 7,
      "date": "June 2022",
      "body": "34 is a project where I solved a mathematical problem using Python and SQL. The problem involves 2 overlapping squares which create 16 vertices. The goal is to place each number from 1-16 on a vertex so that the numbers on every edge from the 2 squares add up to 34.\n\nMy Dad was the one who initially showed me this problem. He told me that he wrote a computer program to solve this when he was younger, but due to the low specs of computers back then, the code took 3 days to run before he got an answer. I thought with modern technology a simple brute force approach would work, and I tried to go through every possible arrangement of the 16 numbers until I found one which worked using a Python program. However, I quickly realized that there are over 20 trillion permutations for 16 numbers, so it would not be a good idea to let this code finish running.\n\nAfter trying to optimize my algorithm a few different ways, I came up with the following approach. I created a Python program which found all the permutations of 4 numbers from 1-16 that add up to 34 which I could use as valid edges in my solution and stored them and an SQL database. Then I created another Python program which queried this database to find combinations of edges that formed a valid square. For two edges to connect they had to have the same number on the end or beginning, and the square could not have repeat numbers. Once a square was complete, the program queried the database again to find edges which could be added to the square to create a full solution. If a solution was found the program added it to the SQL database. I ended up with 1,792 solutions.",
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
