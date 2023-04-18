const bcrypt = require("bcrypt");
const {UserRepo} = require("../model");

const userRegistration = async (req, res) => {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        await UserRepo.createUser({username, password: hashedPassword});
        res.redirect("/login");
    } catch (error) {
        console.log(error)
        res.redirect("/registration");
    }
};

module.exports = {
  userRegistration,
};