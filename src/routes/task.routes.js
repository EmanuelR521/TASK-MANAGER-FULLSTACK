import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { getTasks,getTask,updateTask,deleteTask,createTask} from "../controllers/task.controller.js";

const router = Router();

router.get('/tasks', authRequired, getTask)
router.post('/tasks', authRequired, createTask)
router.get('/tasks/:id', authRequired, getTasks)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTask)



export default router;