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

const projects = {
  /*"google-internship": {
    "title": "Software Engineering Internship at Google",
    "date": "September 2024",
    "body": "adlfkjasdlfjasdfla",
    "preview": "wallahi i interened",
    "link": ""
  },
  "travelers-internship": {
    "title": "Software Engineering Internship at Travelers",
    "date": "April 2024",
    "body": "aldkjfalsdjfalsdjfaldsjfadf",
    "preview": "I did intern",
    "link": ""
  },*/
  "emory-phone-bot": {
    "title": "Emory Hospital Medical Consult Phone Bot",
    "date": "April 2024",
    "body": "For my capstone project, I worked with 4 other Georgia Tech students to build an LLM-based phone bot and accompanying dashboard to assist clinicians at Emory Hospital with medical consult data collection and triage.\n\nThis was a two semester long project where we built a phone bot which clinicians could call and give information about medical consults along with an automatically updated dashboard where doctors and clinicians could view, update and archive medical consults that came through the phone bot. The phone bot was built using a service called Bland.ai which allowed us to prompt engineer an LLM to answer calls and interact with callers. The call transcripts are sent to an Express.js backend where they are analyzed by another prompt engineered LLM using OpenAI's API. The relevant information from these call transcripts is then uploaded to a MongoDB database. Records in the database could be viewed and manipulated on a React.js frontend.\n\nThis project provided me with valuable experience with full-stack development and working with large language models. It also gave me experience working in a team to design, plan, and implement a long term project. It also exposed me to creating software solutions for clients. Throughout the process we worked with a team at Emory Hospital to understand the problem they wanted to tackle and the solution that they wanted, and then implement it, get feedback on our implementation and update it accordingly.",
    "preview": "For my capstone project, I worked with 4 other Georgia Tech students to build an LLM-based phone bot and accompanying dashboard to assist clinicians at Emory Hospital with medical consult data collection and triage.",
    "link": "https://github.com/rkhan71/junior-design-3344"
  },
  "grower": {
    "title": "GROWER Virtually Integrated Research Project",
    "date": "January 2024",
    "body": "GROWER is a Virtually Integrated Project (VIP) research team at Georgia Tech that collects and analyzes electrical outage data with the goal of improving emergency response.\n\nI have been a member of GROWER since January 2024 where I have collaborated with researchers of all levels from undergraduate to PhD. I am part of a sub-team on GROWER that is responsible for collecting electrical outage data from the websites of various utilities companies across the U.S. through web scraping. I have developed multiple web scrapers using Python with libraries such as Selenium, Beautiful Soup, and Pandas to expand our data collection efforts to 3 new states. I am currently working on expanding to additional states and maintaining existing web scrapers. I am also responsible for hosting any new web scrapers I build or old ones I update on AWS. This has given me proficiency with multiple AWS services including S3, ECR, Lambda, and Scheduler.\n\nThis experience is teaching me a lot about research, including the processes and best practices followed, as well as the collaborative and interdisciplinary nature of research. I am also gaining exposure to processing and analyzing large, dynamic, datasets. Through this research experience, I’m gaining valuable technical skills, all while contributing to a project that has a tangible social impact.",
    "preview": "GROWER is a Virtually Integrated Project (VIP) research team at Georgia Tech that collects and analyzes electrical outage data with the goal of improving emergency response.",
    "link": "https://github.com/orgs/Urban-Research-Group/repositories"
  },
  "my-portfolio": {
      "title": "My Portfolio",
      "date": "July 2023",
      "body": "My Portfolio is a web application I created using React.js and AWS Amplify to showcase my work (this web app).\n\nI initially started on this project to teach myself how to develop applications using React.js. I quickly learned a lot about the variety of tools that come with React.js including React Router, using in-built and custom hooks, using props, and much more. I was also able to expand my knowledge of JavaScript outside of using it within HTML. I learned more about async functions, using the map and foreach methods to display lists of data, and using the console to test and debug my application.\n\nOnce the web app reached a certain level, I decided I wanted to publish it and began looking into the details of that process. I decided to use AWS Amplify to host it as I wanted to familiarize myself with different AWS services. I integrated a REST API into the web app to serve all the data about my different projects. I developed this API using AWS Lambda and Node.js which introduced me to serverless computing. I also created an S3 bucket and a CloudFront distribution for the images and other files used in my app. Additionally, I gained experience with Route 53, Systems Manager, IAM, and other AWS services.",
      "preview": "My Portfolio is a web application I created using React.js and AWS Amplify to showcase my work (this web app).",
      "link": "https://github.com/rkhan71/myportfolio"
  },
  "frogger-remake": {
      "title": "Frogger Remake",
      "date": "May 2023",
      "body": "Frogger Remake is a group project I completed alongside 5 peers over the course of a semester where we recreated a classic game in Java using Android Studio.\n\nThe goal of the game is to get a character from one side of the screen to another. In between the start and finish there is a road where the character has to avoid cars and a river where the character has to move on logs to avoid drowning.\n\nThis was the main project in a class where we learned about different software development processes and different aspects of software architecture. Doing the project with these topics in mind allowed me to truly learn and implement them while I worked through sprints with my team. It was also the first long term software development project I had done in a group, so I gained a lot of experience in that regard.\n\nOn the technical side, I vastly expanded my knowledge of Git. Using it within a group of developers gave me an understanding of the utility of branches, pull requests, and many other features. I also learned a lot about using Java and Android Studio to develop Android apps. I found learning how to write and run unit tests for an application particularly useful as I had only previously done this for small algorithmic programs.",
      "preview": "Frogger Remake is a group project I completed alongside 5 peers over the course of a semester where we recreated a classic game in Java using Android Studio.",
      "link": "https://github.gatech.edu/Team-49/team-49"
  },
  "invisible-populations": {
    "title":"Invisible Populations",
    "date": "February 2023",
    "body": "Invisible Populations is a project I completed over the course of a 36-hour hackathon with 3 other team members and ended up winning a prize for. The aim of the project was to use census data from the US to estimate the homeless populations around the country.\n\nThe hackathon was organized by the Data Science club at Georgia Tech so the projects were focused on using data to create meaningful impacts, hence our choice of project. The most challenging part of the project was cleaning and manipulating the very large sets of data we were working with. This work was done using Python with Jupyter Notebook which taught me a lot about many useful libraries for working with data such as numpy and pandas. I also got experience creating and customizing different types of graphs with plotly to display our data in creative ways.\n\nOur final product was a website which we created using Velo by Wix. None of us had ever used the platform before so it was a steep learning curve for us to create the site in under 36 hours. However, we learned quickly and eventually managed to use the database integrated into the platform to add interactive features to our site, such as looking up counties and seeing our estimate for their homeless population. The website we created won the prize for Best Use of Velo by Wix.",
    "preview": "Invisible Populations is a project I completed over the course of a 36-hour hackathon with 3 other team members and ended up winning a prize for. The aim of the project was to use census data from the US to estimate the homeless populations around the country.",
    "link": "https://github.com/iiisong/homeless-hacklytics23"
  },
  "harvest-havoc": {
      "title": "Harvest Havoc",
      "date": "July 2022",
      "body": "Harvest Havoc is a game I coded in Lua with the Love2D framework as my final project for Harvard's CS50x Online Course.\n\nThe goal of the game is to harvest fruits that fall from the sky by moving a basket at the bottom of the screen under them. There are multiple fruits and the one you must harvest changes randomly throughout the game. Harvesting the wrong fruit or dropping the fruit you have to harvest 3 times in a row means you lose 1 of your 3 lives. Harvesting the correct fruit gives you a point and if you do this continuously, the number of points you gain each time increases.\n\nThis was my first attempt at creating a full game and taught me a lot about the process that goes into game development. I started out by creating a very basic version of the game including only the simplest concepts. This was a black and white game where there was only one fruit which fell at the same speed every time and you gained a point if you caught it in the basket. I then progressively added new features to the game such as creating different ways for a player to lose lives, making the fruit fall faster as the game progresses, adding different fruits and changing which one you had to harvest, adding streaks so that harvesting multiple fruits in a row gets you more points, tracking high scores etc.\n\nOnce I had all these features working properly, I added basic UI features such as color, sound, menus for when you open, pause, and finish the game, and other small things like showing the fruit you miss splat on the ground.",
      "preview": "Harvest Havoc is a game I coded in Lua with the Love2D framework as my final project for Harvard's CS50x Online Course.",
      "link": "https://github.com/rkhan71/love2Dgames"
  }
}

app.get('/projects', function(req, res) {
  res.json(projects);
});

app.get('/projects/:id', function(req, res) {
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
