import axios from "axios";

const API = axios.create({
  baseURL: "https://complaint-box-5onn.onrender.com/api",
});

export default API;
