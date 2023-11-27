import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import ChildrenListContainer from './components/children/ChildrenListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/login/Login';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <><Header />
     <main className="main">
      
     </main>

     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            {/* <Route path="/children/list" element={<ChildrenListContainer />}/>   
            <Route path="/children/:child_id" element={<ChildDetailsModal />} /> */}
            <Route path="/login" element={<Login loginSubmitHandler = {loginSubmitHandler}/>}/>
            
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    <Footer /></>
  )
}

export default App;
