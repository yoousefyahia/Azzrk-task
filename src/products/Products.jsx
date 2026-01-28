import React from 'react';
import './products.css';
import SectionHeader from '../components/SectionHeader';
import { FaStar, FaRegHeart, FaShoppingCart, FaRegEye } from 'react-icons/fa';
import bagImg from '../images/bag.png';
import pantalonImg from '../images/pantalon.png';
import shoesImg from '../images/shoes.png';
import heroImg1 from '../images/Frame 35.png';
import heroImg2 from '../images/Frame 37.png';
import heroImg3 from '../images/Frame 40.png';
import bag2 from '../images/bag2.png';
import pantalon2 from '../images/pantalon2.png';
import shoes2 from '../images/shoes2.png';
const products = [
    {
        id: 1,
        title: "حقيبة ظهر",
        price: "500 ر.س",
        category: "حقائب",
        rating: 5,
        image: bagImg,
        hoverImage: bag2
    },
    {
        id: 2,
        title: "بنطلون رجالي",
        price: "500 ر.س",
        category: "ملابس",
        rating: 5,
        image: pantalonImg,
        hoverImage:pantalon2
    },
    {
        id: 3,
        title: "حذاء رياضي",
        price: "500 ر.س",
        category: "أحذية",
        rating: 5,
        image: shoesImg,
        hoverImage: shoes2
    }
];

const heroCards = [
    {
        id: 1,
        title: "",
        description: "",
        buttonText: "",
        bgColor: "transparent",
        image: heroImg2,
        position: "left-top",
        productInfo: {
            category: "ادوات رياضية",
            title: "وزن 6 كجم",
            price: " 500 ر.س ",
            oldPrice: "200 ر.س",
            image: heroImg2
        }
    },
    {
        id: 2,
        title: "استعد للتحدي",
        description: "ارتق بأدائك مع ملابس مصممة خصيصاً للرياضيين",
        buttonText: "تسوق الآن",
        bgColor: "#FF4D00",
        image: null,
        position: "left-bottom"
    },
    {
        id: 3,
        title: "",
        description: "",
        buttonText: "",
        bgColor: "transparent",
        image: heroImg1,
        position: "center",
        productInfo: {
            category: "احذيه ",
            title: "حذاء رياضي",
            price: "500 ر.س",
            oldPrice: "200 ر.س",
            image: heroImg1
        }
    },
    {
        id: 4,
        title: "استعد للتميز",
        description: "ارتق بأدائك مع ملابس مصممة خصيصاً للرياضيين",
        buttonText: "تسوق الآن",
        bgColor: "#1B3B6F",
        image: null,
        position: "right-top"
    },
    {
        id: 5,
        title: "",
        description: "",
        buttonText: "",
        bgColor: "transparent",
        image: heroImg3,
        position: "right-bottom",
        productInfo: {
            category: "ملابس نسائية",
            title: "ليجن ازرق",
            price: "500 ر.س",
            oldPrice: "200 ر.س",
            image: heroImg3
        }
    }
];

const HeroCard = ({ card }) => {
    return (
        <div className="hero-card" style={{ backgroundColor: card.bgColor }}>
            {card.title && (
                <div className="hero-card-content">
                    <h2 className="hero-card-title">{card.title}</h2>
                    <p className="hero-card-description">{card.description}</p>
                    <button className="hero-card-btn">{card.buttonText}</button>
                </div>
            )}
            {card.image && (
                <div className="hero-card-image">
                    <img src={card.image} alt={card.title} />
                    {card.productInfo && (
                        <div className="product-hover-info">
                            <div className="hover-text">
                                <span className="hover-category">{card.productInfo.category}</span>
                                <h4 className="hover-title">{card.productInfo.title}</h4>
                                <div className="hover-price-row">
                                     <span className="hover-old-price">بدلاً من {card.productInfo.oldPrice}</span>
                                    <span className="hover-price">{card.productInfo.price}</span>
                                </div>
                                <div className="hover-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                            </div>
                            <div className="hover-img-box">
                                <img src={card.productInfo.image} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="card-image">
                <img src={product.image} alt={product.title} className="default-img" />
                <img src={product.hoverImage} alt={product.title} className="hover-img" />
                
                <button className="fav-btn">
                    <FaRegHeart  />
                </button>

                <div className="action-buttons">
                    <button className="view-product-btn">
                        عرض المنتج
                        <FaRegEye />
                    </button>
                    <button className="add-to-cart-btn">
                        اضافة للسلة
                        <FaShoppingCart />
                    </button>
                </div>
            </div>
            <div className="card-info">
                <div className="info-row top-row">
                    <span className="price">{product.price}</span>
                    <h3 className="title">{product.title}</h3>
                </div>
                <div className="info-row bottom-row">
                    <div className="rating">
                        {[...Array(product.rating)].map((_, i) => (
                            <FaStar key={i} className="star-icon" />
                        ))}
                    </div>
                    <span className="category">{product.category}</span>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    return (
        <section className="products-section">
            <SectionHeader 
                title="ابرز المنتجات" 
                subtitle="تسوق ابرز المنتجات التي تناسبك" 
            />

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="hero-cards-grid">
                {heroCards.map(card => (
                    <HeroCard key={card.id} card={card} />
                ))}
            </div>
        </section>
    );
};

export default Products;
