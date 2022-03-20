import './presentation/assets/styles/app.scss';
import Header from "./presentation/components/organisms/Header";
import React from 'react';
import Navbar from "./presentation/components/molecules/Navbar";
import Footer from "./presentation/components/molecules/Footer";
import Sidebar from "./presentation/components/molecules/Sidebar";
import {RenderRoutes, ROUTES} from "./infrastructure/helpers/routes";

function App() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="App">
        <Header setIsOpen={setIsOpen} />
        <Navbar />
        <RenderRoutes routes={ROUTES} />
        <Footer />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
