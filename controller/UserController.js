import {Carta, Coleccion, ModoJuego} from "../Models/index.js"
import {Mazo} from "../Models/index.js"
import {User} from "../Models/index.js"


class UserController {
    constructor() { }

    createUser = async (req, res) => {
        try {
            const { userLogin, userPassword } = req.body;
            const newUser = await User.create({ userLogin, userPassword });
            res.status(200).send({ sucess: true, message: newUser });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllUsers = async (req, res) => {
        try {
            const allUsers = await User.findAll({
                attributes: ["id", "userLogin", "userPassword"] , include:[{model:Mazo,
                    attributes:{
                        exclude:['createdAt','updatedAt','UserId']
                    }}]
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
            const UserByid = await User.findByPk(id,{ 
                include:[{model:Mazo,
                attributes:{
                    exclude:['createdAt','updatedAt','UserId']
                }},
            {
                model:Carta,
                attributes:{
                    exclude:['createdAt','updatedAt']
                }
            }]
            , attributes: ['id','userLogin','userPassword']})
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
            if (!updatedUser) throw new Error("No se pudo updater el rol con ese ID")
            res.status(200).send({ sucess: true, message: updatedUser });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

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