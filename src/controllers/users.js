const { createUser, deleteUser } = require("../services/userService");

const creatingUser = async (req, res) => {
    try {
        const username = req.body.username;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const mobileNumber = req.body.mobileNumber;
        const email = req.body.email;
        const user = await createUser({
            username,
            firstName,
            lastName,
            mobileNumber,
            email,
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const deletingUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await deleteUser({
            _id: id,
        });
        return res.json('delete user successfully');
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = { creatingUser, deletingUser };
