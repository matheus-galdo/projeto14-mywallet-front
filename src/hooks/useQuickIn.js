import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"


export function useQuickIn(){
    const {userName, token} = useContext(AuthContext)
    const navigate = useNavigate()

 // nesse caso, useEffect é usado para fazer uma verificação antes da execução principal.
    useEffect(()=>{
      if(token && userName) navigate("/home")
    }, [])

  } 