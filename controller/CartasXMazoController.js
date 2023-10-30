import CartaXMazo from "../Models/CartaXMazo.js";


class CartaXMazoController{
    constructor(){}
    
    createCartaXMazo = async (req,res) => {
        try{
            const {id_mazo,id_carta} = req.body;
            const newCartaXMazo = await CartaXMazo.create({id_mazo},{id_carta});
            res.status(200).send({sucess:true , message:newCartaXMazo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };

    getAllCartasXMazo = async (req,res) => {
        try{
            const allCartasXMazo = await CartaXMazo.findAll({
                attributes:["id","id_mazo","id_carta"]
            });
            res.status(200).send({sucess:true , message:allCartasXMazo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getCartasXMazoByIdMazo = async (req,res) => {
        try{
            const {id_mazo} = req.body;
            const cartasXmazoByid = await CartaXMazo.findAll({
                attributes:["id","id_mazo","id_carta"] , where: {id_mazo : id_mazo}
            });
            if(!cartasXmazoByid) throw new Error("No existe las cartas con ese ID de mazo")
            res.status(200).send({sucess:true , message:cartasXmazoByid });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    updateCartaXMazo = async (req,res) => {
        try{
            const {id_mazo,id_carta} = req.body;
            const {id} = req.params;
            const updatedCarta = await CartaXMazo.update(
                { id_mazo : id_mazo , id_carta : id_carta },
            {
              where: { id: id } 
            })
            if(!updatedCarta) throw new Error ("No se pudo updatear la carta con ese ID")
            res.status(200).send({sucess:true , message:updatedCarta })
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    deleteCarta = async (req,res) => {
        try{
            const {id} = req.params;
            const deletedCarta = await CartaXMazo.destroy({ where: { id: id } })
            res.status(200).send({sucess:true , message:deletedCarta });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    
    
    }
    
    export default CartaXMazoController