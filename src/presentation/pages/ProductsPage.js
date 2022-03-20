import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../../infrastructure/helpers/store";
import { queryProducts } from "../../infrastructure/reducers/product.reducer";
import { SwiperSlide } from "swiper/react";
import Card from "../components/atoms/Card";
import Paginate from "../components/atoms/Paginate";

export default function ProductsPage() {
  const products = useSelector((state) => state.products);
  const paging = useSelector((state) => state.paging);
  const search = useSelector((state) => state.search);
  const fetchProducts = () => store.dispatch(queryProducts("", paging));

  useEffect(() => {
    if (!search) fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="m-10 mx-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, id) => {
            return (
              <SwiperSlide key={id} className="side">
                <Card product={product} />
              </SwiperSlide>
            );
          })}
        </div>
        <Paginate />
      </div>
    </div>
  );
}
