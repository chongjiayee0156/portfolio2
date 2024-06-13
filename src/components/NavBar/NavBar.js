import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <div className="navbar">
            <Link to ="/">Home</Link>
            <Link to ="/projects">Projects</Link>
            <Link to ="/achievements">Achievements</Link>
            <Link to ="/contact">Contact</Link>
        </div>
    )
}