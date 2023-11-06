import { Carta } from "../Models/index.js";
import { Mazo } from "../Models/index.js";
import { ModoJuego } from "../Models/index.js";
import { User } from "../Models/index.js";

class MazoController {
    constructor() { }

    createMazo = async (req, res) => {
        try {
            const { nombreMazo, UserId, ModoJuegoId, privado, } = req.body;
            const newMazo = await Mazo.create({ nombreMazo, privado, UserId, ModoJuegoId });
            res.status(200).send({ sucess: true, message: newMazo });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllMazos = async (req, res) => {
        try {
            const allMazos = await Mazo.findAll({
                attributes: ["id", "nombreMazo"],
                include: [
                    {
                        model: ModoJuego,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
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
            res.status(200).send({ sucess: true, message: allMazos });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllMazosByUser = async (req, res) => {
        try {
            const { id } = req.params;
            const allMazosByUser = await Mazo.findAll({
                attributes: ["id", "nombreMazo", "privado"],
                where: { UserId: id },
                include: [
                    {
                        model: ModoJuego,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
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
            res.status(200).send({ sucess: true, message: allMazosByUser });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getMazoById = async (req, res) => {
        try {
            const { id } = req.params;
            const mazoByid = await Mazo.findAll({
                attributes: ["id", "nombreMazo", "privado"],
                where: { id: id },
                include: [
                    {
                        model: ModoJuego,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'userLogin', 'userPassword']
                        }
                    },
                    {
                        model: Carta,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }
                ]
            })
            if (!mazoByid) throw new Error("No existe el mazo con ese ID")
            res.status(200).send({ sucess: true, message: mazoByid });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    updateMazo = async (req, res) => {
        try {
            const { nombreMazo, UserId, privado, ModoJuegoId } = req.body;
            const { id } = req.params;
            const updatedMazo = await Mazo.update(
                { nombreMazo: nombreMazo, UserId: UserId, privado: privado, ModoJuegoId: ModoJuegoId },
                {
                    where: { id: id }
                })
            if (!updatedMazo) throw new Error("No se pudo modificar el mazo con ese ID")
            res.status(200).send({ sucess: true, message: updatedMazo })
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    deleteMazo = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedMazo = await Mazo.destroy({ where: { id: id } })
            res.status(200).send({ sucess: true, message: deletedMazo });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

}

export default MazoController