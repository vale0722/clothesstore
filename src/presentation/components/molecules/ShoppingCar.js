import React, { useEffect } from "react";
import Icon from "../atoms/Icon";
import { useSelector } from "react-redux";
import { store } from "../../../infrastructure/helpers/store";
import { getAllCart } from "../../../infrastructure/services/cart.service";
import CarItem from "../atoms/CarItem";

export default function ShoppingCar({ isOpen, setIsOpen }) {
  const car = useSelector((state) => state.car);
  const fetchCar = () => store.dispatch(getAllCart);

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0" : " translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg flex flex-col space-y-6 h-full">
          <div className="flex justify-between items-center p-8">
            <button
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 cursor-pointer"
            >
              <Icon
                className="h-6 w-6 cursor-pointer"
                iconName="icon-times-purple"
              />
            </button>
            <h2 className="text-2xl text-black font-bold">
              Carrito de Compras
            </h2>
          </div>
          <div className="justify-between flex flex-col h-full">
            <ul className="flex flex-col text-left px-12 overflow-y-scroll">
              {car.map(function (item, key) {
                return <CarItem key={key} product={item} />;
              })}
            </ul>
            <button className="btn bg-purple-600 text-white m-8">
              Comprar ahora
            </button>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </main>
  );
}
