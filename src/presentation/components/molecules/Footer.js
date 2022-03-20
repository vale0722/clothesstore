import React from "react";
import FooterItem from "../atoms/FooterItem";
import config from "../../../infrastructure/config";

const items = [
  {
    title: "Políticas",
    items: [
      "Políticas de privacidad",
      "Políticas de cambio",
      "Políticas de envío",
      "Términos y condiciones",
      "Responsabilidad social",
    ],
  },
  {
    title: "Sobre nosotros",
    items: ["Encuentra tu tienda", "Contáctanos", "Trabaja con nosotros"],
  },
];

const socialNetworks = Object.keys(config.social_networks);

export default function Footer({ className }) {
  return (
    <footer className="text-white body-font font-helvetica bg-black">
      <div className="container py-14 px-8 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="md:flex-grow flex flex-col md:flex-row md:flex-wrap justify-center gap-10 md:gap-20 text-left">
          {items.map((item, key) => {
            return (
              <FooterItem title={item.title} items={item.items} key={key} />
            );
          })}
          <div className="mt-5 md:mt-0">
            <h2 className="title-font font-extrabold text-white tracking-widest uppercase text-sm md:text-md mb-3">
              Siguenos en:
            </h2>
            <div className="flex md:grid md:grid-cols-4 gap-2">
              {socialNetworks.map((item) => {
                return (
                  <a
                    className="h-10 w-10 cursor-pointer transform hover:scale-105"
                    key={item}
                    href={config.social_networks[item]}
                  >
                    <img
                      alt={item}
                      src={config.statics + "icons/icon-" + item + ".svg"}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t text-sm border-gray-50 py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
        © Copyright Colombia. Todos los derechos reservados
      </div>
    </footer>
  );
}
