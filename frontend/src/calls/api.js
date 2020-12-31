import axios from "axios"

async function getProyectosFromAPI(api, setterFunction) {
  try {
    const response = await axios.get(api)
    setterFunction(response.data)
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

export default getProyectosFromAPI
