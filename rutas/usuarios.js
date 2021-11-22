const express = require("express")
const router = express.Router()

const usuarioControlador = require("../controladores/usuarioControlador")


router.get("/usuarios",usuarioControlador.Obtener)

router.post("/usuarios/crear",usuarioControlador.Nuevo)

router.patch("/usuarios/editar",usuarioControlador.Editar)

router.get("/usuarios/eliminar",usuarioControlador.Eliminar)

module.exports = router