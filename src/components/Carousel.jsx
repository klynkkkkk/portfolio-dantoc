import { useRef } from "react";
import { useEffect } from "react";
import logo from "../assets/image/logo.png";
import { arrayImg } from "../data/data";

let runTimeOut;
let runNextAuto;

function Carousel() {
  const nextDom = useRef(null);
  const carouselDom = useRef(null);
  const sliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 6000;

  useEffect(() => {
    console.log("go here");
    // Initialize the carousel
    const thumbnailItemsDom =
      thumbnailBorderDom.current.querySelectorAll(".item");
    thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);

    // Start auto next
    runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
    };
  }, []);

  const showSlider = (type) => {
    const sliderItemsDom = sliderDom.current.querySelectorAll(".item");
    const thumbnailItemsDom =
      thumbnailBorderDom.current.querySelectorAll(".item");
    if (type === "next") {
      sliderDom.current.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
      carouselDom.current.classList.add("next");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.current.classList.remove("next");
    }, timeRunning);
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);
  };

  return (
    <>
      <div ref={carouselDom} className="carousel">
        <div className="list" ref={sliderDom}>
          {arrayImg.map((item) => (
            <div className="item" key={`carousel-${item.image}`}>
              <div className="img-container">
                <div className="relative w-full h-full xl:rounded-3xl xl:overflow-hidden">
                  <img src={item.image} alt="bg-image" className="" />
                </div>
              </div>
              <div className="content text-white">
                <div className="author uppercase text-2xl leading-6 xl:text-text-black mb-2">
                  Traditional
                </div>
                <div className="title mb-6 text-7xl xl:text-primary font-bold">
                  {item.title}
                </div>
                <div className="topic mb-3">
                  <p className="font-semibold text-lg xl:text-text-black ">
                    Characteristics
                  </p>
                  <p className="text-sm sm:text-base xl:text-text-gray ">
                    {item.characteristic}
                  </p>
                </div>
                <div className="des">
                  <p className="font-semibold text-lg xl:text-text-black ">
                    Significance
                  </p>
                  <p className="text-sm sm:text-base xl:text-text-gray">
                    {item.significance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail" ref={thumbnailBorderDom}>
          {arrayImg.map((item) => (
            <div className="item" key={`thumbnail-${item.image}`}>
              <img src={item.image} alt="thumbnail-image" />
              <div className="content">
                <div className="title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows flex flex-col justify-center">
          <div className="flex flex-row gap-4">
            <button ref={nextDom} onClick={() => showSlider("next")}>
              <p className="text-2xl text-text-black">{">"}</p>
            </button>
          </div>
        </div>
        <div className="logo top-10 left-10 absolute z-10">
          <img src={logo} />
        </div>
        <div className="time"></div>
      </div>
    </>
  );
}

export default Carousel;
