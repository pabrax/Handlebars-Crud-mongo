import express from "express";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes.js";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  engine ({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set('view engine', '.hbs')

app.use(indexRoutes);

export default app;
