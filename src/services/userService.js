const User = require('../entity/User');

const createUser = async ({
    username,
    firstName,
    lastName,
    mobileNumber,
    email,
}) => {
    const user = new User({
        username,
        firstName,
        lastName,
        mobileNumber,
        email,
    });
    await user.save();
    return user;
};

const deleteUser = async _id => {
    const user = await User.findByIdAndDelete(_id);
    return user;
};

module.exports = { createUser, deleteUser };