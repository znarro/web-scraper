import React from "react"
import { Switch, Route } from "react-router-dom"
import { VStack } from "@chakra-ui/react"
import ListView from "./pages/ListView"
import DetailView from "./pages/DetailView"

function App() {
  return (
    <VStack as="main" spacing={5} px="5" py="10">
      <Switch>
        <Route exact path="/">
          <ListView />
        </Route>
        <Route path="/:numero">
          <DetailView />
        </Route>
      </Switch>
    </VStack>
  )
}

export default App
