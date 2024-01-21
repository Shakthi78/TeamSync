import express from 'express'
import {  createTask, deleteTask, getAllTasks, getTask,  getTasks, updateTask } from '../controllers/task.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router  = express.Router();

//CREATE
router.post("/",  createTask)

// UPDATE
router.put("/:id",verifyAdmin, updateTask)

// DELETE
router.delete("/:id",verifyAdmin, deleteTask)

//GET
router.get("/:id", getTask)

//GET ALL
router.get("/", getAllTasks)
router.get("/filter/every", getTasks)


export default router