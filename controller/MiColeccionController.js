import MiColeccion from "../Models/MiColeccion.js";


class MiColeccionController{
    constructor(){}
    
    createColeccion = async (req,res) => {
        try{
            const {id_user , id_carta} = req.body;
            const newColeccion = await MiColeccion.create({id_user,id_carta});
            res.status(200).send({sucess:true , message:newColeccion });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };

    getAllColecciones = async (req,res) => {
        try{
            const allColecciones = await MiColeccion.findAll({
                attributes:["id","id_user","id_carta"]
            });
            res.status(200).send({sucess:true , message:allColecciones });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getAllColeccionesByIdUser = async (req,res) => {
        try{
            const {id_user} = req.params;
            const coleccionesByid = await MiColeccion.findAll({
                attributes:["id","id_user","id_carta"] , where : {id_user : id_user}
            });
            if(!coleccionesByid) throw new Error("No existe la coleccion con ese ID")
            res.status(200).send({sucess:true , message:coleccionesByid });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    updateColecciones = async (req,res) => {
        try{
            const {id_user,id_carta} = req.body;
            const {id} = req.params;
            const updatedColeccion = await MiColeccion.update(
                { id_user : id_user , id_carta : id_carta},
            {
              where: { id: id } 
            })
            if(!updatedColeccion) throw new Error ("No se pudo updater el rol con ese ID")
            res.status(200).send({sucess:true , message:updatedColeccion })
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    deleteColeccion = async (req,res) => {
        try{
            const {id} = req.params;
            const deletedColeccion = await MiColeccion.destroy({ where: { id: id } })
            res.status(200).send({sucess:true , message:deletedColeccion });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    
    
    }
    
    export default MiColeccionController