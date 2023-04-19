const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const checks = require('../middleware/checks');
const {validarCheck} = require('../middleware/validarChecks');
const validarToken = require('../middleware/validarJWT')

router.get('/ver/proyecto-a',validarToken,apiController.verComidas);
router.post('/crear/proyecto-a',validarToken ,checks ,validarCheck ,apiController.guardarComida);
router.get('/ver/proyecto-b', apiController.apiVerComidas);
router.post('/crear/proyecto-b', apiController.apiCrearComidas);

module.exports = router;