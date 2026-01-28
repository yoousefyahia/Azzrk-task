import React from 'react';
import './products.css';
import SectionHeader from '../components/SectionHeader';
import { FaStar, FaRegHeart, FaShoppingCart, FaRegEye } from 'react-icons/fa';
import bagImg from '../images/bag.png';
import pantalonImg from '../images/pantalon.png';
import shoesImg from '../images/shoes.png';

const products = [
    {
        id: 1,
        title: "حقيبة ظهر",
        price: "500 ر.س",
        category: "حقائب",
        rating: 5,
        image: bagImg,
        hoverImage: shoesImg
    },
    {
        id: 2,
        title: "بنطلون رجالي",
        price: "500 ر.س",
        category: "ملابس",
        rating: 5,
        image: pantalonImg,
        hoverImage: bagImg
    },
    {
        id: 3,
        title: "حذاء رياضي",
        price: "500 ر.س",
        category: "أحذية",
        rating: 5,
        image: shoesImg,
        hoverImage: pantalonImg
    }
];

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
                        <FaRegEye />
                        عرض المنتج
                    </button>
                    <button className="add-to-cart-btn">
                        <FaShoppingCart />
                        اضافة للسلة
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
        </section>
    );
};

export default Products;
