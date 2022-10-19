const {Room} = require("../model/model");

const roomController = {
    addRoom: async(req,res)=>{
        res.status(200).json(req.body);
    },
};
module.exports = roomController;