import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export default function useQuickIn() {
    const { userName, token } = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        console.log({token, userName});
        if (token && userName) navigate("/home")
    }, [])
}