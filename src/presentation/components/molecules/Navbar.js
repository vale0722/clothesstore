import React from "react";
import {navigation} from "../../assets/utils/navigation";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar">
            {
                navigation.map(function (nav, key) {
                    return <Link className="hover:underline" key={key} to={nav.url}>{nav.name}</Link>
                })
            }
        </header>
    );
}