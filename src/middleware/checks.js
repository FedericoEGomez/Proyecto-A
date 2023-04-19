const {check} = require("express-validator")
const checks  = [
    check("nombre")
        .not().isEmpty().withMessage("el campo nombre es obligatorio")
        .isLength({max:25,min:3}).withMessage("el campo nombre debe contar con un maximo de 25 caracteres y un minimo de 3")
        .isString().withMessage("el campo nombre debe ser de tipo string"),
    check("tipo")
        .not().isEmpty().withMessage("el campo tipo es obligatorio")
        .isString().withMessage("el campo tipo debe ser de tipo string"),
    check("precio")
        .not().isEmpty().withMessage("el campo precio es obligatorio")
        .isNumeric().withMessage("el campo precio debe ser de tipo number"),
    check("descripcion")
        .not().isEmpty().withMessage("el campo descripcion es obligatorio")
        .isString().withMessage("el campo descripcion debe ser de tipo string")
]
module.exports = checks