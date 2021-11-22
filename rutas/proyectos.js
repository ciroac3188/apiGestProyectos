const express = require("express")
const router = express.Router()

const proyectoControlador = require("../controladores/proyectoControlador")


router.get("/proyectos",proyectoControlador.Obtener)

router.post("/proyectos/crear",proyectoControlador.Nuevo)

router.patch("/proyectos/editar",proyectoControlador.Editar)

router.get("/proyectos/eliminar",proyectoControlador.Eliminar)

module.exports = router