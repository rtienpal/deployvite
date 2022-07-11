import axios from "axios"

export default axios.create({
  baseURL:
    "https://api.hgbrasil.com/weather?format=json-cors&key=e5edefb6&city_name=",
})
