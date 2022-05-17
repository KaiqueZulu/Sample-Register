import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:80/v1/"
})

export default api;