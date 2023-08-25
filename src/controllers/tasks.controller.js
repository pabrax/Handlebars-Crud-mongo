import Tasks from "../models/tasks";

export const renderTasks = async (req, res) => {
  const tasks = await Tasks.find().lean();
  res.render("index.hbs", { tasks: tasks });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Tasks.findByIdAndDelete(id, req.body);
  res.redirect("/");
};

export const toggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Tasks.findById(id);

  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

export const renderTasksEdit = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id).lean();
    res.render("edit.hbs", { task: task });
  } catch (error) {
    console.log(error.message);
  }
}

export const editTask = async (req, res) => {
  const { id } = req.params;
  await Tasks.findByIdAndUpdate(id, req.body);

  res.redirect("/");
}

export const createTask = async (req, res) => {
  try {
    const task = Tasks(req.body);

    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}