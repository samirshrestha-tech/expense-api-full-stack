import UserSchema from "./UserSchema.js";

// insert new users

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
  // we get user data as an object
};

// get user by their @_id

export const getUserById = (_id) => {
  return UserSchema.findById(_id);
};

// get user by their email
export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};

// update user

// Delete user
