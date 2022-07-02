import api from "../api/get"
import React from "react"

export default function Main() {
  const [cityData, setCityData] = React.useState([])

  React.useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await api.get("")
        console.log(response.data)
        setCityData(response)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchApi()
    console.log(cityData)
  }, [])

  return <>{cityData && <div>{JSON.stringify(cityData)}</div>}123</>
}
