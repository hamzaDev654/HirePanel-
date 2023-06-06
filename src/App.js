import React, { useState } from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import { Home } from "./Components/Sections/Home";
import { Cards } from "./Components/Sections/Cards";
import { Services } from "./Components/Sections/Services";
import { AboutUs } from "./Components/Sections/AboutUs";
import { Contact } from "./Components/Sections/Contact";
import { WhtsAppShareButton } from "./Components/Sections/WhtsAppShareButton";
import { Footer } from "./Components/Sections/Footer";

function App() {
  const [isOpen, setOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setOpen(true);
  };
  const sideDrawerCloseHandler = () => {
    setOpen(false);
  };

  let backdrop;
  if (isOpen) {
    backdrop = <Backdrop click={sideDrawerCloseHandler} />;
  }
  return (
    <div className="App">
      <Toolbar drawerClickHnadler={drawerToggleClickHandler} />
      <SideDrawer show={isOpen} closeDrawer={sideDrawerCloseHandler} />
      {backdrop}
      <main style={{ marginTop: 64 }}>
        <Home />
        <Cards />
        <Services />
        <Cards className={"controlSvg"} />
        <AboutUs />
        <Cards />
        <Contact />
        <WhtsAppShareButton />
        <Footer />
      </main>
    </div>
  );
}

export default App;
