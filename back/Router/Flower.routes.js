const express=require("express")
const router=express.Router()
const {FlowersController}=require("../controller/flovers.Controller")
router.get("/",FlowersController.getAll)
router.get("/:id",FlowersController.getById)
router.post("/",FlowersController.Post)
router.delete("/:id",FlowersController.delete)

module.exports=router