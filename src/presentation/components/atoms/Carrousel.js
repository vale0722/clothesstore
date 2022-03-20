import React from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "../../assets/styles/inputs/carrousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrousel({ children }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {children}
    </Swiper>
  );
}
