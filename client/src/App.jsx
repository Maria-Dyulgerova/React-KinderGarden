import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
// import {Navigate}  from 'react-router-dom';


import AuthContext from './contexts/AuthContext';
import Path from './paths';
import * as authService from './services/authService';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import ChildrenListContainer from './components/children/ChildrenListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/login/Login';
import Register from './components/register/Register'

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    //try/catch ...
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    console.log(result.code);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    // console.log(values);
//TO DO: Validate password === confirm password
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  }

  const authValues = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.email
  }
  return (
    <>
    <AuthContext.Provider  value={authValues}>
      <div id="box">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.About} element={<About />}/>
          <Route path={Path.ChildrensList} element={<ChildrenListContainer />}/>   
          {/* <Route path="/children/:child_id" element={<ChildDetailsModal />} /> */}
          <Route path={Path.Login} element={<Login loginSubmitHandler = {loginSubmitHandler}/>}/>
          <Route path={Path.Login} element={<Login loginSubmitHandler = {loginSubmitHandler}/>}/>
          <Route path={Path.Register} element={<Register />}/>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        </div>
    </AuthContext.Provider>
    <Footer />
    </>
  )
}

export default App;
