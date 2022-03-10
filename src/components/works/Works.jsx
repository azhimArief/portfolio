import React, { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      icon: "./assets/globe.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure totam sit mollitia?",
      img: "https://user-images.githubusercontent.com/98761689/153898046-576c32fc-d1a0-4a24-baec-7e4e95077028.png",
    },
    {
      id: 2,
      icon: "./assets/writing.png",
      title: "Mobile App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure totam sit mollitia?",
      img: "https://user-images.githubusercontent.com/98761689/156307299-f416e8a3-9a64-44af-a553-64e77abf8f9b.png",
    },
    {
      id: 3,
      icon: "./assets/mobile.png",
      title: "Branding App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure totam sit mollitia?",
      img: "https://user-images.githubusercontent.com/98761689/156307299-f416e8a3-9a64-44af-a553-64e77abf8f9b.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="mobileIcon"></img>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt="somePic"
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      ></img>
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      ></img>
    </div>
  );
}
