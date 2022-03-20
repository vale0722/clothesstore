import React from "react";
import '../../assets/styles/inputs/search.scss';
import Icon from "./Icon";

export default function SearchInput({ search }) {
    return (
        <div className="flex w-full h-8">
            <input type="search" className="search w-full"
                   value={search}
                   placeholder="Busca aquí un producto" />
                <button className="btn-search">
                    <Icon className="h-5 w-5" iconName="icon-search" />
                </button>
        </div>
    );
}