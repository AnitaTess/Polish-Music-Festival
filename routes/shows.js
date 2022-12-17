import express from "express";
import { createShow, deleteShow, updateShow, viewShow, viewShows } from "../controllers/showcon.js";
import Show from "../models/Show.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createShow);

//update
router.put("/:id", verifyAdmin, updateShow);

//delete
router.delete("/:id",verifyAdmin, deleteShow);

//get by id
router.get("/:id", viewShow);

//get all
router.get("/", viewShows);

export default router