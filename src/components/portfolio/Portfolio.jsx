import React, { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          ></PortfolioList>
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt=""
          ></img>
          <h3>Mobile App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt=""
          ></img>
          <h3>Mobile App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt=""
          ></img>
          <h3>Mobile App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt=""
          ></img>
          <h3>Mobile App</h3>
        </div>
      </div>
    </div>
  );
}
