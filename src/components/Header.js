import React from "react";
import {Link} from "react-router-dom";

export const Header = () => (
    <header>
        <nav>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/roster"> Roster </Link></li>
            <li> <Link to="/schedule"> Schedule </Link></li>
        </nav>
    </header>
)