const router = require("express").Router();
const AuthController = require("../../controller/auth");

const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/secrete');
    }
    next();
};

module.exports = (passport) => {
    router.route("/login")
        .get(checkNotAuthenticated, (req, res) => {
            res.render("login");
        })
        .post(checkNotAuthenticated, passport.authenticate("local", {
            successRedirect: "/secrete",
            failureRedirect: "/login",
            failureFlash: true,
        }));

    router.route("/registration")
        .get(checkNotAuthenticated, (req, res) => {
            res.render("registration");
        })
        .post(checkNotAuthenticated, AuthController.userRegistration);

    router.post("/logout", (req, res, next) => {
        req.logout((err)=>{
            if(err){
                next(err);
            }
            res.redirect("/login");
        });
    });

    return router;
};