import axios from "axios"

export default axios.create({
  baseURL:
    "https://api.hgbrasil.com/weather?format=json-cors&key=2abe506d&city_name=",
})
