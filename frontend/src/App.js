import React, { useState, useEffect } from "react"
import { VStack, Table, Thead, Tbody, Tr, Th, Heading } from "@chakra-ui/react"
import axios from "axios"
import Proyecto from "./components/Proyecto"

function App() {
  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    const API_URL = "http://localhost:8000/api/proyectos-de-ley/"

    async function getProyectosFromAPI() {
      const response = await axios.get(API_URL)
      setProyectos(response.data)
    }

    getProyectosFromAPI()
  }, [])

  return (
    <VStack as="main" spacing={5} px="5" py="10">
      <Heading as="h1" size="xl">
        Proyectos de Ley
      </Heading>
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
    </VStack>
  )
}

export default App
