import User from "../Models/User.js";

class UserController{
    constructor(){}
    
    createUser = async (req,res) => {
        try{
            const {userLogin,userPassword} = req.body;
            const newUser = await User.create({userLogin,userPassword});
            res.status(200).send({sucess:true , message:newUser });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };

    getAllUsers = async (req,res) => {
        try{
            const allUsers = await User.findAll({
                attributes:["id","userLogin","userPassword"]
            });
            res.status(200).send({sucess:true , message:allUsers });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    getUserById = async (req,res) => {
        try{
            const {id} = req.params;
            const UserByid = await User.findByPk(id)
            if(!UserByid) throw new Error("No existe el usuario con ese ID")
            res.status(200).send({sucess:true , message:UserByid });
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    updateUser = async (req,res) => {
        try{
            res.status(200).send("update user");
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    deleteUser = async (req,res) => {
        try{
            res.status(200).send("delete user");
        }
        catch(error) {
            res.status(400).send({sucess:false , message:error.message})
        }
    };
    
    
    }
    
    export default UserController