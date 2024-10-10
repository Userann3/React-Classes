import { NavLink } from "react-router-dom"

function Navbar(){
    return (
    <>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/Navbar_Pages/Contact"}>Contact</NavLink></li>
          <li><NavLink to={"/Navbar_Pages/About"}>About</NavLink></li>
        </ul>
    </>

    )
}

export default Navbar