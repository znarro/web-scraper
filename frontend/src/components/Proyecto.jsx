import React from "react"
import PropTypes from "prop-types"
import { Tr, Td } from "@chakra-ui/react"

const Proyecto = ({
  numero,
  fecUlt,
  fecPres,
  estado,
  tituloDelProyecto,
  periodo,
  legislatura,
  proponente,
  grupoParlamentario,
  sumilla,
  autores,
}) => (
  <Tr>
    <Td>{numero}</Td>
    <Td>{fecUlt}</Td>
    <Td>{fecPres}</Td>
    <Td>{estado}</Td>
    <Td>{tituloDelProyecto}</Td>
    <Td>{periodo}</Td>
    <Td>{legislatura}</Td>
    <Td>{proponente}</Td>
    <Td>{grupoParlamentario}</Td>
    <Td>{sumilla}</Td>
    <Td>{autores}</Td>
  </Tr>
)

Proyecto.propTypes = {
  numero: PropTypes.string,
  fecUlt: PropTypes.string,
  fecPres: PropTypes.string,
  estado: PropTypes.string,
  tituloDelProyecto: PropTypes.string,
  periodo: PropTypes.string,
  legislatura: PropTypes.string,
  proponente: PropTypes.string,
  grupoParlamentario: PropTypes.string,
  sumilla: PropTypes.string,
  autores: PropTypes.string,
}

export default Proyecto
