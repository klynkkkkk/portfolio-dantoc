import "./App.css";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Hero />
        <Carousel />
      </div>
    </>
  );
}

export default App;
