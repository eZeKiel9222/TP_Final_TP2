import Mazo from "../Models/Mazo.js";


class MazoController{
    constructor(){}
    
    createMazo = async (req,res) => {
        try{
            const {nombreMazo,id_user,estado,modo} = req.body;
            const newMazo = await Mazo.create({nombreMazo},{id_user},{estado},{modo});
            res.status(200).send({sucess:true , message:newMazo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };

    getAllMazos = async (req,res) => {
        try{
            const allMazos = await Mazo.findAll({
                attributes:["id","nombreMazo","id_user","estado","modo"]
            });
            res.status(200).send({sucess:true , message:allMazos });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getAllMazosByUser = async (req,res) => {
        try{
            const {id_user} = req.body;
            const allMazosByUser = await Mazo.findAll({
                attributes:["id","nombreMazo","id_user","estado","modo"]
            },{where: {id_user : id_user }});
            res.status(200).send({sucess:true , message:allMazosByUser });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getMazoById = async (req,res) => {
        try{
            const {id} = req.params;
            const mazoByid = await Mazo.findByPk(id)
            if(!mazoByid) throw new Error("No existe el mazo con ese ID")
            res.status(200).send({sucess:true , message:mazoByid });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    updateMazo = async (req,res) => {
        try{
            const {nombreMazo,id_user,estado,modo} = req.body;
            const {id} = req.params;
            const updatedMazo= await Mazo.update(
                { nombreMazo : nombreMazo , id_user : id_user,estado:estado,modo:modo},
            {
              where: { id: id } 
            })
            if(!updatedMazo) throw new Error ("No se pudo updatear el mazo con ese ID")
            res.status(200).send({sucess:true , message:updatedMazo })
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    deleteMazo = async (req,res) => {
        try{
            const {id} = req.params;
            const deletedMazo = await Mazo.destroy({ where: { id: id } })
            res.status(200).send({sucess:true , message:deletedMazo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    
    
    }
    
    export default MazoController