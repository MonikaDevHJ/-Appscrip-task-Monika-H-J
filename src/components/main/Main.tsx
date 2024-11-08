import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import "./Mainstyle.css"

const Main = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState("recommended");


    const products = [
        {
          id: 1,
          name: "PPPXG HLKYWAY DRESS M",
          image: "/placeholder.svg?height=300&width=300",
          description: "Sign in or Create an account to see pricing",
          outOfStock: false
        },
        {
          id: 2,
          name: "PRODUCT NAME",
          image: "/placeholder.svg?height=300&width=300",
          description: "Sign in or Create an account to see pricing",
          outOfStock: true
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/placeholder.svg?height=300&width=300",
            description: "Sign in or Create an account to see pricing",
            outOfStock: true
          },
          {
            id: 2,
            name: "PRODUCT NAME",
            image: "/placeholder.svg?height=300&width=300",
            description: "Sign in or Create an account to see pricing",
            outOfStock: true
          },
          {
            id: 2,
            name: "PRODUCT NAME",
            image: "/placeholder.svg?height=300&width=300",
            description: "Sign in or Create an account to see pricing",
            outOfStock: true
          }
        
        // Add more products as needed
      ];
    
      const filters = {
        size: ["All", "S", "M", "L", "XL"],
        customizable: ["Yes", "No"],
        idealFor: ["All", "Men", "Women", "Kids"],
        occasion: ["All", "Casual", "Formal", "Sports"],
        work: ["All", "Office", "Outdoor", "Home"],
        fabric: ["All", "Cotton", "Polyester", "Wool"],
        segment: ["All", "Budget", "Premium", "Luxury"],
        suitableFor: ["All", "Daily Use", "Special Occasions"],
        rawMaterials: ["All", "Natural", "Synthetic"],
        pattern: ["All", "Solid", "Printed", "Striped"]
      };

    return (
        <div>

            <main className="main">


                <div className="border">
                    <h1>DISCOVER OUR PRODUCTS</h1>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet consectetur. Amet est placerat rhoncus
                        scelerisque. Dolor integer scelerisque nish amet mi ut elementum
                        dolor.
                    </p>
                </div>

                <div className="content">
                   
                    <button
                        className="filter-toggle"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
                    </button>

                 
                    <aside className={`filters ${showFilters ? "show" : ""}`}>
                        {Object.entries(filters).map(([category, options]) => (
                            <div key={category} className="filter-group">
                                <h3>{category.toUpperCase()}</h3>
                                {options.map((option) => (
                                    <label key={option} className="filter-option">
                                        <input type="checkbox" name={category} value={option} />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        ))}
                    </aside>

                  
                  
                    <div className="products-section">
                      
                      
                        <div className="products-header">
                            <span>{products.length} ITEMS</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="sort-select"
                            >
                                <option value="recommended">RECOMMENDED</option>
                                <option value="newest">NEWEST</option>
                                <option value="price-low">PRICE LOW TO HIGH</option>
                                <option value="price-high">PRICE HIGH TO LOW</option>
                            </select>
                        </div>

                       
                       {/* Images Started */}
                        <div className="products-grid">
                            {products.map((product) => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={300}
                                            height={300}
                                        />
                                        {product.outOfStock && (
                                            <div className="out-of-stock">OUT OF STOCK</div>
                                        )}
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <button className="favorite-button">♡</button>
                                </div>
                            ))}
                        </div>
                        {/* Images Ended */}
                   
                   
                   
                   
                    </div>
                </div>


            </main>
        </div>
    )
}

export default Main
