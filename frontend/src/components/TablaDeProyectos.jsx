import React from "react"
import PropTypes from "prop-types"
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react"
import Proyecto from "./Proyecto"

const TablaDeProyectos = ({ proyectos }) => (
  <Table variant="striped">
    <Thead>
      <Tr>
        <Th>Número</Th>
        <Th>Fec. Ult</Th>
        <Th>Fec. Pres.</Th>
        <Th>Estado</Th>
        <Th>Título del Proyecto</Th>
      </Tr>
    </Thead>
    <Tbody>
      {proyectos.map((proyecto) => (
        <Proyecto
          key={proyecto.numero}
          numero={proyecto.numero}
          fecUlt={proyecto.fec_ult}
          fecPres={proyecto.fec_pres}
          estado={proyecto.estado}
          tituloDelProyecto={proyecto.titulo_del_proyecto}
        />
      ))}
    </Tbody>
  </Table>
)

TablaDeProyectos.propTypes = {
  proyectos: PropTypes.instanceOf(Array),
}

export default TablaDeProyectos
