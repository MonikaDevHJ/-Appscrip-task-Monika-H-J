"use client";

import { useState } from "react";

interface FilterProps {
    showFilters: boolean; // Corrected type to lowercase boolean
}

export default function Filters({ showFilters }: FilterProps) {
    const [filterDropdowns, setFilterDropdowns] = useState<{ [key: string]: boolean }>({});

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

    if (!showFilters) return null; // Simplified conditional rendering

    return (
        <aside className="filters show">
            {Object.entries(filters).map(([category, options]) => (
                <div key={category} className="filter-group">
                    <h3
                        onClick={() => toggleFilterDropdown(category)}
                        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                    >
                        {category.toUpperCase()}
                        <span className="dropdown-icon">
                            {filterDropdowns[category] ? "▲" : "▼"}
                        </span>
                    </h3>
                    {filterDropdowns[category] && (
                        <div className="filter-options">
                            {options.map((option) => (
                                <label key={option} className="filter-option">
                                    <input type="checkbox" name={category} value={option} />
                                    {option}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
}
