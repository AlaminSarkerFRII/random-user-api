const express = require('express');
const userControllers = require ("../controllers/users")
const router = express.Router();

// all routes
router.get("/all", userControllers.getAllUsers);
router.get("/random", userControllers.getRandomUser);
router.post("/save",userControllers.createUser );
router.get("/:id",userControllers.getSingleUser);
router.delete("/delete/:id",userControllers.deleteUser);
router.patch("/update/:id",userControllers.updateUser)
router.patch("/bulk-update",userControllers.updateMany)
module.exports =  router;
