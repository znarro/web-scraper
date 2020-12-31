import axios from "axios"

async function getDataFromAPI(api, setterFunction) {
  try {
    const response = await axios.get(api)
    setterFunction(response.data)
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }
}

export default getDataFromAPI
