import "./hero.css";
import heroImage from "../assets/side-view-young-woman-exercising-home.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="outline-text">الرا</span> <span className="solid-text">حــــة والأناقــــــة </span> <br />
          <span className="outline-text">في</span> <span className="solid-text">كل حركة</span>
        </h1>
        <p className="hero-subtitle">
          كل ما تحتاجه لتحقيق أهدافك <br />
          الرياضية في مكان واحد
        </p>
        <button className="shop-btn">تسوق الآن</button>
      </div>

      <div className="hero-image-container">
        { <img src={heroImage} alt="Sports Gear" className="hero-img" /> }
      </div>

      <div className="hero-indicators">
        <span className="active">01</span>
        <span>02</span>
        <span>03</span>
      </div>
      
      <div className="orange-block"></div>
      <div className="orange-block-top"></div>
    </section>
  );
}
