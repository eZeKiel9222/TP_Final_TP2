import { Sequelize } from "sequelize";
import { Mazo, ModoJuego, User } from "../Models/index.js"
const { Op } = Sequelize
class SearchController {
    constructor() { }

    getMazosByModo = async (req, res) => {
        try {
            const { id } = req.params;
            const modo = await ModoJuego.findOne({where: {id : id}})
            if(modo){
            const allMazosByModo = await Mazo.findAll({
                attributes: ["id", "nombreMazo", "privado"],
                where: { ModoJuegoId: modo.id, privado: false },
                include: [
                    {
                        model: ModoJuego,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt',]
                        }
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'userLogin', 'userPassword']
                        }
                    },
                ]
            });
            res.status(200).send({ success: true, message: allMazosByModo });
        }else{
            res.status(400).send({ success: false, message: 'Modo de Juego Inexistente' });
        }}
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    getMazosByUser = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findOne({
                where: { nickName:id}
            })
            if (user) {
                const allMazosByModo = await Mazo.findAll({
                    attributes: ["id", "nombreMazo", "privado"],
                    where: { UserId: user.id, privado: false },
                    include: [
                        {
                            model: ModoJuego,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt',]
                            }
                        },
                        {
                            model: User,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'userLogin', 'userPassword']
                            }
                        },
                    ]
                });
                res.status(200).send({ success: true, message: allMazosByModo });
            } else {
                res.status(400).send({ success: false, message: "el nickname no existe" })
            }
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    getMazosByNombre = async (req, res) => {
        try {
            const { id } = req.params;
            const allMazosByModo = await Mazo.findAll({
                attributes: ["id", "nombreMazo", "privado"],
                where: { nombreMazo: id, privado: false },
                include: [
                    {
                        model: ModoJuego,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt',]
                        }
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'userLogin', 'userPassword']
                        }
                    },
                ]
            });
            res.status(200).send({ success: true, message: allMazosByModo });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };
}

export default SearchController