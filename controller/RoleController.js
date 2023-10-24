import Role from "../Models/Role.js";


class RoleController{
    constructor(){}
    
    createRole = async (req,res) => {
        try{
            res.status(200).send("create role");
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getAllRoles = async (req,res) => {
        try{
            res.status(200).send("get all roles");
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getRoleById = async (req,res) => {
        try{
            res.status(200).send("get role by id");
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    updateRole = async (req,res) => {
        try{
            res.status(200).send("update role");
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    deleteRole = async (req,res) => {
        try{
            res.status(200).send("delete role");
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    
    
    }
    
    export default RoleController