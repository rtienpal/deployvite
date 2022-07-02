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
  return (
    <main>
      <div className="text">Previsão do Tempo</div>
      <form>
        <input
          type="text"
          placeholder="Insira aqui o nome da cidade"
          onChange=""
          name="cidade"
        ></input>
      </form>
    </main>
  )
  // return <>{cityData && <main>{JSON.stringify(cityData)}</main>}</>
}
