import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper";
import Card from "../atoms/Card";
import { useSelector } from "react-redux";
import { store } from "../../../infrastructure/helpers/store";
import { moreSearched } from "../../../infrastructure/reducers/product.reducer";

export default function ProductsMoreSearched({ setIsLoading }) {
  const products = useSelector((state) => state.products);
  const fetchProducts = () => store.dispatch(moreSearched(setIsLoading));

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl text-black font-extrabold">
        PRODUCTOS MÁS BUSCADOS
      </h2>
      <div className="flex justify-center items-center">
        <div className="m-10 container">
          <Swiper
            centeredSlides={false}
            grabCursor={true}
            rewind={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            scrollbar={true}
            navigation={true}
            modules={[Keyboard, Scrollbar, Navigation]}
            className="products"
          >
            {products.map((product, id) => {
              return (
                <SwiperSlide key={id} className="side">
                  <Card product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
