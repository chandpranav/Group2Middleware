import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number
})

const User = model("User",UserSchema)

export default User

/*
This is a basic schema tha requires mongoose.
    The schema has the fields for a user.
    To use this schema in MongoDB then we need to conver it into a model.

4 Schemas = 4 Models
    Without a model you cannot use a schema

*/