import React, { useEffect, useState } from 'react';
import products from '../ProductData/ProductData';
import './CategoryProducts.css';
import { useParams } from 'react-router-dom';

function CategoryProducts() {
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6); // Number of products per page
    const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    // Calculate indexes of products to display on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.filter(product => product.category === category).slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to handle product click and show modal
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    

    return (
        <section className='product-category-section'>
            <h2>{category}</h2>
            <div className="product-container">
                {currentProducts.map(product => (
                    <div className='product' key={product.id} >
                        <img style={{width: '150px', height: '150px'}} src={`../Assets/ProductImages/${product.image}`} alt="" />
                        <div className='specs-container'>
                            <h3>{product.name.toUpperCase()}</h3>
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div className='specs-list' key={key}><strong>{key}: </strong>{value}</div>
                            ))}
                        </div>

                        <div className="buttons">
                        <a href="https://m.indiamart.com/ms-mars-health-care/">
                        <button className="learn-more">Learn More</button>

                        </a>
                            <button onClick={() => handleProductClick(product)} className="submit-query">Enquire</button>
                        </div>
                    </div>

                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: Math.ceil(products.filter(product => product.category === category).length / productsPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                        {index + 1}
                    </button>
                ))}
            </div>
            {showModal && (
                <Modal
                    product={selectedProduct}
                    onClose={() => setShowModal(false)}
                />
            )}
        </section>
    );
}

// Modal component
const Modal = ({ product, onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('productName', product.name); // Append product name to the form data
        fetch('/email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Handle response
            console.log(response);
            // Close modal after form submission
            onClose();
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close" onClick={onClose}>&times;</button>

                <h2>Request Price for {product.name}</h2>
                <form onSubmit={handleSubmit}> {/* Attach onSubmit event listener */}
                    <input type="hidden" name="productName" value={product.name} /> <br />
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" id="name" name="name" required /> <br /><br />
                    <label htmlFor="email">Email:</label> <br />
                    <input type="email" id="email" name="email" required /> <br /><br />
                    <label htmlFor="phone">Phone:</label> <br />
                    <input type="tel" id="phone" name="phone" required /> <br /><br />
                    <button type="submit">Submit</button> <br />
                </form>
            </div>
        </div>
    );
};

export default CategoryProducts;
