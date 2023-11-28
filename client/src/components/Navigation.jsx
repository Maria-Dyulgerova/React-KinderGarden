// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';
import Path from '../paths';

import Home from './Home';
import About from './About';
import ChildrenListContainer from './children/ChildrenListContainer';
import ChildDetailsModal from './children/ChildDetailsModal';


export default function Navigaion() {

  const {
    isAuthenticated,
    username,
  } = useContext(AuthContext);
  
  return (
      <>
      <h1>
        <Link className="home" to={Path.Home}>Wow Kids</Link></h1>
        <nav>
          {isAuthenticated && (
             <div id="user">
                <Link as={Link} to={Path.About}>About</Link>
                <Link as={Link} to={Path.ChildrensList}>Children's List</Link>
                <span>   | User : {username}</span>
             </div>
                        
          )}

          {!isAuthenticated && (
               <div id="guest">
                <Link as={Link} to={Path.About}>About</Link>
                <Link as={Link} to={Path.Login}>Login</Link>
                <Link as={Link} to={Path.Register}>Register</Link>
                 
               </div>
          )}
          
          {/* <Link to={Path.About}><About></About></Link>
        <div id="user">
          <Link to="/games/create">Create Game</Link>
          <Link to="/logout">Logout</Link>
        </div> */}
       
      </nav> 
      
      {/* <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand as={Link} to="/">WoW Kids</Navbar.Brand> */}
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar> */}

        
      </>
  );
}

