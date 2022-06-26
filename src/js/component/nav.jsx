import React from "react"
import { useState } from "react"

const view = {
    display: "block"
}

const Navbar = () => {

    const [lista, setMenu] = useState(false) 

    let active = ()=>{
        if(lista === false){
            return setMenu(true)
        }else{
            return setMenu(false)
        };
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark container-fluid">
                <div className="d-flex justify-content-between w-100">
                    <div className="nav title">
                        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                    </div>
                    <div className="container d-flex justify-content-end m-0 items-list" id="navbarSupportedContent">
                        <ul className="navbar-nav listas">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" >Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" >Contact</a>
                            </li>
                        </ul>
                        <a className="nav-link button-menu" onClick={active} href="#" id="navbarDropdownMenuLink" role="button">
                            <span className="material-symbols-outlined">reorder</span>
                        </a>
                    </div>
                </div>
                <div className={lista === true ? 'yes-menu-list' : 'not-menu-list'}>
                    <ul className="menu-list">
                        <li className="m-2"><a className="a-item" href="#">Home</a></li>
                        <li className="m-2"><a className="a-item" href="#">About</a></li>
                        <li className="m-2"><a className="a-item" href="#">Service</a></li>
                        <li className="m-2"><a className="a-item" href="#">Contact</a></li>
                    </ul>
                </div>

            </nav>

        </>
       
    )
}

export default Navbar
