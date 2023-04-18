const router = require("express").Router();

const homeRouter = require("./home");
router.use(homeRouter);

const authRouter = require("./auth");
router.use(authRouter);

const secretRouter = require("./secret");
router.use(secretRouter);

module.exports = router;