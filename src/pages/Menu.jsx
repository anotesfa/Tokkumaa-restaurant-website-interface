import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { menuData, categories } from '../data/menuData';
import FoodCard from '../components/food/FoodCard';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filteredFoods, setFilteredFoods] = useState(menuData);

  // Update filtered foods when filters change
  useEffect(() => {
    let foods = [...menuData];

    // Apply category filter
    if (selectedCategory !== 'All') {
      foods = foods.filter(food => food.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      foods = foods.filter(food => 
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    foods.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

    setFilteredFoods(foods);
  }, [selectedCategory, searchQuery, sortBy]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="menu-page-professional">
      {/* Hero Section */}
      <div className="menu-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-hero-content text-center">
                <h1 className="menu-hero-title">Our Authentic Menu</h1>
                <p className="menu-hero-subtitle">
                  Discover the rich flavors of traditional Ethiopian cuisine, crafted with love and authentic spices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Modern Filter Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="menu-filters-container">
              {/* Search and Sort */}
              <div className="filters-top-row">
                <div className="search-container">
                  <div className="search-input-wrapper">
                    <i className="bi bi-search search-icon"></i>
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search dishes..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>

                <div className="sort-container">
                  <select 
                    className="sort-select"
                    value={sortBy}
                    onChange={handleSortChange}
                  >
                    <option value="name">Name A-Z</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>

              {/* Category Filter */}
              <div className="category-filter-section">
                <div className="category-buttons">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Info */}
              <div className="results-info">
                <span className="results-count">
                  {filteredFoods.length} {filteredFoods.length === 1 ? 'dish' : 'dishes'} found
                </span>
                {selectedCategory !== 'All' && (
                  <span className="active-filter">
                    in <strong>{selectedCategory}</strong>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="row">
          <div className="col-12">
            {filteredFoods.length > 0 ? (
              <div className="menu-grid">
                {filteredFoods.map((food) => (
                  <div key={food.id} className="menu-item-wrapper">
                    <FoodCard food={food} />
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="empty-state-container">
                <div className="empty-state-content">
                  <div className="empty-icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <h3 className="empty-title">No dishes found</h3>
                  <p className="empty-description">
                    {searchQuery ? (
                      <>We couldn't find any dishes matching "{searchQuery}". Try a different search term.</>
                    ) : (
                      <>No dishes found in the {selectedCategory} category. Try selecting a different category.</>
                    )}
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Top - only show if many items */}
        {filteredFoods.length > 9 && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button 
                className="btn-back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <i className="bi bi-arrow-up"></i>
                Back to Top
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;