import bcrypt from "bcryptjs";

// hash password
const salt = 15;

export const hashPassword = (plainPass) => {
  return bcrypt.hashSync(plainPass, salt);
};

export const comparePass = (plainPass, hassPass) => {
  return bcrypt.compareSync(plainPass, hassPass);
};
