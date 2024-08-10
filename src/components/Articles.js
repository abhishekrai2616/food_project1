import React, { useState } from "react";
import Card from "./Card";
import "./Articles.css";

export default function Articles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg_vnsmIBunD9YZEF2foN5EEVc014gQHvhlXI6eJMamToC0u8wEJBwndhHJ0AloxUU4E&usqp=CAU",
      title: "Grilled Tomatoes at Home1",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg_vnsmIBunD9YZEF2foN5EEVc014gQHvhlXI6eJMamToC0u8wEJBwndhHJ0AloxUU4E&usqp=CAU",
      title: "Grilled Tomatoes at Home2",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg_vnsmIBunD9YZEF2foN5EEVc014gQHvhlXI6eJMamToC0u8wEJBwndhHJ0AloxUU4E&usqp=CAU",
      title: "Grilled Tomatoes at Home3",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg_vnsmIBunD9YZEF2foN5EEVc014gQHvhlXI6eJMamToC0u8wEJBwndhHJ0AloxUU4E&usqp=CAU",
      title: "Grilled Tomatoes at Home4",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg_vnsmIBunD9YZEF2foN5EEVc014gQHvhlXI6eJMamToC0u8wEJBwndhHJ0AloxUU4E&usqp=CAU",
      title: "Grilled Tomatoes at Home5",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkg_vnsmIBunD9YZEF2foN5EEVc014gQHvhlXI6eJMamToC0u8wEJBwndhHJ0AloxUU4E&usqp=CAU",
      title: "Grilled Tomatoes at Home6",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...",
    },
  ];


  const nextSlide = () => {
    if (currentIndex < data.length - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const articles = data.slice(currentIndex, currentIndex + cardsPerPage);
  return (
    <div style={{padding:'50px'}}>
      <div className="title">Latest Articles</div>
      <div className="main">
        <div className="cards">
          {articles.map((obj, idx) => (
            <Card
              key={idx}
              image={obj.image}
              title={obj.title}
              desc={obj.desc}
            />
          ))}
        </div>
        <div className="buttons">
          <button
            className="nav-but"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            {"‹"}
          </button>
          <div>{`1/2`}</div>
          <button
            className="nav-but"
            onClick={nextSlide}
            disabled={currentIndex >= data.length - cardsPerPage}
          >
            {"›"}
          </button>
        </div>
      </div>
    </div>
  );
}