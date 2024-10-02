import { getUserByemail } from "../services/user.service.js";

const checkUser = async (req, res, next) => {
   try {
    console.log("inside middleware")
    const email = req.params.id;
    const user = await getUserByemail(email);
    if (user.length === 0) {
      throw new Error("User foes not exist");
    } else {
      next()
    }

  } catch (err) {
    console.log(err);
    return res.status(400).json({ "error": "user not found" });
  }

}

export default checkUser