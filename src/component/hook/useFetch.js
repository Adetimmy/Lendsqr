import axios from "axios";
import { useQuery } from "react-query";

async function fetchData(){
    const result = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    return result
}

export const useFetchUser = () => {
    return useQuery("user", fetchData)
}