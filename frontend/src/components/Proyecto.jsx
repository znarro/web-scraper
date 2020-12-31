import React from "react"
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

export default Proyecto
