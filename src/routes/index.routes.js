import { Router } from "express";
import Tasks from "../models/tasks.js";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Tasks.find().lean();
  res.render("index.hbs", { tasks: tasks });
});

router.get("/about", (req, res) => {
  res.render("about.hbs");
});

router.get("/edit", (req, res) => {
  res.render("edit.hbs");
});

router.post("/tasks/add", async (req, res) => {
  try {
    const task = Tasks(req.body);

    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

export default router;
