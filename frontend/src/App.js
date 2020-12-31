import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { Container } from "@chakra-ui/react"
import ListView from "./pages/ListView"
import DetailView from "./pages/DetailView"
import getDataFromAPI from "./calls/api"

const API_URL = "http://localhost:8000/api/proyectos-de-ley/"

function App() {
  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    getDataFromAPI(API_URL, setProyectos)
  }, [])

  return (
    <Container as="main" maxW="6xl" py="10" centerContent>
      <Switch>
        <Route exact path="/">
          <ListView proyectos={proyectos} />
        </Route>
        <Route path="/:id/:year">
          <DetailView proyectos={proyectos} />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
