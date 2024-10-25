import logo from "../assets/image/logo.png";
import arrow from "../assets/image/arrow.png";

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by 100vh
      behavior: "smooth", // Smooth scroll animation
    });
  };
  return (
    <>
      <div className="h-screen overflow-hidden bg-hero-medium xl:bg-hero bg-center bg-no-repeat bg-cover relative">
        <div className="p-10 flex flex-row justify-between items-center">
          <img src={logo} />
          <p className="text-sm leading-5 text-text-black">
            MADE BY KHANH LINH NGUYEN
          </p>
        </div>

        <div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScroll}
        >
          <img src={arrow} />
        </div>
      </div>
    </>
  );
};

export default Hero;
