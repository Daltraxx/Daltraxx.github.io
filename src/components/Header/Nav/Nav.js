import React from 'react';

function Nav({handlePageChange}) {
    return (
        <nav>
            <ul>
                <li key="about"><a href="#"  onClick={handlePageChange} name="about">About</a></li>
                <li key="resume"><a href="#" onClick={handlePageChange} name="resume">Resume</a></li>
                <li key="projects"><a href="#" onClick={handlePageChange} name="projects">Projects</a></li>
                <li key="contact"><a href="#" onClick={handlePageChange} name="contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;