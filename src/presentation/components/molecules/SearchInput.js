import React from "react";
import "../../assets/styles/inputs/search.scss";
import Icon from "../atoms/Icon";
import { store } from "../../../infrastructure/helpers/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchState } from "../../../infrastructure/reducers/search.reducer";
import { searchProducts } from "../../../infrastructure/helpers/products";

export default function SearchInput() {
  const search = useSelector((state) => state.search);
  const navigate = useNavigate();
  const setSearch = async (value) => await store.dispatch(searchState(value));

  return (
    <div className="flex w-full h-8">
      <input
        type="search"
        className="search w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Busca aquí un producto"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchProducts(navigate, search);
          }
        }}
      />
      <button
        onClick={() => searchProducts(navigate, search)}
        className="btn-search"
      >
        <Icon className="h-5 w-5" iconName="icon-search" />
      </button>
    </div>
  );
}
