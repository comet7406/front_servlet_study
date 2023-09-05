import axios from "axios"
import { serverRootPath } from "../constants/apiConfig"

export const getUser = async () => {
    const response = await axios.get(`${serverRootPath}/user`)
}