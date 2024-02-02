import { FormEvent, useState } from 'react';
import {api} from '../../utils/api';
import { setCookie } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function App() {
  const [log, setLog] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    try {
      if (log === '' || password === '') {
        return toast.error('Preencha todos os campos!');
      }
  
      const response = await api.post('/login', {
        login: log,
        password: password
      });
  
      const {_id, login, token} = response.data;
  
      setCookie(undefined, '@myform.token', token, {
        maxAge: 60 * 60 * 2,
        path: '/'
      });
  
      setUser({
          _id,
          login
      });
  
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      navigate('/private');
      return toast.success(`Bem vindo ${login}!`)
    } catch (err) {
      return toast.error('Login/senha inválida!');
    }
    
  }
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form className="form-content" onSubmit={(event) => handleLogin(event)}>
            <input
            placeholder="Digite seu login..."
            value={log}
            onChange={(e) => setLog(e.target.value)}
            />
            <input
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
      </div>
      <div className="container">
      <h2>Simulação</h2>
        <span>Login: </span>
        <span>Ronaldo</span><br/>
        <span>Senha: </span>
        <span>ronaldo22</span>
      </div>
    </>
  )
}

export default App
