import React from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"

const DetailView = ({ proyectos }) => {
  const { id, year } = useParams()

  const numero = `${id}/${year}`

  return (
    <>
      {proyectos
        .filter((proyecto) => proyecto.numero === numero)
        .map((proyectoActual) => (
          <Table variant="striped" size="lg" key={proyectoActual.numero}>
            <TableCaption placement="top">
              Proyecto de Ley {proyectoActual.numero}
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Título</Th>
                <Td>{proyectoActual.titulo_del_proyecto}</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>Número</Th>
                <Td>{proyectoActual.numero}</Td>
              </Tr>
              <Tr>
                <Th>Sumilla</Th>
                <Td>{proyectoActual.sumilla}</Td>
              </Tr>
              <Tr>
                <Th>Fecha de presentación</Th>
                <Td>{proyectoActual.fec_pres}</Td>
              </Tr>
              <Tr>
                <Th>Estado</Th>
                <Td>{proyectoActual.estado}</Td>
              </Tr>
              <Tr>
                <Th>Período</Th>
                <Td>{proyectoActual.periodo}</Td>
              </Tr>
              <Tr>
                <Th>Legislatura</Th>
                <Td>{proyectoActual.legislatura}</Td>
              </Tr>
              <Tr>
                <Th>Proponente</Th>
                <Td>{proyectoActual.proponente}</Td>
              </Tr>
              <Tr>
                <Th>Grupo Parlamentario</Th>
                <Td>{proyectoActual.grupo_parlamentario}</Td>
              </Tr>
              <Tr>
                <Th>Autores</Th>
                <Td>{proyectoActual.autores}</Td>
              </Tr>
            </Tbody>
          </Table>
        ))}
    </>
  )
}

DetailView.propTypes = {
  proyectos: PropTypes.instanceOf(Array),
}

export default DetailView
