const express = require("express")
const router = express.Router()

const avanceControlador = require("../controladores/avanceControlador")


router.get("/avances",avanceControlador.Obtener)

router.post("/avances/crear",avanceControlador.Nuevo)

router.patch("/avances/editar",avanceControlador.Editar)

router.get("/avances/eliminar",avanceControlador.Eliminar)

module.exports = router