import { useState } from "react";
import "./hero.css";
import heroImage1 from "../assets/side-view-young-woman-exercising-home.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: (
        <>
          <span className="outline-text">الرا</span> <span className="solid-text">حــــة والأناقــــــة </span> <br />
          <span className="outline-text">في</span> <span className="solid-text">كل حركة</span>
        </>
      ),
      subtitle: (
        <>
          كل ما تحتاجه لتحقيق أهدافك <br />
          الرياضية في مكان واحد
        </>
      ),
      btnText: "تسوق الآن",
      image: heroImage1
    },
    {
      title: (
        <>
          <span className="outline-text">اس</span> <span className="solid-text"> تثمـــــــــر فــــــي </span> <br />
          <span className="outline-text">نف</span> <span className="solid-text"> ســـــــــك</span>
        </>
      ),
      subtitle: (
        <>
         أدوات رياضية تناسب كل<br/>
          المستويات     </>
      ),
      btnText: " تسوق الآن",
      image: hero2
    },
    {
      title: (
        <>
          <span className="outline-text">التد</span> <span className="solid-text"> ريب يبدا  </span> <br />
          <span className="outline-text">هن</span> <span className="solid-text">ا</span>
        </>
      ),
      subtitle: (
        <>
         ملابس رياضية تدفعك<br />
لتحقيق اهدافك         </>
      ),
      btnText: " تسوق الآن",
      image: hero3
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {slides[activeSlide].title}
        </h1>
        <p className="hero-subtitle">
          {slides[activeSlide].subtitle}
        </p>
        <button className="shop-btn">{slides[activeSlide].btnText}</button>
      </div>

      <div className="hero-image-container">
        <img 
          key={activeSlide}
          src={slides[activeSlide].image} 
          alt="Sports Gear" 
          className="hero-img fade-in" 
        />
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={activeSlide === index ? "active" : ""}
            onClick={() => setActiveSlide(index)}
          >
            0{index + 1}
          </span>
        ))}
      </div>
      
      <div className="orange-block"></div>
      <div className="orange-block-top"></div>
    </section>
  );
}
