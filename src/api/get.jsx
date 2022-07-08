import axios from "axios"

export default axios.create({
  baseURL: "https://api.hgbrasil.com/weather?format=json-cors&key=270aeb0b&city_name=",
})

