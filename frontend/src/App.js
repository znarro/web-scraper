import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const API_URL = "http://localhost:8000/api/proyectos-de-ley/";

    async function getProyectosFromAPI() {
      const response = await axios.get(API_URL);
      setProyectos(response.data);
    }

    getProyectosFromAPI();
  }, []);

  return (
    <div>
      <h1>Proyectos de Ley</h1>

      {proyectos.map((proyecto) => {
        return <p>{proyecto["numero"]}</p>;
      })}
    </div>
  );
}

export default App;
