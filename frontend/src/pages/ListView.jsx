import React, { useState, useEffect } from "react"
import { Heading } from "@chakra-ui/react"
import TablaDeProyectos from "../components/TablaDeProyectos"
import getProyectosFromAPI from "../calls/api"

const API_URL = "http://localhost:8000/api/proyectos-de-ley/"

const ListView = () => {
  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    getProyectosFromAPI(API_URL, setProyectos)
  }, [])

  return (
    <>
      <Heading as="h1" size="xl">
        Proyectos de Ley
      </Heading>
      TODO: Link inside TablaDeProyectos
      <TablaDeProyectos proyectos={proyectos} />
    </>
  )
}

export default ListView
