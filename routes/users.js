import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
// users
const users =[];

// get all users from /users routes
router.get("/", (req, res) => {
  res.send(users);
});

// add new user using post api
router.post("/", (req, res) => {
  const user = req.body;
  console.log(user,"Users are here")
  users.push({ ...user, id: uuidv4()});
  res.send(`the user ${user.name} has been added in database`);
});

export default router;
