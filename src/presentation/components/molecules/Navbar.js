import React from "react";
import { navigation } from "../../assets/utils/navigation";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ setIsLoading }) {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      {navigation.map(function (nav) {
        return (
          <Link
            onClick={() =>
              nav.action ? nav.action(navigate, setIsLoading) : null
            }
            className="hover:underline"
            key={nav.name}
            to={nav.url}
          >
            {nav.name}
          </Link>
        );
      })}
    </header>
  );
}
