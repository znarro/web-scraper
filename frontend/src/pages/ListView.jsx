import React from "react"
import { Heading } from "@chakra-ui/react"
import PropTypes from "prop-types"
import TablaDeProyectos from "../components/TablaDeProyectos"

const ListView = ({ proyectos }) => (
  <>
    <Heading as="h1" size="lg" mb="5">
      Proyectos de Ley
    </Heading>
    <TablaDeProyectos proyectos={proyectos} />
  </>
)

ListView.propTypes = {
  proyectos: PropTypes.instanceOf(Array),
}

export default ListView
