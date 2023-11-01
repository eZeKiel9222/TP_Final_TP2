import {Mazo} from "../../TPFinalTP2/Models/index.js"
import {ModoJuego} from "../Models/index.js";
import {User} from "../Models/index.js";
import {Carta} from "../Models/index.js";


class SearchController {
    constructor(){}

    getMazosByModo = async (req,res) => {
        try{
            const {ModoJuegoId} = req.params;
            const allMazosByModo = await Mazo.findAll({
                attributes:["id","nombreMazo","estado"],  include:[ModoJuego,User,Carta]
            },{where:{ModoJuegoId: ModoJuegoId , estado: "Publico" }});
            res.status(200).send({sucess:true , message:allMazosByModo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }};

    getMazosByUser = async (req,res) => {
        try{
            const {UserId} = req.params;
            const allMazosByModo = await Mazo.findAll({
                attributes:["id","nombreMazo","estado"],  include:[ModoJuego,User,Carta]
            },{where:{UserId: UserId , estado: "Publico" }});
            res.status(200).send({sucess:true , message:allMazosByModo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }};

    getMazosByNombre = async (req,res) => {
        try{
            const {nombreMazo} = req.params;
            const allMazosByModo = await Mazo.findAll({
                attributes:["id","nombreMazo","estado"],  include:[ModoJuego,User,Carta]
            },{where:{nombreMazo: nombreMazo , estado: "Publico" }});
            res.status(200).send({sucess:true , message:allMazosByModo });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }};
}

export default SearchController