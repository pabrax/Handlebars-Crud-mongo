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

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Tasks.findByIdAndDelete(id, req.body);
  res.redirect("/");
});

router.get("/toggleDone/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Tasks.findById(id);

  task.done = !task.done;
  await task.save();
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id).lean();
    res.render("edit.hbs", { task: task });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  await Tasks.findByIdAndUpdate(id, req.body);

  res.redirect("/");
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
