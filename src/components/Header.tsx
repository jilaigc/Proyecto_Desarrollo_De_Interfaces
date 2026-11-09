import "../style/Header.css"
import images from "../images/Logo_Jilai.jpg"
import { useState } from "react";




function Header() {

    const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

    setInterval(() => {setHora(new Date().toLocaleTimeString());}, 1000); 

    return (
        <div className='nav-menu'>
            <img src={images} alt="Logo de la empresa" className="logo" />
            <div className="derecha">
                <h1>{hora}</h1>
            </div>
        </div>

    );
}

export default Header;