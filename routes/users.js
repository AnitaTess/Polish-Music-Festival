import express from "express";
import { deleteUser, updateUser, viewUser, viewUsers } from "../controllers/usercon.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
/*
router.get("/checkauth", verifyToken, (req,res,next)=>{
    res.send("Hello, you are logged in!")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("You are authorized to do stuff!")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("Hi Admin, you are authorized to do stuff!")
})
*/

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get by id
router.get("/:id",verifyUser, viewUser);

//get all
router.get("/", verifyAdmin, viewUsers);

export default router