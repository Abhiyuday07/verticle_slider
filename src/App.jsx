import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slidesLength = 4;
  // console.log(setActiveSlideIndex)

  const changeSlide = (direction) => {
    if (direction === 'up') {
      setActiveSlideIndex((prevIndex) => {
        if (prevIndex + 1 < slidesLength) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    } else if (direction === 'down') {
      setActiveSlideIndex((prevIndex) => {
        if (prevIndex - 1 >= 0) {
          return prevIndex - 1;
        }
        return prevIndex; 
      });
    }
  };

  const slidesLeft = [
    { color: 'green', title: 'Lotus', text: 'UPasjdvfkjvdfjhadfjlsdhbaslkjjkdfh' },
    { color: 'grey', title: 'Bike-BMW', text: 'asjdvfkjvdfjhadfjlsdhbaslkjjkdfh' },
    { color: 'darkgreen', title: 'UP', text: 'asjdvfkjvdfjhadfjlsdhbaslkjjkdfh' },
    { color: 'black', title: 'S11', text: 'asjdvfkjvdfjhadfjlsdhbaslkjjkdfhDn' }
  ];

  const slidesRight = [
    { image: '/images/scorpio.jpg' },
    { image: '/images/uttar-pradesh.jpg' },
    { image: '/images/bike.jpg' },
    { image: '/images/om.jpg' }
  ];

  return (
    <div className="slider">
      <div className="left">
        <div className="slides" style={{ transform: `translateY(-${activeSlideIndex * 100}vh)` }}>
          <div className="slide" style={{ backgroundColor: slidesLeft[0].color }}>
            <h1>{slidesLeft[0].title}</h1>
            <p>{slidesLeft[0].text}</p>
          </div>
          <div className="slide" style={{ backgroundColor: slidesLeft[1].color }}>
            <h1>{slidesLeft[1].title}</h1>
            <p>{slidesLeft[1].text}</p>
          </div>
          <div className="slide" style={{ backgroundColor: slidesLeft[2].color }}>
            <h1>{slidesLeft[2].title}</h1>
            <p>{slidesLeft[2].text}</p>
          </div>
          <div className="slide" style={{ backgroundColor: slidesLeft[3].color }}>
            <h1>{slidesLeft[3].title}</h1>
            <p>{slidesLeft[3].text}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="slides" style={{ transform: `translateY(${activeSlideIndex * 100}vh)` }}>
          <div className="slide" style={{ backgroundImage: `url(${slidesRight[0].image})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${slidesRight[1].image})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${slidesRight[2].image})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${slidesRight[3].image})` }}></div>
        </div>
      </div>
      <div className="buttons">
        <button className="down" onClick={() => changeSlide('down')}>
          <i className="fa-solid fa-down-long"></i>
        </button>
        <button className="up" onClick={() => changeSlide('up')}>
          <i className="fa-solid fa-up-long"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
