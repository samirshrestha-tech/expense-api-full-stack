import express from "express";
import { getUserByEmail, insertUser } from "./module/user/UserModule.js";
import { comparePass, hashPassword } from "./module/user/utlis/bcryptHelper.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "completed get",
    });
  } catch (error) {}
});

router.post("/", async (req, res, next) => {
  try {
    const { password } = req.body;

    // hash pass

    req.body.password = hashPassword(password);

    // insert user
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Account has been created. You may login now",
        })
      : res.json({
          status: "error",
          message: "unable to create an account. contact admin for support",
        });
  } catch (error) {
    if (error.message.includes("E11000")) {
      error.message = "There is another user having this email already exist";
      error.errorCode = 200;
    }
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { password, email } = req.body;

    // check if the user already exists by checking their email

    const result = await getUserByEmail(email);
    if (result?.password) {
      // check if the plain pass and the the pass from db the hashed one is same

      const isMatched = comparePass(password, result.password);

      if (isMatched) {
        result.password = undefined;
      }
    }

    return res.json({
      status: "sucess",
      message: "Login successfully",
      user: result,
    });
  } catch (error) {
    if (error.message.includes("E11000")) {
      error.message = "There is another user having this email already exist";
      error.errorCode = 200;
    }
    next(error);
  }
});

router.put("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "completed get",
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "completed get",
    });
  } catch (error) {
    next(error);
  }
});
router.patch("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "completed get",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
