import React from 'react';
import './Home.scss';
import cuteImage from '../../assets/cute.png';

export default function Home(){
    return(
        <div className="home">
            <div className="desc"> 
            <h1>My Portfolio.</h1>
            <h2>Hi there!</h2>
            <h4>My name is Chong Jia Yee.</h4>
            <hr></hr>
            <p>I'm a year 2 computer science student. </p>
            <p>Looking for internship in software development. </p>
            <p>Currently have 4.0 cgpa and scored 9A+ in SPM. </p>
            </div>
            <div className='img'>
                <img src={cuteImage} alt="profile" />
            </div>
            
        </div>
    )
}