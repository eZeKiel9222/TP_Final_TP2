import { CartasMazo } from "../Models/index.js";

class CartasMazoController {
    constructor() { }

    createCarta = async (req, res) => {
        try {
            const { MazoId, CartaId } = req.body;
            const [newCarta, created] = await CartasMazo.findOrCreate({
                where: { MazoId: MazoId, CartaId: CartaId },
                attributes: ["MazoId", "CartaId", "amount"]
            })
            if (created) {
                res.status(201).send({ success: true, message: newCarta });
            } else {
                const updatedCarta = await CartasMazo.update({ MazoId: MazoId, CartaId: CartaId, amount: (newCarta.amount + 1) },
                    {
                        where: { MazoId: MazoId, CartaId: CartaId }
                    })
                const carta = await CartasMazo.findOne({ where: { MazoId: MazoId, CartaId: CartaId }, attributes: ["MazoId", "CartaId", "amount"] })
                res.status(200).send({ success: true, message: carta });
            }
        }

        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllCartas = async (req, res) => {
        try {
            const allCartas = await CartasMazo.findAll({
                attributes: ["MazoId", "CartaId", "amount"]
            });
            res.status(200).send({ sucess: true, message: allCartas });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllCartasByIdMazo = async (req, res) => {
        try {
            const { MazoId } = req.params;
            const cartaByid = await CartasMazo.findAll({
                attributes: ["MazoId", "CartaId"]
            }, { where: { MazoId: MazoId } })
            if (!cartaByid) throw new Error("No existe la carta con ese ID")
            res.status(200).send({ sucess: true, message: cartaByid });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    updateCarta = async (req, res) => {
        try {
            const { MazoId, CartaId } = req.body;
            const { id } = req.params;
            const updatedCarta = await CartasMazo.update(
                { MazoId: MazoId, CartaId: CartaId },
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
            const { id } = req.params;
            const deletedCarta = await CartasMazo.destroy({ where: { id: id } })
            res.status(200).send({ sucess: true, message: deletedCarta });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

}

export default CartasMazoController