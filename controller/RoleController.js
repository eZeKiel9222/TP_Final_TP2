import { Role } from "../Models/index.js"

class RoleController {
    constructor() { }

    createRole = async (req, res) => {
        try {
            const { roleName } = req.body;
            const newRole = await Role.create({ roleName });
            res.status(200).send({ sucess: true, message: newRole });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllRoles = async (req, res) => {
        try {
            const allRoles = await Role.findAll({
                attributes: ["id", "roleName"]
            });
            res.status(200).send({ sucess: true, message: allRoles });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getRoleById = async (req, res) => {
        try {
            const { id } = req.params;
            const roleByid = await Role.findByPk(id)
            if (!roleByid) throw new Error("No existe el rol con ese ID")
            res.status(200).send({ sucess: true, message: roleByid });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    updateRole = async (req, res) => {
        try {
            const { roleName } = req.body;
            const { id } = req.params;
            const updatedRole = await Role.update(
                { roleName: roleName },
                {
                    where: { id: id }
                })
            if (!updatedRole) throw new Error("No se pudo updater el rol con ese ID")
            res.status(200).send({ sucess: true, message: updatedRole })
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    deleteRole = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedRole = await Role.destroy({ where: { id: 1 } })
            res.status(200).send({ sucess: true, message: deletedRole });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

}

export default RoleController