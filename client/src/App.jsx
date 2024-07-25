import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css'

import Header from './components/header/Header';
import Login from './components/login/Login';


function App() {
  const { pathname } = useLocation();

  return (
    <>

      {
        pathname !== '/login' ? <Header /> : null
      }

      <main id='main-content'>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>

    </>
  )
}

export default App
