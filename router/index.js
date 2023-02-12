const { detailData,addData, updateData } = require("../controller/patch.controller");
const upsertValidate = require("../validate/patch.validate");

module.exports=(app)=>{

    app.get("/detail",detailData);
    app.post("/add",upsertValidate,addData);
    app.post("/update",upsertValidate,updateData);

}