import React, { useState, useEffect } from "react"
import { VStack, Heading } from "@chakra-ui/react"
import TablaDeProyectos from "./components/TablaDeProyectos"
import getProyectosFromAPI from "./calls/api"

const API_URL = "http://localhost:8000/api/proyectos-de-ley/"

function App() {
  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    getProyectosFromAPI(API_URL, setProyectos)
  }, [])

  return (
    <VStack as="main" spacing={5} px="5" py="10">
      <Heading as="h1" size="xl">
        Proyectos de Ley
      </Heading>
      <TablaDeProyectos proyectos={proyectos} />
    </VStack>
  )
}

export default App
