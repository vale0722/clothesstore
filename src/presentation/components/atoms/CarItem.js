import React from "react";
import "../../assets/styles/inputs/card.scss";
import "../../assets/styles/inputs/forms.scss";
import {
  formatter,
  getPrices,
} from "../../../infrastructure/helpers/currency-formatter";
import { useSelector } from "react-redux";
import { store } from "../../../infrastructure/helpers/store";
import {
  addItem,
  removeItem,
} from "../../../infrastructure/reducers/cart.reducer";

export default function CarItem({ product }) {
  const car = useSelector((state) => state.car);
  const addCar = () => store.dispatch(addItem(car, product));
  const remove = () => store.dispatch(removeItem(car, product));
  const prices = getPrices(product.prices);

  return (
    <div className="flex justify-between mt-6 border-b border-gray-300 pb-4">
      <div className="flex">
        <img
          className="h-20 w-20 object-cover rounded"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="mx-3">
          <h3 className="text-sm text-gray-600">{product.title}</h3>
          <div className="flex items-center mt-2">
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={() => remove()}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span className="text-gray-700 mx-2">{product.count}</span>
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              disabled={product.available_quantity >= product.count}
              onClick={() => addCar()}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span className="text-gray-600 w-48 flex flex-row gap-2">
        {prices.promotion ? (
          <div className="flex flex-col gap-1 text-right">
            <h2 className="text-purple-600 font-bold">
              {formatter(prices.promotion * product.count)}
            </h2>
            <h2 className="text-gray-300 text-sm line-through">
              {formatter(prices.standard * product.count)}
            </h2>
          </div>
        ) : (
          <div className="flex gap-1 text-right">
            <h2 className="text-purple-600 font-bold">
              {formatter(prices.standard * product.count)}
            </h2>
          </div>
        )}
      </span>
    </div>
  );
}
