import { Advantages } from "./components/Advantages";
import { Disclaimer } from "./components/Disclaimer";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NewBonusBlock } from "./components/NewBonusBlock";
import { NewCallToAction } from "./components/NewCallToAction";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <NewBonusBlock />
      <Advantages />
      <FAQ />
      <Disclaimer />
      <NewCallToAction />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
