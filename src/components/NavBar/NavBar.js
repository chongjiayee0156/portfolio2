import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; // Import icons for hamburger menu
import { useState } from 'react';


export default function NavBar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </div>
            <div className={`menu-links ${isOpen ? 'active': ''}`}>
            <Link to ="/" onClick={toggleMenu}>Home</Link>
            <Link to ="/projects" onClick={toggleMenu}>Projects</Link>
            <Link to ="/achievements" onClick={toggleMenu}>Achievements</Link>
            <Link to ="/contact" onClick={toggleMenu}>Contact</Link>
            </div>

        </div>
    )
}