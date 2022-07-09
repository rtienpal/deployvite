import axios from "axios"

export default axios.create({
  baseURL:
    "https://api.hgbrasil.com/weather?format=json-cors&key=bbbf3242&city_name=",
})
