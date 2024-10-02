/*Grab express from the module and store the function into a const app
const express = require('express')
const { mongoose } = require('mongoose')
//const { default: User } = require('./model/user') //this doesnt work because it needs ES6
All these are outdated because it needs the latest syntax as below
*/

import express from "express"
import { mongoose } from "mongoose"
import User from "./model/user.js"
import userRoute from "./routes/user.route.js"

const app = express()

/*
    Right now our server is only a server on a local host(port3000) which is our endpoint.
    We're going to use a get request from our local host
*/
//Get takes two parameters: a request and a response.
app.get('/get-user/:id', async(req,res) => { //There is a next parameter that is unused for now.
    //try {
        //console.log(req.params) //Prints the req.params to the console.
        /*const email = req.params.id;
        const user = User.find({ email });
        console.log(user)
        res.status(200).json({User})
    } catch(err) {*/
        console.log("error");
    //}
})

//When dealing with json we are going to tell express that we are going to use it.
//This is saying the data it will receive will be json. This is a type of middleware
app.use(express.json())
app.use("/user", userRoute);

app.post('/signup', async(req,res) => {
    try { 
        console.log(req.body)
        User.create(req.body)
        //Needs function to wait here to call console.log(user)
        res.json({User})
    } catch(err) {
        console.log("error");
        res.json({"status": "Something went wrong."})
    }
    /*console.log('post request')
    res.json({"status": "response sent successfully"})*/
})

app.put('/update-user/:email', async(req,res)=> {
    try {
        const email = req.params.email;
        const updatedUserData = req.body;
        console.log(email, updatedUserData)

        await User.findOneAndUpdate({email}, updatedUserData);
        res.status(200).json({status:"User Profile Updated"})
    } catch(err) {
        console.log("error");
    }
})

app.patch('/', (req,res)=> {
    console.log(req.body)
    console.log("patch request")
})

const mongoConnect = async () => { //Will connect our backend to our database
    await mongoose.connect("mongodb://localhost:27017");
    console.log("DB connected") 
}

mongoConnect()

//Listen takes two parameters: 1 is a port Number, 2 is an empty function
app.listen(3000, () => {
    console.log('server started on port 3000')
})
/* 
5 Types of Requests:
Get: Gets data from the server.
Post: Send data to backend.
Put: Update some data(to change a whole object)
Patch: Update the data(to change a part of an object)
Delete: Probably to delete data but its not used much.
*/

/* 
Dependencies vs DevDependencies
There are some packages that are not needed in production. 
The packages that are not needed in production are put in devdependencies.
Those packages do not get installed in production.
They get installed in deployment.
npm i -D nodemon
*/

/*
npm init to create a {}package.json
*/

/*
We are going to use a nonSQL on MongoDB.
    MongoDB uses documents so it is good for horizontal expansion
    SQL is better for vertical expansion
    The database to use depends on the type of software(useCase and requirements)

MongoDB gives us objectID and it is unique for each document
    First Define the Schema
    We are going to use Mongoseo which has similar functions to Node.js for javascript for mongoDB
        npm install mongoose

How to create a schema
    Create a new file

Added "type" in package.json

Best Practices
    Use a try catch block
    
*/ 

