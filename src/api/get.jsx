import axios from "axios"

export default axios.create({
  baseURL: "https://api.hgbrasil.com/weather?format=json-cors&key=4d1929ce&city_name=",
})

