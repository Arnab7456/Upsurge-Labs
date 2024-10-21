import { Cards } from "./components/Cards";
import Footer from "./components/Footer";
import GlobeDemo from "./components/Globe";
import SparklesPreview from "./components/HomePage";
import Navbar from "./components/Navbar";
import ScrollCards from "./components/ScrollCards";
import { Spotlight } from "./components/ui/Spotlight";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Spotlight />
    <SparklesPreview />
    <ScrollCards />
    <Cards />
    <GlobeDemo />
    <Footer />
   </div>
  );
}
