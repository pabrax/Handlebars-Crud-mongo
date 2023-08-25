import { Router } from "express";
import {
  renderTasks,
  createTask,
  deleteTask,
  renderTasksEdit,
  editTask,
  toggleDone,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/", renderTasks);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);

router.get("/edit/:id", renderTasksEdit);

router.post("/edit/:id", editTask);

router.post("/tasks/add", createTask);

export default router;
