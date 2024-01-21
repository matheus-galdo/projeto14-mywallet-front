import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"



 export function useLogout() {
    const { token, setToken, setUserName } = useContext(AuthContext)
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const navigate = useNavigate()

    return () => {

        axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, config)
            .then(() => {
                setToken(undefined)
                setUserName(undefined)
                localStorage.clear()
                navigate("/")
            })
            .catch(err => alert(err.response.data))
    }
}
