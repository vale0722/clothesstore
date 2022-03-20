import React from "react";
import SearchInput from "../molecules/SearchInput";
import Icon from "../atoms/Icon";
import config from "../../../infrastructure/config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({ setIsOpen, setIsOpenShoppingCar }) {
  const car = useSelector((state) => state.car);

  return (
    <header className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="py-4 flex flex-row items-center justify-between w-full">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden focus:outline-none focus:shadow-outline"
        >
          <Icon className="h-8 w-8" iconName="icon-bars" />
        </button>
        <div className="flex gap-3">
          <Link
            to="/"
            className="text-3xl md:text-5xl font-bebas uppercase focus:outline-none focus:shadow-outline"
          >
            <img className="h-12" src={config.statics + "brand/logo.png"} />
          </Link>
          <span className="relative inline-flex flex md:hidden">
            <button
              onClick={() => setIsOpenShoppingCar(true)}
              type="button"
              className="inline-flex items-center transform duration-150 hover:scale-105"
            >
              <Icon className="w-6 h-6" iconName="icon-cart" />
              {car.length ? (
                <span className="flex absolute h-3 w-3 top-0 right-0 -pt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600 text-white text-1xs font-bold flex items-center justify-center">
                    {car.length}
                  </span>
                </span>
              ) : (
                ""
              )}
            </button>
          </span>
        </div>
      </div>
      <div className="flex gap-4 p-4 w-full">
        <SearchInput />
        <button
          onClick={() => setIsOpenShoppingCar(true)}
          type="button"
          className="inline-flex items-center transform duration-150 hover:scale-105"
        >
          <span className="relative inline-flex hidden md:flex">
            <Icon className="w-8 h-8" iconName="icon-cart" />
            {car.length ? (
              <span className="flex absolute h-3 w-3 top-0 right-0 -pt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600 text-white text-1xs font-bold flex items-center justify-center">
                  {car.length}
                </span>
              </span>
            ) : (
              ""
            )}
          </span>
        </button>
        <nav className="flex-col flex-grow gap-6 hidden md:flex md:justify-end md:flex-row">
          <span className="relative inline-flex">
            <button
              type="button"
              className="inline-flex items-center transform duration-150 hover:scale-105"
            >
              <Icon className="w-6 h-6" iconName="icon-user" />
            </button>
          </span>
          <button className="btn-default transform duration-150 hover:scale-105">
            Iniciar sesión
          </button>
        </nav>
      </div>
    </header>
  );
}
