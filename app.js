require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const routes = require("./routes");
app.use(routes);

const appConfig = require("./config/application.config");
app.listen(appConfig.port, () => {
    console.log(`App listening on ${appConfig.port} port`);
});