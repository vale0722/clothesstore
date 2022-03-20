import axios from "axios";
import config from "../config";

const service = axios.create({ baseURL: `${config.backend_url}` });

export default service;
