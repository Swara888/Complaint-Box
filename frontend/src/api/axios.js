import axios from "axios";

const API_URL = "https://complaint-box-5onn.onrender.com/api";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export default API;
