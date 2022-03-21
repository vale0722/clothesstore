import "./presentation/assets/styles/app.scss";
import Header from "./presentation/components/organisms/Header";
import React from "react";
import Navbar from "./presentation/components/molecules/Navbar";
import Footer from "./presentation/components/molecules/Footer";
import Sidebar from "./presentation/components/molecules/Sidebar";
import { RenderRoutes, ROUTES } from "./infrastructure/helpers/routes";
import ScrollToTop from "./infrastructure/helpers/scroll";
import ShoppingCar from "./presentation/components/molecules/ShoppingCar";
import { MutatingDots } from "react-loader-spinner";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenShoppingCar, setIsOpenShoppingCar] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="App">
      {isLoading ? (
        <main className="fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex items-center justify-center">
          <MutatingDots
            color="#5B17AA"
            secondaryColor="#5B17AA"
            height="100"
            width="110"
            ariaLabel="loading-indicator"
          />
        </main>
      ) : (
        ""
      )}
      <Header
        setIsOpen={setIsOpen}
        setIsLoading={setIsLoading}
        setIsOpenShoppingCar={setIsOpenShoppingCar}
      />
      <Navbar setIsLoading={setIsLoading} />
      <ScrollToTop>
        <RenderRoutes setIsLoading={setIsLoading} routes={ROUTES} />
      </ScrollToTop>
      <Footer />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsLoading={setIsLoading}
      />
      <ShoppingCar
        isOpen={isOpenShoppingCar}
        setIsOpen={setIsOpenShoppingCar}
      />
    </div>
  );
}

export default App;
