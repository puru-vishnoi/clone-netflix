import React,{useState, useEffect} from 'react'
import './Nav.css'

function Nav() {

    const [show,handleShow]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY >100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png" alt="LOGO" className="nav__logo" />

            <img src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="pv" className="watching" />
            
        </div>
    )
}

export default Nav
