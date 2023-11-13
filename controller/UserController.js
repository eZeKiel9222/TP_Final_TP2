import { Carta, Mazo, User } from "../Models/index.js"

const accessToken = "XXXXXX"

class UserController {
    constructor() { }

    createUser = async (req, res) => {
        try {
            const { userLogin, userPassword, nickName, email } = req.body;
            const newUser = await User.create({ userLogin, userPassword, nickName, email });
            res.status(200).send({ sucess: true, message: 'Usuario Creado Exitosamente' });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    
    getAllUsers = async (req, res) => {
        try {
            const allUsers = await User.findAll({
                attributes: ["id", "userLogin", "userPassword", "nickName", "email"], include: [{
                    model: Mazo,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'UserId']
                    }
                }]
            });
            res.status(200).send({ sucess: true, message: allUsers });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getUserById = async (req, res) => {
        try {
            const { id } = req.params;
            const UserByid = await User.findByPk(id, {
                include: [{
                    model: Mazo,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'UserId']
                    }
                },
                {
                    model: Carta,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }]
                , attributes: ['id', 'userLogin', 'userPassword', 'nickName', 'email']
            })
            if (!UserByid) throw new Error("No existe el usuario con ese ID")
            res.status(200).send({ sucess: true, message: UserByid });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    updateUser = async (req, res) => {
        try {
            const { userLogin, userPassword } = req.body;
            const { id } = req.params;
            const updatedUser = await User.update(
                { userLogin: userLogin, userPassword: userPassword },
                {
                    where: { id: id }
                })
            if (!updatedUser) throw new Error("No se pudo modificar rol con ese ID")
            res.status(200).send({ sucess: true, message: updatedUser });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    login = async (req, res) => {
        try {
            const { userLogin, userPassword } = req.body;
            const user = await User.findOne({
                attributes: ["id", 'nickName', "email"],
                where: { userLogin: userLogin}
            })
            if (!user) {
                res.status(400).send({ sucess: false, message: "Usuario No Existe" })
            } else {
                const validate = await user.validatePassword(userPassword)
                if(validate){
                const payload = {
                    id: user.id,
                    nickName: user.nickName,
                    email: user.email
                }
                const authData = { accessToken: accessToken, userInfo: user }
                res.status(200).send({ sucess: true, message: authData })
                }else {
                    res.status(400).send({ sucess: false, message: "Password incorrecta" })
                }
            }
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }

    }
    deleteUser = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await User.destroy({ where: { id: 1 } })
            res.status(200).send({ sucess: true, message: deletedUser });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

}

export default UserController