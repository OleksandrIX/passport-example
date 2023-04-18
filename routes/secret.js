const router = require("express").Router();

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};
router.get("/secrete", checkAuthenticated, async (req, res) => {
    const user = await req.user;
    res.render("secret", {username: user.username})
});

module.exports = router;