import { ModoJuego } from "../Models/index.js"

class ModoJuegoController {
    constructor() { }

    createModo = async (req, res) => {
        try {
            const { nombreModo, image } = req.body;
            const newModo = await ModoJuego.create({ nombreModo, image });
            res.status(200).send({ success: true, message: newModo });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    getAllModos = async (req, res) => {
        try {
            const allModos = await ModoJuego.findAll({
                attributes: ["id", "nombreModo", "image"]
            });
            res.status(200).send({ success: true, message: allModos });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    getModoById = async (req, res) => {
        try {
            const { id } = req.params;
            const modoByid = await ModoJuego.findByPk(id)
            if (!modoByid) throw new Error("No existe el modo con ese ID")
            res.status(200).send({ success: true, message: modoByid });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    updateModo = async (req, res) => {
        try {
            const { nombreModo } = req.body;
            const { image } = req.body;
            const { id } = req.params;
            const updatedModo = await ModoJuego.update(
                { nombreModo: nombreModo, image: image },
                {
                    where: { id: id }
                })
            if (!updatedModo) throw new Error("No se pudo updater el rol con ese ID")
            res.status(200).send({ success: true, message: updatedModo })
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    deleteModo = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedModo = await ModoJuego.destroy({ where: { id: id } })
            res.status(200).send({ success: true, message: deletedModo });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

}

export default ModoJuegoController