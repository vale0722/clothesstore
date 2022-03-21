import React from "react";
import config from "../../infrastructure/config";
import Carrousel from "../components/atoms/Carrousel";
import CardPrimary from "../components/atoms/CardPrimary";
import { SwiperSlide } from "swiper/react";
import ProductsMoreSearched from "../components/organisms/ProductsMoreSearched";
import { banners } from "../assets/utils/banners";

export default function DashboardPage() {
  const bannerComponent = banners.map((banner, id) => {
    return (
      <SwiperSlide key={id}>
        <a href={banner.url} className="cursor-pointer">
          <img className="w-full" alt={banner.url} src={banner.image} />
        </a>
      </SwiperSlide>
    );
  });
  return (
    <div>
      <Carrousel className="h-40">{bannerComponent}</Carrousel>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-2 gap-8 h-1/6 items-center justify-center m-10 container uppercase card-primary">
          <CardPrimary
            keyword="infantíl"
            title="Moda infantil"
            image={config.statics + "categorias-destacadas-moda-infantil.png"}
          />
          <CardPrimary
            keyword="protección"
            title="Protección"
            image={config.statics + "categorias-destacadas-proteccion.png"}
          />
        </div>
      </div>
      <ProductsMoreSearched />
    </div>
  );
}
