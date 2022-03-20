import React from "react";

export default function FooterItem({ title, items }) {
    return (
         <div>
            <div className="hidden md:block w-full px-4">
                <h2 className="title-font font-extrabold text-white tracking-widest uppercase text-md mb-3">{ title }</h2>
                <nav className="list-none mb-10">
                    {
                        items.map((item, key) => {
                            return <li key={key}><a className="text-white hover:text-gray-300" href="#">{ item }</a></li>
                        })
                    }
                </nav>
            </div>
            <div className="block md:hidden w-full px-4 border-b border-b-white">
                <div tabIndex="0"
                     className="collapse collapse-plus">
                    <div className="collapse-title text-xl font-medium">
                        <h2 className="title-font font-bold text-white tracking-widest text-md">{ title }</h2>
                    </div>
                    <div className="collapse-content">
                        <nav className="list-none mb-10">
                            {
                                items.map((item, key) => {
                                    return <li key={key}><a className="text-white hover:text-gray-300" href="#">{ item }</a></li>
                                })
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
