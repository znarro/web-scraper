import React from "react"
import PropTypes from "prop-types"
import { Tr, Td } from "@chakra-ui/react"

const Proyecto = ({ numero, fecUlt, fecPres, estado, tituloDelProyecto }) => (
  <Tr>
    <Td>{numero}</Td>
    <Td>{fecUlt}</Td>
    <Td>{fecPres}</Td>
    <Td>{estado}</Td>
    <Td>{tituloDelProyecto}</Td>
  </Tr>
)

Proyecto.propTypes = {
  numero: PropTypes.string,
  fecUlt: PropTypes.string,
  fecPres: PropTypes.string,
  estado: PropTypes.string,
  tituloDelProyecto: PropTypes.string,
}

export default Proyecto
