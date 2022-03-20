import "./presentation/assets/styles/app.scss";
import Header from "./presentation/components/organisms/Header";
import React, { useEffect } from "react";
import Navbar from "./presentation/components/molecules/Navbar";
import Footer from "./presentation/components/molecules/Footer";
import Sidebar from "./presentation/components/molecules/Sidebar";
import { RenderRoutes, ROUTES } from "./infrastructure/helpers/routes";
import ScrollToTop from "./infrastructure/helpers/scroll";
import ShoppingCar from "./presentation/components/molecules/ShoppingCar";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenShoppingCar, setIsOpenShoppingCar] = React.useState(false);

  return (
    <div className="App">
      <Header
        setIsOpen={setIsOpen}
        setIsOpenShoppingCar={setIsOpenShoppingCar}
      />
      <Navbar />
      <ScrollToTop>
        <RenderRoutes routes={ROUTES} />
      </ScrollToTop>
      <Footer />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ShoppingCar
        isOpen={isOpenShoppingCar}
        setIsOpen={setIsOpenShoppingCar}
      />
    </div>
  );
}

export default App;
