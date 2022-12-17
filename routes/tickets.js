import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createTicket, deleteTicket, updateTicket, viewTicket, viewTickets } from "../controllers/ticketcon.js";

const router = express.Router();

//create
router.post("/:showid", verifyAdmin, createTicket);

//update
router.put("/:id", verifyAdmin, updateTicket);

//delete
router.delete("/:id/:showid",verifyAdmin, deleteTicket);

//get by id
router.get("/:id", viewTicket);

//get all
router.get("/", viewTickets);

export default router