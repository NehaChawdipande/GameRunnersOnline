import React from 'react';
import './navbar.scss';
import { Link } from "react-router-dom";


const Navbar = (props) => {
    return (<>
       <div  className='nav'>
                    <div>
                        <h1>GAME RUNNERS ONLINE</h1>
                        <Link className='viewAll' to="/all">
                        <h5>View All</h5>
              </Link>
                      
                    </div>
                    <h3>Join the pixel party</h3>
                </div>
    </>)
}

export default Navbar;