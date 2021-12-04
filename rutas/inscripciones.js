const express = require("express")
const router = express.Router()

const inscripcionControlador = require("../controladores/inscripcionControlador")


router.get("/inscripciones",inscripcionControlador.Obtener)

router.post("/inscripciones/crear",inscripcionControlador.Nuevo)

router.patch("/inscripciones/editar",inscripcionControlador.Editar)

router.get("/inscripciones/eliminar",inscripcionControlador.Eliminar)

module.exports = router