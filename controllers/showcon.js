import Show from "../models/Show.js"

//create show
export const createShow = async (req, res, next)=>{
    const newShow = new Show(req.body)

    try{
const savedShow = await newShow.save()
res.status(200).json(savedShow)
    }
    catch(err){
        res.status(500).json(err)
    }
}
//update show
export const updateShow = async (req, res, next)=>{
    try{
        const updatedShow = await Show.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedShow)
            }
            catch(err){
                res.status(500).json(err)
            }
}
//delete show
export const deleteShow = async (req, res, next)=>{
    try{
        await Show.findByIdAndDelete(req.params.id);
        res.status(200).json("Show has been deleted!")
            }
            catch(err){
                res.status(500).json(err)
            }
}
//view specific/chosen show
export const viewShow = async (req, res, next)=>{
    try{
        const show = await Show.findById(req.params.id);
        res.status(200).json(show)
            }
            catch(err){
                res.status(500).json(err)
            }
}
//view all shows
export const viewShows = async (req, res, next)=>{
    try{
        const shows = await Show.find();
        res.status(200).json(shows)
            }
            catch(err){
                res.status(500).json(err)
            }
}

