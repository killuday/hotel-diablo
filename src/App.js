import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import Slider from "./components/Slider";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <Slider />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
