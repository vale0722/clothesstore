import React from "react";
import Icon from "../atoms/Icon";
import { navigation } from "../../assets/utils/navigation";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen, setIsLoading }) {
  const navigate = useNavigate();
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 -translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0" : " -translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg flex flex-col space-y-6 overflow-y-scroll h-full">
          <span className="flex justify-end p-8">
            <button
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 cursor-pointer"
            >
              <Icon
                className="h-6 w-6 cursor-pointer"
                iconName="icon-times-purple"
              />
            </button>
          </span>
          <ul className="flex flex-col text-left px-12">
            {navigation.map(function (nav, key) {
              return (
                <li
                  className="py-4 text-2xl font-bold text-black sidebar-link"
                  key={key}
                >
                  <Link
                    onClick={() => {
                      if (nav.action) {
                        nav.action(navigate, setIsLoading);
                      }
                      setIsOpen(false);
                    }}
                    className="hover:underline"
                    key={nav.name}
                    to={nav.url}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </main>
  );
}
