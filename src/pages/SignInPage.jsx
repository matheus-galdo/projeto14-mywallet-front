import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useContext, useState } from "react"
import axios from "axios"
import AuthContext from "../context/AuthContext"

export default function SignInPage() {
  const {setToken, setUserName} = useContext(AuthContext)

  const [form, setForm] = useState({email:"", password: ""})
  const navigate = useNavigate()

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function submitForm(e){
    e.preventDefault()

    axios.post(`${import.meta.env.VITE_API_URL}/login`, form )
    .then(res => {
        setToken(res.data.token)
        setUserName(res.data.userName)

        localStorage.setItem("userName", res.data.userName)
        localStorage.setItem("token", res.data.token)

        navigate("/home")
    })
    .catch((err)=> alert(err.response.data))

  }
  return (
    <SingInContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input
          required
          placeholder="E-mail"
          type="email" 
          name="email"
          value={form.email}
          onChange={handleForm}
          />
        <input
          required
          minLength={3}
          placeholder="Senha"
          type="password"
          autoComplete="new-password" 
          name="password"
          value={form.password}
          onChange={handleForm}
          />
        
        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
