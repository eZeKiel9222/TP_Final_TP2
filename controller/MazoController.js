import {Carta} from "../Models/index.js";
import {Mazo} from "../Models/index.js";
import {ModoJuego} from "../Models/index.js";
import {User} from "../Models/index.js";


class MazoController{
    constructor(){}
    
    createMazo = async (req,res) => {
        try{
            const {nombreMazo,UserId,ModoJuegoId,estado,} = req.body;
            const newMazo = await Mazo.create({nombreMazo,estado,UserId,ModoJuegoId});
            res.status(200).send({sucess:true , message:newMazo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };

    getAllMazos = async (req,res) => {
        try{
            const allMazos = await Mazo.findAll({
                attributes:["id","nombreMazo"] , include:[ModoJuego,User,Carta]
            });
            res.status(200).send({sucess:true , message:allMazos });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getAllMazosByUser = async (req,res) => {
        try{
            const {id_user} = req.params;
            const allMazosByUser = await Mazo.findAll({
                attributes:["id","nombreMazo","estado"]
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
            const mazoByid = await Mazo.findByPk(id,{include:[Carta,ModoJuego]})
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