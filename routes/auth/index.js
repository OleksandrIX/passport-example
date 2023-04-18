const router = require("express").Router();

const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const {UserRepo: {getUserByUsername, getUserById}} = require("../../model");
const initializePassport = require("../../config/passport.config");
initializePassport(passport, getUserByUsername, getUserById);

router.use(flash());
router.use(session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
}));
router.use(passport.initialize());
router.use(passport.session());

const authenticationRouter = require("./auth")(passport);
router.use(authenticationRouter);

module.exports = router;