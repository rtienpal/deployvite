import axios from "axios"

export default axios.create({
  baseURL:
    "https://api.hgbrasil.com/weather?format=json-cors&key=917b9f84&city_name=",
})
