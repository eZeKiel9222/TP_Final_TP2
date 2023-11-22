import { Carta } from "../Models/index.js";

class CartaController {
    constructor() { }

    createCarta = async (req, res) => {
        try {
            const { cardName, image, cardUrl } = req.body;
            const [newCarta, created] = await Carta.findOrCreate({
                where:{cardName:cardName , image:image, cardUrl:cardUrl},
                attributes:["id","cardName","image","cardUrl"]
            });
            res.status(200).send({ success: true, message: newCarta });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    getAllCartas = async (req, res) => {
        try {
            const allCartas = await Carta.findAll({
                attributes: ["id", "cardName", "image", "cardUrl"]
            });
            res.status(200).send({ success: true, message: allCartas });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    getCartaById = async (req, res) => {
        try {
            const { id } = req.params;
            const cartaByid = await Carta.findByPk(id)
            if (!cartaByid) throw new Error("No existe la carta con ese ID")
            res.status(200).send({ success: true, message: cartaByid });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    updateCarta = async (req, res) => {
        try {
            const { cardName, image, cardUrl } = req.body;
            const { id } = req.params;
            const updatedCarta = await Carta.update(
                { cardName: cardName, image: image, cardUrl: cardUrl },
                {
                    where: { id: id }
                })
            if (!updatedCarta) throw new Error("No se pudo updatear la carta con ese ID")
            res.status(200).send({ success: true, message: updatedCarta })
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    deleteCarta = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCarta = await Carta.destroy({ where: { id: id } })
            res.status(200).send({ success: true, message: deletedCarta });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

}

export default CartaController