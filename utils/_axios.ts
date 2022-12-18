import Axios from "axios";

const BASE_URL = "https://framing-increasing-threaded-issued.trycloudflare.com";

export default Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
