import {Mazo} from "../../TPFinalTP2/Models/index.js"
import {ModoJuego} from "../Models/index.js";
import {User} from "../Models/index.js";
import {Carta} from "../Models/index.js";


class SearchController {
    constructor(){}

    getMazosByModo = async (req,res) => {
        try{
            const {id} = req.params;
            const allMazosByModo = await Mazo.findAll({
                attributes:["id","nombreMazo","estado"],
                where:{ModoJuegoId: id , estado: "Publico" },
                include:[
                    {model:ModoJuego,
                    attributes:{
                        exclude:['createdAt','updatedAt',]
                    }},
                    {model:User,
                        attributes:{
                            exclude:['createdAt','updatedAt',]
                        }},
                    ]
            });
            res.status(200).send({sucess:true , message:allMazosByModo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }};

    getMazosByUser = async (req,res) => {
        try{
            const {id} = req.params;
            const user = await User.findOne({
                where:{nickName: id}
            })
            if(user){
            const allMazosByModo = await Mazo.findAll({
                attributes:["id","nombreMazo","estado"], 
                where:{UserId: user.id , estado: "Publico" }, 
                include:[
                    {model:ModoJuego,
                        attributes:{
                        exclude:['createdAt','updatedAt',]
                        }},
                    {model:User,
                        attributes:{
                        exclude:['createdAt','updatedAt',]
                         }},
                        ]
            });
            res.status(200).send({sucess:true , message:allMazosByModo });
        } else {
            res.status(400).send({success:false , message:"el nickname no existe"})
        }
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }};

    getMazosByNombre = async (req,res) => {
        try{
            const {id} = req.params;
            const allMazosByModo = await Mazo.findAll({
                attributes:["id","nombreMazo","estado"], 
                where:{nombreMazo: id , estado: "Publico" },
                 include:[
                    {model:ModoJuego,
                        attributes:{
                        exclude:['createdAt','updatedAt',]
                        }},
                    {model:User,
                        attributes:{
                        exclude:['createdAt','updatedAt',]
                         }},
                 ]
            });
            res.status(200).send({sucess:true , message:allMazosByModo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }};
}

export default SearchController