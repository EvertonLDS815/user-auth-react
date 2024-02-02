import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Home from '../pages/Home'
import Private from '../pages/Private';
import { destroyCookie, parseCookies } from 'nookies';

function Router() {

  const navigate = useNavigate()

  const handleLogout = () => {
    // Lógica de logout
    destroyCookie(undefined, '@myform.token');
    navigate('/');
  };

  const cookies = parseCookies();
  const tokenCookie = cookies['@myform.token'];
  
  return (
    <Routes>
        <Route path="/" element={!tokenCookie ? (<Home/>) : (
            <Navigate to="/private" replace />
          )
        } />
        <Route path="/private" element={ tokenCookie ? (
            <Private onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  )
}

export default Router
