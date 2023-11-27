
import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation";

export default function Header()  {
    return (
        <header className="header">
            {/* <div className="logo"> */}
            <Link to="/">Wow Kids</Link>
            {/* </div> */}
            <Navigation/>
            
        </header>
    )

}
