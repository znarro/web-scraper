import React from "react"
import PropTypes from "prop-types"
import { Tr, Td, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Link as RouterLink } from "react-router-dom"

const Proyecto = ({ numero, fecUlt, fecPres, estado, tituloDelProyecto }) => (
  <Tr>
    <Td>
      <Link as={RouterLink} to={`/${numero}`} isExternal>
        {numero} <ExternalLinkIcon mx="2px" />
      </Link>
    </Td>
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
