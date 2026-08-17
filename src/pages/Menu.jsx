import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { menuData, categories, getFoodsByCategory, searchFoods } from '../data/menuData';
import FoodCard from '../components/food/FoodCard';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filteredFoods, setFilteredFoods] = useState(menuData);

  // Update filtered foods when filters change
  useEffect(() => {
    let foods = [...menuData];

    // Apply category filter
    if (selectedCategory !== 'all') {
      foods = getFoodsByCategory(selectedCategory);
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
    if (selectedCategory === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="menu-page py-5">
      <div className="container">
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">Our Menu</h1>
            <p className="lead text-muted">
              Discover our delicious selection of carefully crafted dishes
            </p>
          </div>
        </div>

        {/* Filters Row */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="bg-light rounded-3 p-4">
              {/* Search Bar */}
              <div className="row g-3 align-items-center">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search menu items..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>

                {/* Sort Dropdown */}
                <div className="col-md-3">
                  <select 
                    className="form-select"
                    value={sortBy}
                    onChange={handleSortChange}
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>

                {/* Results Count */}
                <div className="col-md-5 text-md-end">
                  <span className="text-muted">
                    Showing {filteredFoods.length} of {menuData.length} items
                    {selectedCategory !== 'all' && (
                      <span className="ms-2 badge bg-primary">
                        {categories.find(cat => cat.id === selectedCategory)?.name}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                  <span className="badge bg-light text-dark ms-2">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="row">
          <div className="col-12">
            {filteredFoods.length > 0 ? (
              <div className="row g-4">
                {filteredFoods.map((food) => (
                  <div key={food.id} className="col-lg-4 col-md-6">
                    <FoodCard food={food} />
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="empty-state">
                <i className="bi bi-search display-1 text-muted"></i>
                <h3>No items found</h3>
                <p>
                  {searchQuery ? (
                    <>No menu items match "{searchQuery}". Try a different search term.</>
                  ) : (
                    <>No items found in this category. Try selecting a different category.</>
                  )}
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Back to Top */}
        {filteredFoods.length > 12 && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button 
                className="btn btn-outline-primary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <i className="bi bi-arrow-up me-2"></i>
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