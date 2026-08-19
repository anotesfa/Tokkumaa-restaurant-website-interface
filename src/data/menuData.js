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
    image: "/menu-images/traditional-doro-wat-1.jpg",
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
    image: "/menu-images/traditional-kitfo-2.jpg",
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
    image: "/menu-images/traditional-siga-wat-3.jpg",
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
    image: "/menu-images/traditional-tibs-4.jpg",
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
    image: "/menu-images/traditional-yebeg-wat-5.jpg",
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
    image: "/menu-images/vegetarian-vegetarian-combo-6.jpg",
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
    image: "/menu-images/vegetarian-shiro-wat-7.jpg",
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
    image: "/menu-images/vegetarian-gomen-8.jpg",
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
    image: "/menu-images/vegetarian-fasolia-29.jpg",
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
    image: "/menu-images/combo-tokkumaa-special-combo-10.jpg",
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
    image: "/menu-images/combo-meat-lovers-combo-11.jpg",
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
    image: "/menu-images/beverage-ethiopian-coffee-12.jpg",
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
    image: "/menu-images/beverage-tej-13.jpg",
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
    image: "/menu-images/beverage-fresh-mango-juice-14.jpg",
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
    image: "/menu-images/beverage-spris-15.jpg",
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
    image: "/menu-images/dessert-ethiopian-fruit-salad-17.jpg",
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
    image: "/menu-images/dessert-ethiopian-fruit-salad-17.jpg",
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
    image: "/menu-images/side-ayib-19.jpg",
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
    image: "/menu-images/side-ayib-19.jpg",
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
    image: "/menu-images/side-atakilt-wat-20.jpg",
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
  },

  // === ADDITIONAL TRADITIONAL MAINS ===
  {
    id: 21,
    name: "Zilzil Tibs",
    category: "Traditional Mains",
    description: "Strips of beef sautéed with onions, tomatoes, and jalapeños",
    longDescription: "Tender strips of beef sautéed with onions, tomatoes, jalapeños, and aromatic Ethiopian spices. Served sizzling hot with injera bread.",
    price: 19.99,
    image: "/menu-images/traditional-awaze-tibs-24.jpg",
    rating: 4.7,
    reviews: 178,
    ingredients: ["Beef strips", "Onions", "Tomatoes", "Jalapeños", "Ethiopian spices", "Injera"],
    extras: [
      { name: "Extra meat", price: 3.00 },
      { name: "Extra vegetables", price: 2.00 },
      { name: "Mild spice level", price: 0.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "22-25 min"
  },
  {
    id: 22,
    name: "Derek Tibs",
    category: "Traditional Mains",
    description: "Dry sautéed beef cubes with onions and spices",
    longDescription: "Cubed beef sautéed until crispy with onions, rosemary, and traditional Ethiopian spices. A dry preparation that's full of flavor.",
    price: 18.99,
    image: "/menu-images/traditional-derek-tibs-22.jpg",
    rating: 4.6,
    reviews: 145,
    ingredients: ["Beef cubes", "Onions", "Rosemary", "Ethiopian spices"],
    extras: [
      { name: "Extra crispy", price: 0.00 },
      { name: "With injera", price: 2.00 },
      { name: "Extra spices", price: 1.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "25-30 min"
  },
  {
    id: 23,
    name: "Bozena Shiro",
    category: "Traditional Mains",
    description: "Chickpea stew with tender pieces of beef",
    longDescription: "Rich chickpea stew enhanced with tender pieces of beef, cooked in berbere sauce with traditional Ethiopian spices.",
    price: 17.99,
    image: "/menu-images/traditional-bozena-shiro-23.jpg",
    rating: 4.8,
    reviews: 201,
    ingredients: ["Chickpea flour", "Beef pieces", "Berbere", "Ethiopian spices", "Injera"],
    extras: [
      { name: "Extra beef", price: 3.00 },
      { name: "Extra thick", price: 0.00 },
      { name: "Extra injera", price: 2.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "28-32 min"
  },
  {
    id: 24,
    name: "Awaze Tibs",
    category: "Traditional Mains",
    description: "Beef sautéed in spicy awaze sauce",
    longDescription: "Tender beef cubes sautéed in awaze sauce (berbere mixed with tej honey wine), creating a rich and spicy flavor profile unique to Ethiopian cuisine.",
    price: 20.99,
    image: "/menu-images/traditional-awaze-tibs-24.jpg",
    rating: 4.7,
    reviews: 167,
    ingredients: ["Beef cubes", "Awaze sauce", "Tej honey wine", "Onions", "Spices"],
    extras: [
      { name: "Extra awaze sauce", price: 1.50 },
      { name: "Mild version", price: 0.00 },
      { name: "Extra onions", price: 1.00 }
    ],
    popular: false,
    featured: true,
    prepTime: "24-28 min"
  },
  {
    id: 25,
    name: "Dulet",
    category: "Traditional Mains",
    description: "Traditional Ethiopian organ meat dish",
    longDescription: "A traditional dish made from beef liver, kidneys, and other organs, finely chopped and sautéed with onions, jalapeños, and traditional spices.",
    price: 16.99,
    image: "/menu-images/traditional-dulet-25.jpg",
    rating: 4.3,
    reviews: 89,
    ingredients: ["Beef organs", "Onions", "Jalapeños", "Traditional spices"],
    extras: [
      { name: "Mild spice", price: 0.00 },
      { name: "With injera", price: 2.00 },
      { name: "Extra vegetables", price: 2.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "20-25 min"
  },
  {
    id: 26,
    name: "Fish Gulash",
    category: "Traditional Mains",
    description: "Ethiopian-style fish stew with vegetables",
    longDescription: "Fresh fish cooked in a rich berbere sauce with onions, tomatoes, and vegetables. A unique Ethiopian take on fish preparation.",
    price: 19.99,
    image: "/menu-images/traditional-fish-gulash-26.jpg",
    rating: 4.5,
    reviews: 134,
    ingredients: ["Fresh fish", "Berbere sauce", "Onions", "Tomatoes", "Vegetables"],
    extras: [
      { name: "Extra fish", price: 4.00 },
      { name: "Extra vegetables", price: 2.00 },
      { name: "Mild sauce", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "26-30 min"
  },

  // === ADDITIONAL VEGETARIAN DISHES ===
  {
    id: 27,
    name: "Yekik Alicha",
    category: "Vegetarian",
    description: "Mild yellow split pea stew",
    longDescription: "Yellow split peas cooked in a mild turmeric-based sauce with onions, garlic, and ginger. A comforting and protein-rich vegetarian dish.",
    price: 12.99,
    image: "/menu-images/vegetarian-dinich-wat-30.jpg",
    rating: 4.4,
    reviews: 156,
    ingredients: ["Yellow split peas", "Turmeric", "Onions", "Garlic", "Ginger"],
    extras: [
      { name: "Extra portion", price: 2.00 },
      { name: "With injera", price: 2.00 },
      { name: "Extra spices", price: 0.50 }
    ],
    popular: false,
    featured: false,
    prepTime: "22-25 min"
  },
  {
    id: 28,
    name: "Kik Alicha",
    category: "Vegetarian",
    description: "Mild split pea stew with turmeric",
    longDescription: "Split peas cooked in a mild, non-spicy sauce with turmeric, onions, and fresh herbs. Perfect for those who prefer milder flavors.",
    price: 11.99,
    image: "/menu-images/vegetarian-dinich-wat-30.jpg",
    rating: 4.3,
    reviews: 123,
    ingredients: ["Split peas", "Turmeric", "Onions", "Fresh herbs"],
    extras: [
      { name: "Extra herbs", price: 1.00 },
      { name: "Extra injera", price: 2.00 },
      { name: "Large portion", price: 2.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "20-24 min"
  },
  {
    id: 29,
    name: "Fasolia",
    category: "Vegetarian",
    description: "Green beans and carrots in tomato sauce",
    longDescription: "Fresh green beans and carrots cooked in a flavorful tomato-based sauce with onions, garlic, and mild Ethiopian spices.",
    price: 10.99,
    image: "/menu-images/vegetarian-fasolia-29.jpg",
    rating: 4.2,
    reviews: 98,
    ingredients: ["Green beans", "Carrots", "Tomato sauce", "Onions", "Garlic"],
    extras: [
      { name: "Extra vegetables", price: 2.00 },
      { name: "Spicy version", price: 0.00 },
      { name: "With injera", price: 2.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "18-22 min"
  },
  {
    id: 30,
    name: "Dinich Wat",
    category: "Vegetarian", 
    description: "Spicy potato stew with berbere",
    longDescription: "Potatoes cooked in a spicy berbere sauce with onions, garlic, and traditional Ethiopian spices. A hearty and satisfying vegetarian dish.",
    price: 11.99,
    image: "/menu-images/vegetarian-dinich-wat-30.jpg",
    rating: 4.4,
    reviews: 145,
    ingredients: ["Potatoes", "Berbere sauce", "Onions", "Garlic", "Ethiopian spices"],
    extras: [
      { name: "Extra potatoes", price: 2.00 },
      { name: "Mild version", price: 0.00 },
      { name: "Extra sauce", price: 1.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "20-25 min"
  },

  // === ADDITIONAL BEVERAGES ===
  {
    id: 31,
    name: "Ethiopian Barley Water (Belbelti)",
    category: "Beverages",
    description: "Traditional barley-based refreshing drink",
    longDescription: "A traditional Ethiopian drink made from roasted barley, served cold and naturally refreshing. Perfect for cooling down after spicy meals.",
    price: 3.49,
    image: "/menu-images/beverage-ethiopian-barley-water-31.jpg",
    rating: 4.2,
    reviews: 87,
    ingredients: ["Roasted barley", "Water", "Natural flavoring"],
    extras: [
      { name: "Large size", price: 1.00 },
      { name: "Extra cold", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "3-5 min"
  },
  {
    id: 32,
    name: "Tella (Ethiopian Beer)",
    category: "Beverages",
    description: "Traditional Ethiopian fermented barley beer",
    longDescription: "Traditional Ethiopian beer made from fermented barley and hops. A mildly alcoholic beverage that pairs excellently with Ethiopian cuisine.",
    price: 6.99,
    image: "/menu-images/beverage-tella-32.jpg",
    rating: 4.1,
    reviews: 76,
    ingredients: ["Fermented barley", "Hops", "Traditional brewing"],
    extras: [
      { name: "Large portion", price: 2.00 },
      { name: "Extra cold", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "3 min"
  },
  {
    id: 33,
    name: "Avocado Juice",
    category: "Beverages",
    description: "Fresh Ethiopian avocado juice with honey",
    longDescription: "Creamy and nutritious juice made from fresh Ethiopian avocados, blended with honey and a touch of lime for a unique and healthy drink.",
    price: 4.49,
    image: "/menu-images/beverage-avocado-juice-33.jpg",
    rating: 4.3,
    reviews: 112,
    ingredients: ["Fresh avocados", "Honey", "Lime", "Water"],
    extras: [
      { name: "Extra honey", price: 0.50 },
      { name: "Large size", price: 1.50 },
      { name: "With ice", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "5-7 min"
  },
  {
    id: 34,
    name: "Ethiopian Tea (Chai)",
    category: "Beverages", 
    description: "Spiced Ethiopian tea with traditional herbs",
    longDescription: "Traditional Ethiopian tea brewed with a blend of spices including cardamom, cinnamon, cloves, and ginger. Served hot and aromatic.",
    price: 3.99,
    image: "/menu-images/beverage-ethiopian-coffee-12.jpg",
    rating: 4.6,
    reviews: 189,
    ingredients: ["Black tea", "Cardamom", "Cinnamon", "Cloves", "Ginger"],
    extras: [
      { name: "Extra spicy", price: 0.00 },
      { name: "With milk", price: 0.50 },
      { name: "Extra strong", price: 0.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "8-10 min"
  },

  // === ADDITIONAL DESSERTS ===
  {
    id: 35,
    name: "Dabo Kolo", 
    category: "Desserts",
    description: "Crunchy Ethiopian roasted barley snack",
    longDescription: "Traditional Ethiopian snack made from roasted barley, seasoned with berbere spice for a unique sweet and spicy flavor combination.",
    price: 4.99,
    image: "/menu-images/dessert-dabo-kolo-35.jpg",
    rating: 4.4,
    reviews: 134,
    ingredients: ["Roasted barley", "Berbere spice", "Oil", "Salt"],
    extras: [
      { name: "Extra spicy", price: 0.00 },
      { name: "Large portion", price: 2.00 },
      { name: "Mild version", price: 0.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "5 min"
  },
  {
    id: 36,
    name: "Ethiopian Coffee Ice Cream",
    category: "Desserts",
    description: "House-made ice cream with Ethiopian coffee",
    longDescription: "Rich and creamy ice cream infused with traditional Ethiopian coffee beans, offering a unique dessert experience that celebrates Ethiopia's coffee heritage.",
    price: 6.99,
    image: "/menu-images/dessert-ethiopian-coffee-ice-cream-36.jpg",
    rating: 4.7,
    reviews: 156,
    ingredients: ["Ethiopian coffee", "Cream", "Sugar", "Vanilla"],
    extras: [
      { name: "Double scoop", price: 2.00 },
      { name: "With honey drizzle", price: 1.00 },
      { name: "Extra coffee flavor", price: 0.50 }
    ],
    popular: false,
    featured: false,
    prepTime: "5 min"
  },

  // === ADDITIONAL COMBO PLATTERS ===
  {
    id: 37,
    name: "Fasting Combo (Vegetarian)",
    category: "Combo Platters",
    description: "Traditional Ethiopian fasting platter with assorted vegetarian dishes",
    longDescription: "A traditional Ethiopian fasting platter featuring shiro, misir wat, gomen, atakilt wat, fasolia, kik alicha, and dinich wat served on injera.",
    price: 24.99,
    image: "/menu-images/combo-fasting-combo-37.jpg",
    rating: 4.8,
    reviews: 267,
    ingredients: ["Shiro", "Misir wat", "Gomen", "Atakilt wat", "Fasolia", "Kik alicha", "Dinich wat", "Injera"],
    extras: [
      { name: "Extra injera", price: 2.00 },
      { name: "Add avocado", price: 2.50 },
      { name: "Large platter", price: 5.00 }
    ],
    popular: true,
    featured: true,
    prepTime: "25-30 min"
  },
  {
    id: 38,
    name: "Tibs Combo",
    category: "Combo Platters",
    description: "Variety of tibs dishes served together",
    longDescription: "A combination of different tibs preparations including regular tibs, zilzil tibs, derek tibs, and awaze tibs, served with injera and vegetables.",
    price: 26.99,
    image: "/menu-images/combo-tibs-combo-38.jpg",
    rating: 4.7,
    reviews: 198,
    ingredients: ["Regular tibs", "Zilzil tibs", "Derek tibs", "Awaze tibs", "Vegetables", "Injera"],
    extras: [
      { name: "Extra meat", price: 4.00 },
      { name: "Extra vegetables", price: 2.50 },
      { name: "Extra injera", price: 2.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "32-35 min"
  },

  // === ADDITIONAL SIDES ===
  {
    id: 39,
    name: "Ethiopian Salad (Selata)",
    category: "Sides",
    description: "Fresh tomato, onion, and jalapeño salad",
    longDescription: "A refreshing salad made with fresh tomatoes, onions, and jalapeños dressed with lemon juice, olive oil, and Ethiopian spices.",
    price: 6.99,
    image: "/menu-images/side-ethiopian-salad-39.jpg",
    rating: 4.3,
    reviews: 145,
    ingredients: ["Tomatoes", "Onions", "Jalapeños", "Lemon juice", "Olive oil", "Ethiopian spices"],
    extras: [
      { name: "Extra vegetables", price: 1.50 },
      { name: "Mild version", price: 0.00 },
      { name: "Large portion", price: 2.00 }
    ],
    popular: false,
    featured: false,
    prepTime: "8-10 min"
  },
  {
    id: 40,
    name: "Berbere Powder (Take Home)",
    category: "Sides",
    description: "Authentic Ethiopian berbere spice blend to take home",
    longDescription: "Our house-made berbere spice blend packaged for you to take home and recreate authentic Ethiopian flavors in your own kitchen.",
    price: 12.99,
    image: "/menu-images/side-berbere-powder-40.jpg",
    rating: 4.9,
    reviews: 234,
    ingredients: ["Dried chilies", "Fenugreek", "Coriander", "Cardamom", "Ethiopian spices"],
    extras: [
      { name: "Large container", price: 5.00 },
      { name: "Recipe card included", price: 0.00 }
    ],
    popular: true,
    featured: false,
    prepTime: "2 min"
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
