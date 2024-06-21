import React from 'react';

function Nav() {
    return (
        <nav>
            <ul>
                <li key="about"><a href="#"  /*onClick={handlePageChange}*/ name="about">About</a></li>
                <li key="resume"><a href="#" >Resume</a></li>
                <li key="projects"><a href="#" >Projects</a></li>
                <li key="contact"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;