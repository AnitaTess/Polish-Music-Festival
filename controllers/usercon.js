import User from "../models/User.js"

//update user
export const updateUser = async (req, res, next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedUser)
            }
            catch(err){
                res.status(500).json(err)
            }
}
//delete user
export const deleteUser = async (req, res, next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Show has been deleted!")
            }
            catch(err){
                res.status(500).json(err)
            }
}
//view specific/chosen user
export const viewUser = async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
            }
            catch(err){
                res.status(500).json(err)
            }
}
//view all shows
export const viewUsers = async (req, res, next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
            }
            catch(err){
                res.status(500).json(err)
            }
}
