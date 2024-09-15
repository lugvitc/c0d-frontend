import axios from "axios";
import { BACKEND_URL } from "../constants";

const axiosPrivate = axios.create({
  baseURL: `${BACKEND_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosPrivate;
