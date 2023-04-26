import {useState} from 'react'
export default function HomeScreen() {
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
      <form>
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
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
