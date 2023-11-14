import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    // the unique sets the email to be unique
    index: 1,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
// users
