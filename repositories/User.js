module.exports = (User) => {
    const getUserById = (id) => {
        return User.findOne({where: {id}});
    };

    const getUserByUsername = (username) => {
        return User.findOne({where: {username}});
    };

    const getAllUser = () => {
        return User.findAll({});
    };

    const createUser = ({username, password}) => {
        return User.create({username, password});
    };

    return Object.freeze({
        getUserById,
        getAllUser,
        createUser,
        getUserByUsername,
    });
}