import React from 'react'
import './Featured.css'
import CategoryCard from '../CategoryCard/CategoryCard'
function Featured() {
    return (
        <section className='featured-section'>
            <div className="featured-heading">
                <h2>Featured Products</h2>
            </div>
            <div className="featured-container">
                <CategoryCard imageSrc='../Assets/ProductImages/CT-Scan/ct-1.webp' title="CT-Scan Machine" />
                <CategoryCard imageSrc='../Assets/ProductImages/Diagnostic/1.webp' title="Diagnostic Machine" />
                <CategoryCard imageSrc='../Assets/ProductImages/OxygenConc/o2-1.webp' title="Oxygen Concentrator" />
                <CategoryCard imageSrc='../Assets/ProductImages/Ultrasound/affiniti-30-ds-250x250 (1).webp' title="Ultrasound Machine" />
                <CategoryCard imageSrc='../Assets/ProductImages/X-Ray/mobilediagnost-wdr-250x250.webp' title="X-Ray" />
            </div>
        </section>
    )
}

export default Featured