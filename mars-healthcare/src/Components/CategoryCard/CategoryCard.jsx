import React from 'react';
import './CategoryCard.css'
import { Link } from 'react-router-dom';
const CategoryCard = ({ imageSrc, title }) => {

  return (
    <div id='products' className="category-card">
      <figure className="category-image">
        <img src={imageSrc} alt="" />
      </figure>
      <header className="category-heading">
        <h3>{title}</h3>
      </header>
      <div className="enquire-now">
      <Link style={{ 
        textDecoration: 'none', 
        color: 'white' }} 
        to={`/products/${title}`}>
        View {title}s
      </Link></div>
    </div>
  );
};

export default CategoryCard;
