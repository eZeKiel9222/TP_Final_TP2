import { Coleccion } from "../Models/index.js";

class CartaXColeccionController {
    constructor() { }

    createCarta = async (req, res) => {
        try {
            const { UserId, CartaId } = req.body;
            const newCarta = await Coleccion.create({ UserId, CartaId });
            res.status(200).send({ sucess: true, message: newCarta });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllCartas = async (req, res) => {
        try {
            const allCartas = await Coleccion.findAll({
                attributes: ["UserId", "CartaId"]
            });
            res.status(200).send({ sucess: true, message: allCartas });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };
    
    getAllCartasByIdUser = async (req, res) => {
        try {
            const { id } = req.params;
            const cartaByid = await Coleccion.findAll({
                attributes: ["UserId", "CartaId"]
            }, { where: { UserId: id } })
            if (!cartaByid) throw new Error("No existe la carta con ese ID")
            res.status(200).send({ sucess: true, message: cartaByid });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    updateCarta = async (req, res) => {
        try {
            const { UserId, CartaId } = req.body;
            const { id } = req.params;
            const updatedCarta = await Coleccion.update(
                { UserId: UserId, CartaId: CartaId },
                {
                    where: { id: id }
                })
            if (!updatedCarta) throw new Error("No se pudo updatear la carta con ese ID")
            res.status(200).send({ sucess: true, message: updatedCarta })
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    deleteCarta = async (req, res) => {
        try {
            const { UserId,CartaId } = req.body;
            const deletedCarta = await Coleccion.destroy({ where: {UserId:UserId,CartaId:CartaId } })
            res.status(200).send({ sucess: true, message: deletedCarta });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

}

export default CartaXColeccionController
