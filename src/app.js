require("dotenv").config({});

const database = require("./database/main");
const planets = require("./api/planets.json");
require("./strategies/googlestrategy");

const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const express = require("express");
const path = require("path");

const connectFirebase = require('connect-session-firebase');
const app = express();

// Port
const port = process.env.PORT || 8080;
express.urlencoded({
    extended: true,
});

app.use((req, res, next) => {
    if (req.path.endsWith("/") && req.path.length > 1) {
        const newPath = req.path.slice(0, -1);
        const query = req.url.slice(req.path.length);
        res.redirect(301, newPath + query);
    } else {
        next();
    }
});

const authRoute = require("./routes/google");
const creatorRoute = require("./routes/creator");
const dashboardRoute = require("./routes/dashboard");

const FirebaseStore = connectFirebase(session);
const store = new FirebaseStore({
    database: database.firebase.database(),
    sessions: 'sessions'
});

app.use(
    session({
        secret: "some random secret",
        cookie: {
            maxAge: 172800000,
        },
        saveUninitialized: false,
        resave: false,
        name: "google.oauth2",
        store: store,
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Middleware Routes
app.use("/google", authRoute);
app.use("/creator", creatorRoute);
app.use("/dashboard", dashboardRoute);

function isAuthorized(req, res, next) {
    if (req.user) {
        res.redirect("/dashboard");
    } else {
        next();
    }
}

app.get("/", isAuthorized, (req, res) => {
    res.render("index");
});

app.get("/api/solarsystem", (req, res) => {
    res.json({ ...planets });
});

/* app.get("*", function (req, res) {
    res.redirect("https://" + req.headers.host + req.url);
}); */

app.get("*", (req, res) => {
    res.render("error", { url: req.url });
});

// Listen
app.listen(port, () => {
    console.log(`Conectado a porta: ${port}!`);
});
