import Axios from "axios";

const BASE_URL = "http://localhost:5000";

export default Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
