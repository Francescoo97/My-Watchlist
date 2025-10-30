import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={'nav-link'}>Home</NavLink></li>
                    <li><NavLink to="/preferiti" className={'nav-link'}>Preferiti</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar 