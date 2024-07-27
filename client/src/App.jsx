import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css'

import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import BooksList from './components/books-list/BooksList';


function App() {
  const { pathname } = useLocation();

  return (
    <>

      {
        (pathname !== '/login' && pathname !== '/register') ? <Header /> : null
      }

      <main id='main-content'>
        <Routes>
          <Route path='/books' element={<BooksList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

    </>
  )
}

export default App
