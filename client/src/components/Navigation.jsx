import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ChildrenListContainer from './children/ChildrenListContainer';
import ChildDetailsModal from './children/ChildDetailsModal';

export default function Navigaion() {
  return (
    
   
      <>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <h1><Link className="home" to="/">GamesPlay</Link></h1><nav>
        <Link to="/games">All games</Link>
        <div id="user">
          <Link to="/games/create">Create Game</Link>
          <Link to="/logout">Logout</Link>
        </div>
        <div id="guest">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav> */}
      
      <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand as={Link} to="/">WoW Kids</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/children/list">Children's List</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        
      </>
  );
}

