// Tokkumaa Restaurant Menu Data - Authentic Ethiopian Cuisine

export const menuData = [
  // === TRADITIONAL MAIN DISHES ===
  {
    id: 1,
    name: "Doro Wat",
    category: "Traditional Mains",
    description: "Ethiopia's national dish - spicy chicken stew with hard-boiled eggs",
    longDescription: "Our signature Doro Wat features tender chicken simmered in berbere spice blend with onions, garlic, ginger, and hard-boiled eggs. Served with injera bread for an authentic Ethiopian dining experience.",
    price: 18.99,
    image: "/src/assets/menu-images/doro-wat-1.jpg",
    rating: 4.9,
    reviews: 456,
    ingredients: ["Chicken", "Hard-boiled eggs", "Berbere spice", "Onions", "Garlic", "Ginger", "Injera"],
    extras: [
      { name: "Extra egg", price: 1.50 },
      { name: "Extra injera", price: 2.00 },
      { name: "Ayib (Ethiopian cheese)", price: 2.50 }
    ],
    popular: true,
    featured: true,
    prepTime: "25-30 min"
  },
  {
    id: 2,
    name: "Kitfo",
    category: "Traditional Mains",
    description: "Ethiopian steak tartare seasoned with mitmita and clarified butter",
    longDescription: "Prime beef served raw and minced, seasoned with mitmita spice and clarified butter (niter kibbeh). Served with ayib cheese and gomen (collard greens).",
    price: 22.99,
    image: "/src/assets/menu-images/kitfo-2.jpg",
    rating: 4.8,
    reviews: 234,
    ingredients: ["Prime beef", "Mitmita spice", "Niter kibbeh", "Ayib cheese", "Gomen", "Injera"],
    extras: [
      { name: "Extra ayib", price: 2.00 },
      { name: "Lightly cooked", price: 0.00 },
      { name: "Extra gomen", price: 1.50 }
    ],
    popular: true,
    featured: false,
    prepTime: "15-18 min"
  },
  {
    id: 3,
    name: "Siga Wat",
    category: "Traditional Mains",
    description: "Spicy beef stew with berbere and Ethiopian spices",
    longDescription: "Tender beef chunks slow-cooked in a rich berbere sauce with onions, garlic, and traditional Ethiopian spices. A hearty and flavorful dish served with injera.",
    price: 19.99,
    image: "/src/assets/menu-images/siga-wat-3.jpg",
    rating: 4.7,
    reviews: 312,
    ingredients: ["Beef chunks", "Berbere sauce", "Onions", "Garlic", "Ethiopian spices", "Injera"],
    extras: [
      { name: "Extra berbere sauce", price: 1.00 },
      { name: "Extra injera", price: 2.00 },
      { name: "Vegetables", price: 2.50 }
    ],
    popular: false,
    featured: false,
    prepTime: "30-35 min"
  },
  {
    id: 4,
    name: "Tibs",
    category: "Traditional Mains",
    description: "Sautéed beef or lamb with onions, tomatoes, and jalapeños",
    longDescription: "Succulent pieces of beef or lamb sautéed with onions, tomatoes, jalapeños, and aromatic spices. Served sizzling hot with injera or rice.",
    price: 17.99,
    image: "/src/assets/menu-images/tibs-4.jpg",
    rating: 4.6,
    reviews: 189,
    ingredients: ["Beef/Lamb", "Onions", "Tomatoes", "Jalapeños", "Rosemary", "Injera"],
    extras: [
      { name: "Lamb instead of beef", price: 3.00 },
      { name: "Extra vegetables", price: 2.00 },
      { name: "Rice instead of injera", price: 0.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "20-25 min"
  },
  {
    id: 5,
    name: "Yebeg Wat",
    category: "Traditional Mains",
    description: "Spicy lamb stew with berbere and traditional seasonings",
    longDescription: "Tender lamb slow-cooked in berbere sauce with onions, garlic, ginger, and sacred basil. A rich and aromatic stew that represents the essence of Ethiopian cuisine.",
    price: 21.99,
    image: "/src/assets/menu-images/yebeg-wat-5.jpg",
    rating: 4.8,
    reviews: 167,
    ingredients: ["Lamb", "Berbere sauce", "Sacred basil", "Ginger", "Garlic", "Injera"],
    extras: [
      { name: "Extra sauce", price: 1.50 },
      { name: "Extra injera", price: 2.00 },
      { name: "Side salad", price: 3.00 }
    ],
    popular: false,
    featured: true,
    prepTime: "35-40 min"
  },

  // === VEGETARIAN DISHES ===
  {
    id: 6,
    name: "Vegetarian Combo",
    category: "Vegetarian",
    description: "Assorted vegetarian dishes served on injera",
    longDescription: "A variety of vegetarian dishes including shiro, gomen, misir wat, atakilt wat, and cabbage served together on a large injera. Perfect for sharing or for vegetarian food lovers.",
    price: 16.99,
    image: "/src/assets/menu-images/veg-combo-6.jpg",
    rating: 4.7,
    reviews: 298,
    ingredients: ["Shiro", "Gomen", "Misir wat", "Atakilt wat", "Cabbage", "Injera"],
    extras: [
      { name: "Extra shiro", price: 2.00 },
      { name: "Extra gomen", price: 1.50 },
      { name: "Extra injera", price: 2.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "20-25 min"
  },
  {
    id: 7,
    name: "Shiro Wat",
    category: "Vegetarian",
    description: "Ground chickpea stew with berbere and spices",
    longDescription: "Creamy and flavorful stew made from ground chickpeas (shiro powder) cooked with berbere, onions, garlic, and traditional spices. A beloved Ethiopian comfort food.",
    price: 12.99,
    image: "/src/assets/menu-images/shiro-7.jpg",
    rating: 4.5,
    reviews: 234,
    ingredients: ["Shiro powder", "Berbere", "Onions", "Garlic", "Spices", "Injera"],
    extras: [
      { name: "Extra thick consistency", price: 0.00 },
      { name: "Extra injera", price: 2.00 },
      { name: "Side vegetables", price: 2.50 }
    ],
    popular: true,
    featured: false,
    prepTime: "18-22 min"
  },
  {
    id: 8,
    name: "Gomen",
    category: "Vegetarian",
    description: "Collard greens sautéed with garlic and ginger",
    longDescription: "Fresh collard greens sautéed with garlic, ginger, onions, and mild spices. A healthy and delicious vegetarian dish that pairs perfectly with any Ethiopian meal.",
    price: 10.99,
    image: "/src/assets/menu-images/gomen-8.jpg",
    rating: 4.4,
    reviews: 156,
    ingredients: ["Collard greens", "Garlic", "Ginger", "Onions", "Spices"],
    extras: [
      { name: "Extra portion", price: 2.00 },
      { name: "With injera", price: 2.00 },
      { name: "Spicy version", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "15-18 min"
  },
  {
    id: 9,
    name: "Misir Wat",
    category: "Vegetarian",
    description: "Spicy red lentil stew with berbere",
    longDescription: "Red lentils cooked in a spicy berbere sauce with onions, garlic, and ginger. A protein-rich and flavorful vegetarian dish that's perfect for any meal.",
    price: 11.99,
    image: "/src/assets/menu-images/misir-wat-9.jpg",
    rating: 4.6,
    reviews: 189,
    ingredients: ["Red lentils", "Berbere", "Onions", "Garlic", "Ginger", "Injera"],
    extras: [
      { name: "Extra spicy", price: 0.00 },
      { name: "Mild version", price: 0.00 },
      { name: "Extra injera", price: 2.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "25-30 min"
  },

  // === COMBINATION PLATTERS ===
  {
    id: 10,
    name: "Tokkumaa Special Combo",
    category: "Combo Platters",
    description: "A variety of meat and vegetarian dishes served together",
    longDescription: "Our signature combination featuring doro wat, siga wat, tibs, shiro, gomen, and misir wat served on a large injera. Perfect for sharing and experiencing the full range of Ethiopian flavors.",
    price: 32.99,
    image: "/src/assets/menu-images/special-combo-10.jpg",
    rating: 4.9,
    reviews: 345,
    ingredients: ["Doro wat", "Siga wat", "Tibs", "Shiro", "Gomen", "Misir wat", "Injera"],
    extras: [
      { name: "Extra injera", price: 2.00 },
      { name: "Add kitfo", price: 5.00 },
      { name: "Extra meat portion", price: 4.00 }
    ],
    popular: true,
    featured: true,
    prepTime: "35-40 min"
  },
  {
    id: 11,
    name: "Meat Lovers Combo",
    category: "Combo Platters",
    description: "Combination of our finest meat dishes",
    longDescription: "A hearty combination featuring doro wat, kitfo, siga wat, yebeg wat, and tibs served with injera. Perfect for meat lovers who want to try our traditional dishes.",
    price: 28.99,
    image: "/src/assets/menu-images/meat-combo-11.jpg",
    rating: 4.8,
    reviews: 234,
    ingredients: ["Doro wat", "Kitfo", "Siga wat", "Yebeg wat", "Tibs", "Injera"],
    extras: [
      { name: "Extra meat", price: 4.00 },
      { name: "Extra injera", price: 2.00 },
      { name: "Add vegetable side", price: 3.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "30-35 min"
  },

  // === DRINKS ===
  {
    id: 12,
    name: "Ethiopian Coffee",
    category: "Beverages",
    description: "Traditional Ethiopian coffee ceremony experience",
    longDescription: "Authentic Ethiopian coffee prepared in the traditional way with freshly roasted beans. Served with popcorn in the traditional Ethiopian coffee ceremony style.",
    price: 4.99,
    image: "/src/assets/menu-images/ethiopian-coffee-12.jpg",
    rating: 4.9,
    reviews: 456,
    ingredients: ["Ethiopian coffee beans", "Traditional roasting", "Popcorn"],
    extras: [
      { name: "Extra strong", price: 0.00 },
      { name: "With sugar", price: 0.00 },
      { name: "Extra popcorn", price: 1.00 }
    ],
    popular: true,
    featured: true,
    prepTime: "15-20 min"
  },
  {
    id: 13,
    name: "Tej (Honey Wine)",
    category: "Beverages",
    description: "Traditional Ethiopian honey wine",
    longDescription: "Traditional fermented honey wine served in a traditional glass. A sweet and slightly alcoholic beverage that pairs perfectly with Ethiopian cuisine.",
    price: 8.99,
    image: "/src/assets/menu-images/tej-13.jpg",
    rating: 4.6,
    reviews: 167,
    ingredients: ["Ethiopian honey", "Traditional fermentation"],
    extras: [
      { name: "Large portion", price: 2.00 },
      { name: "Extra sweet", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "5 min"
  },
  {
    id: 14,
    name: "Fresh Mango Juice",
    category: "Beverages",
    description: "Freshly squeezed Ethiopian mango juice",
    longDescription: "Sweet and refreshing juice made from fresh Ethiopian mangoes. Naturally sweet and perfect for balancing the spicy flavors of Ethiopian cuisine.",
    price: 3.99,
    image: "/src/assets/menu-images/mango-juice-14.jpg",
    rating: 4.5,
    reviews: 123,
    ingredients: ["Fresh mangoes", "Natural sweetness"],
    extras: [
      { name: "Large size", price: 1.50 },
      { name: "With ice", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "5-8 min"
  },
  {
    id: 15,
    name: "Spris (Ethiopian Soda)",
    category: "Beverages",
    description: "Traditional Ethiopian orange soda",
    longDescription: "Refreshing Ethiopian orange-flavored soda that's perfect for cooling down after spicy Ethiopian dishes. A local favorite that complements any meal.",
    price: 2.99,
    image: "/src/assets/menu-images/spris-15.jpg",
    rating: 4.3,
    reviews: 98,
    ingredients: ["Orange flavoring", "Carbonated water", "Sugar"],
    extras: [
      { name: "Extra cold", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "2 min"
  },

  // === DESSERTS ===
  {
    id: 16,
    name: "Honey Bread (Yemarina Yewotet Dabo)",
    category: "Desserts",
    description: "Traditional Ethiopian honey bread",
    longDescription: "Sweet and aromatic bread made with honey, spices, and traditional Ethiopian ingredients. A perfect way to end your Ethiopian dining experience.",
    price: 6.99,
    image: "/src/assets/menu-images/honey-bread-16.jpg",
    rating: 4.7,
    reviews: 134,
    ingredients: ["Honey", "Ethiopian spices", "Flour", "Traditional ingredients"],
    extras: [
      { name: "Extra honey drizzle", price: 1.00 },
      { name: "Warm serving", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "10-12 min"
  },
  {
    id: 17,
    name: "Ethiopian Fruit Salad",
    category: "Desserts",
    description: "Fresh seasonal Ethiopian fruits with honey",
    longDescription: "A refreshing mix of fresh seasonal Ethiopian fruits including papaya, banana, and avocado, drizzled with local honey and lime juice.",
    price: 5.99,
    image: "/src/assets/menu-images/fruit-salad-17.jpg",
    rating: 4.4,
    reviews: 89,
    ingredients: ["Papaya", "Banana", "Avocado", "Honey", "Lime juice"],
    extras: [
      { name: "Extra fruits", price: 2.00 },
      { name: "Extra honey", price: 0.50 }
    ],
    popular: false,
    featured: false,
    prepTime: "8-10 min"
  },

  // === SIDES ===
  {
    id: 18,
    name: "Injera (Extra)",
    category: "Sides",
    description: "Traditional Ethiopian flatbread",
    longDescription: "Additional portion of our traditional sourdough flatbread made from teff flour. Perfect for scooping up stews and sauces in the authentic Ethiopian way.",
    price: 3.99,
    image: "/src/assets/menu-images/injera-18.jpg",
    rating: 4.8,
    reviews: 234,
    ingredients: ["Teff flour", "Traditional fermentation"],
    extras: [
      { name: "Large portion", price: 1.00 },
      { name: "Extra fresh", price: 0.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "5 min"
  },
  {
    id: 19,
    name: "Ayib (Ethiopian Cheese)",
    category: "Sides",
    description: "Fresh Ethiopian cottage cheese",
    longDescription: "Traditional fresh Ethiopian cheese, mild and creamy. Perfect as a cooling accompaniment to spicy dishes, especially kitfo.",
    price: 4.99,
    image: "/src/assets/menu-images/ayib-19.jpg",
    rating: 4.5,
    reviews: 156,
    ingredients: ["Fresh milk", "Traditional preparation"],
    extras: [
      { name: "Large portion", price: 2.00 },
      { name: "With herbs", price: 1.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "3 min"
  },
  {
    id: 20,
    name: "Atakilt Wat",
    category: "Sides",
    description: "Mixed vegetable curry with cabbage, carrots, and potatoes",
    longDescription: "A flavorful mix of cabbage, carrots, and potatoes cooked with turmeric, ginger, and mild spices. A healthy and colorful addition to any meal.",
    price: 8.99,
    image: "/src/assets/menu-images/atakilt-wat-20.jpg",
    rating: 4.4,
    reviews: 123,
    ingredients: ["Cabbage", "Carrots", "Potatoes", "Turmeric", "Ginger", "Spices"],
    extras: [
      { name: "Extra vegetables", price: 2.00 },
      { name: "Spicy version", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "15-18 min"
  }
];

// Category filters for easy navigation
export const categories = [
  "All",
  "Traditional Mains", 
  "Vegetarian",
  "Combo Platters",
  "Beverages",
  "Desserts",
  "Sides"
];

// Popular items (featured on home page)
export const popularItems = menuData.filter(item => item.popular);

// Featured items (chef's recommendations)
export const featuredItems = menuData.filter(item => item.featured);

// Utility functions
export const getFoodsByCategory = (category) => {
  if (category === "All") return menuData;
  return menuData.filter(item => item.category === category);
};

export const getFoodById = (id) => {
  return menuData.find(item => item.id === parseInt(id));
};

export const searchFoods = (query) => {
  const searchTerm = query.toLowerCase();
  return menuData.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm) ||
    item.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchTerm)
    )
  );
};