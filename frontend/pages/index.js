import {useState} from 'react'
import {useRouter} from 'next/router'
import { authService } from '../src/service/auth/authService';
export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = useState({
    usuario:'',
    senha:''
  })

  const handleChange = (event) =>{
    const value = event.target.value
    const fieldName = event.target.name
      setValues((prevState)=>{
        return{
          ...prevState,
          [fieldName]: value
        }
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        event.preventDefault()
        authService.login({
          username: values.usuario,
          password: values.senha,
        }).then(() => {
          router.push(`/auth-page-ssr`)
          // router.push(`/auth-page-static`)
        }).catch(error => {
          console.log(error)
          console.log("Usuário ou nome inválidos")
        })

      }}>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario}
          onChange={handleChange}

        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha}
          onChange={handleChange}
        />
        <div>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <button type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
