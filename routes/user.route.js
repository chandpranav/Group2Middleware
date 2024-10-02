import { Router } from "express"

const userRoute = Router()

userRoute.get("/get-user/:id", getUserData); /*async (req,res) => {
    try {
        const email = req.params.id;
        const user = await user.find({ email});
        res.status(200).json({user});
    } catch(err) {
        console.log(err);
    }
})*/

export default userRoute;