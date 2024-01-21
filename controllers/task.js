import Task from "../models/Task.js"

export const createTask = async(req,res,next)=>{
    try {       
        const newTask = new Task(req.body)
        const savedTask = await newTask.save()
        res.json(savedTask)

    } catch (error) {
       next(error)
    }
}

export const updateTask = async(req,res,next)=>{
    try {       
        const updateTask = await Task.findByIdAndUpdate(req.params.id , { $set: req.body }, {new:true})
        res.json(updateTask)

    } catch (error) {
        next(error)
    }
}

export const deleteTask = async(req,res,next)=>{
    try {       
        const deleteTask = await Task.findByIdAndDelete(req.params.id)        
        res.json(deleteTask)

    } catch (error) {
        next(error)
    }
}

export const getTask = async(req,res,next)=>{
    try {       
        const getTask = await Task.findById(req.params.id)       
        res.json(getTask)

    } catch (error) {
        next(error)
    }
}

export const getTasks = async(req,res,next)=>{
    try {      
        const {limit, min, max, ...others}  = req.query
        const getAllTask = await Task.find({
            ...others,
            cheapestPrice: {$gt: min | 1 , $lt: max | 300 },
        }).limit(limit)      
        res.json(getAllTask)

    } catch (error) {
        next(error)
    }
}

export const getAllTasks = async(req,res,next)=>{
    try {      
        const {limit, ...others} = req.query
        const getAllTask = await Task.find({...others}).limit(limit)      
        res.json(getAllTask)

    } catch (error) {
        next(error)
    }
}



