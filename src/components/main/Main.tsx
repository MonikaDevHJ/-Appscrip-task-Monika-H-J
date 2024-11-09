import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Mainstyle.css";
import Filters from "../filters/filters";

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    outOfStock: boolean;
}
const Main = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState("recommended");


    const [filterDropdowns, setFilterDropdowns] = useState<{ [key: string]: boolean }>({});


    const products = [
        {
            id: 1,
            name: "PPPXG HLKYWAY DRESS M",
            image: "/BagBackside_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Dool_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: true
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Belt_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Cap_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/BagFlat_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/BagBackside_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Pursebluenwhite_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/PurseBlacknwhite_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Vanitybag_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Belt_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Dool_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: true
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Cap_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 1,
            name: "PPPXG HLKYWAY DRESS M",
            image: "/BagBackside_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 1,
            name: "PPPXG HLKYWAY DRESS M",
            image: "/BagBackside_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
        },
        {
            id: 2,
            name: "PRODUCT NAME",
            image: "/Vanitybag_img.svg",
            description: "Sign in or Create an account to see pricing",
            outOfStock: false
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

    const toggleFilterDropdown = (category: string) => {
        setFilterDropdowns((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };


    const handleFilterToggle = () => {
        setShowFilters(!showFilters);
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

                <div className="products-header">
                    <div className="header-left">
                        <span>{products.length} ITEMS</span>
                        <span className="hide-filter" onClick={handleFilterToggle}>
                            {showFilters ? "< Hide Filter" : "> Show Filter"}
                        </span>
                    </div>

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

                <div className="content">
                    <Filters showFilters={showFilters} setShowFilters={setShowFilters}/>

                    <div className={`products-section ${showFilters ? "with-filters" : "full-width"}`}>
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
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                        <div className="product-details">
                                            <p>{product.description}</p>
                                            <Image
                                                src="/heartsybmbol.svg"
                                                alt="Favorites"
                                                className="heart-icon"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;
