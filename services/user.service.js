import User from "../model/user.js"; // Adjust the import based on your file structure

// Function to get a user by email
export const getUserByemail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.error("Error retrieving user:", err);
  }
};
 export default getUserByemail;