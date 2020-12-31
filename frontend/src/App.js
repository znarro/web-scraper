import React, { useState, useEffect } from "react"
import { VStack, Heading } from "@chakra-ui/react"
import axios from "axios"
import TablaDeProyectos from "./components/TablaDeProyectos"

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
      <TablaDeProyectos proyectos={proyectos} />
    </VStack>
  )
}

export default App
