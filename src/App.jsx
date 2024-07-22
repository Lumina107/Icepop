import Aos from "aos";
import Banner from "./components/Banner";
import BuyPop from "./components/BuyPop";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import IcePop from "./components/IcePop";
import Navbar from "./components/Navbar";
import NewsBanner from "./components/NewsBanner";
import Tokenomics from "./components/Tokenomics";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Preloader from "./Preloader";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "bottom-bottom",
    });
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="w-screen overflow-hidden">
        <Banner />
        <NewsBanner />
        <BuyPop />
        <Carousel />
        <IcePop />
        <Tokenomics />
        <Faq />
      </main>
    </>
  );
}

export default App;
