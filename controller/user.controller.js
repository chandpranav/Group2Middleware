import Router from "express"


const getUserData = async() => {
    try {
        const email = req.params.id;
        const user = await user.find({ email});
        res.status(200).json({user});
    } catch(err) {
        console.log(err);
    }
}

/*
Controller has two parts
    High level code
    Low level Logic/Services/Modular Code

Create a folder called services
    user.service.js

    import user from "../model/user"
    
    getUserbyEmail function
        const user = await user.find({email});

    in the controller we can use const user = getUserbyemail(email);
*/