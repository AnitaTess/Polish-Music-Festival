import Show from "../models/Show.js";
import Ticket from "../models/Ticket.js";

//create ticket
export const createTicket = async (req,res,next)=>{
const showId = req.params.showid;
const newTicket = new Ticket(req.body)

try{
const savedTicket = await newTicket.save();
try{
await Show.findByIdAndUpdate(showId, {$push : {tickets: savedTicket._id}})
}
catch(err){
    next(err)
}
res.status(200).json(savedTicket);
}
catch(err){
    next(err)
}
} 

//update ticket
export const updateTicket = async (req, res, next)=>{
    try{
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedTicket)
            }
            catch(err){
                res.status(500).json(err)
            }
}
//delete ticket
export const deleteTicket = async (req, res, next)=>{
    const showId = req.params.showid;
    try{
        await Ticket.findByIdAndDelete(req.params.id);
        try{
            await Show.findByIdAndUpdate(showId, {$pull : {tickets: req.params.id},})
            } catch(err){
                next(err);
            }
        res.status(200).json("Ticket has been deleted!")
            }
            catch(err){
                res.status(500).json(err)
            }
}
//view specific/chosen ticket
export const viewTicket = async (req, res, next)=>{
    try{
        const show = await Ticket.findById(req.params.id);
        res.status(200).json(show)
            }
            catch(err){
                res.status(500).json(err)
            }
}
//view all tickets
export const viewTickets = async (req, res, next)=>{
    try{
        const tickets = await Ticket.find();
        res.status(200).json(tickets)
            }
            catch(err){
                res.status(500).json(err)
            }
}

