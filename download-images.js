import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Menu data directly embedded to avoid import issues
const menuItems = [
  { id: 1, name: "Doro Wat", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Truffle Mushroom Burger", category: "Burgers", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "BBQ Bacon Burger", category: "Burgers", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Double Stack Supreme", category: "Burgers", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Veggie Deluxe Burger", category: "Burgers", image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Spicy Jalapeño Burger", category: "Burgers", image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Margherita Pizza", category: "Pizza", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Pepperoni Supreme", category: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Meat Lovers Pizza", category: "Pizza", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "Quattro Formaggi", category: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "Hawaiian Paradise", category: "Pizza", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "Veggie Garden Pizza", category: "Pizza", image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "Creamy Alfredo Pasta", category: "Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 14, name: "Spaghetti Carbonara", category: "Pasta", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "Penne Arrabbiata", category: "Pasta", image: "https://images.unsplash.com/photo-1563379091339-03246963d771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 16, name: "Seafood Linguine", category: "Pasta", image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 17, name: "Mushroom Risotto", category: "Pasta", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 18, name: "Crispy Fried Chicken", category: "Chicken", image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 19, name: "Grilled Chicken Breast", category: "Chicken", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 20, name: "Buffalo Wings", category: "Chicken", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 21, name: "Chicken Parmesan", category: "Chicken", image: "https://images.unsplash.com/photo-1565299585323-38174c13cb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 22, name: "Honey Garlic Chicken", category: "Chicken", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 23, name: "Grilled Salmon", category: "Seafood", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 24, name: "Fish and Chips", category: "Seafood", image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 25, name: "Shrimp Scampi", category: "Seafood", image: "https://images.unsplash.com/photo-1580013759032-c96505e24682?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 26, name: "Lobster Tail", category: "Seafood", image: "https://images.unsplash.com/photo-1559737558-2f4462c5ce44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 27, name: "Tuna Steak", category: "Seafood", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 28, name: "Caesar Salad", category: "Salads", image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 29, name: "Mediterranean Salad", category: "Salads", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 30, name: "Cobb Salad", category: "Salads", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 31, name: "Asian Chicken Salad", category: "Salads", image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 32, name: "Quinoa Power Bowl", category: "Salads", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 33, name: "Club Sandwich", category: "Sandwiches", image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 34, name: "Philly Cheesesteak", category: "Sandwiches", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 35, name: "Grilled Chicken Sandwich", category: "Sandwiches", image: "https://images.unsplash.com/photo-1606755962773-d324e2d53014?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 36, name: "Fish Sandwich", category: "Sandwiches", image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 37, name: "Chocolate Lava Cake", category: "Desserts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 38, name: "New York Cheesecake", category: "Desserts", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 39, name: "Tiramisu", category: "Desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 40, name: "Chocolate Brownie Sundae", category: "Desserts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 41, name: "Crème Brûlée", category: "Desserts", image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 42, name: "Apple Pie à la Mode", category: "Desserts", image: "https://images.unsplash.com/photo-1535920527002-b35e96722da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 43, name: "Fresh Squeezed Lemonade", category: "Drinks", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 44, name: "Iced Coffee", category: "Drinks", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 45, name: "Tropical Mango Smoothie", category: "Drinks", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 46, name: "Hot Chocolate Deluxe", category: "Drinks", image: "https://images.unsplash.com/photo-1542990253-0b8cdb9b2437?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 47, name: "Green Tea Matcha Latte", category: "Drinks", image: "https://images.unsplash.com/photo-1515823064-d5e4629a3595?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 48, name: "Fresh Orange Juice", category: "Drinks", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 49, name: "Craft Root Beer Float", category: "Drinks", image: "https://images.unsplash.com/photo-1541807084-5372fbc56692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 50, name: "Berry Blast Smoothie", category: "Drinks", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'src', 'assets', 'menu-images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imagesDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${filename}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(`Error downloading ${filename}: ${err.message}`);
    });
  });
}

// Function to get filename from item
function getImageFilename(item) {
  const categoryMap = {
    'Burgers': 'burger',
    'Pizza': 'pizza', 
    'Pasta': 'pasta',
    'Chicken': 'chicken',
    'Seafood': 'seafood',
    'Salads': 'salad',
    'Sandwiches': 'sandwich',
    'Desserts': 'dessert',
    'Drinks': 'drink'
  };
  
  const category = categoryMap[item.category] || 'food';
  const safeName = item.name.toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `${category}-${safeName}-${item.id}.jpg`;
}

// Main download function
async function downloadAllImages() {
  console.log('🚀 Starting image download...\n');
  
  const downloadPromises = [];
  
  for (const item of menuItems) {
    if (item.image && item.image.includes('unsplash.com')) {
      const filename = getImageFilename(item);
      console.log(`📥 Queuing download: ${item.name} -> ${filename}`);
      downloadPromises.push(
        downloadImage(item.image, filename)
          .catch(err => console.error(`❌ Error downloading ${item.name}: ${err}`))
      );
      
      // Add small delay to avoid overwhelming the server
      if (downloadPromises.length % 5 === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  console.log(`\n⏳ Downloading ${downloadPromises.length} images...\n`);
  
  try {
    await Promise.all(downloadPromises);
    console.log('\n🎉 All images downloaded successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Run: node update-image-paths.js');
    console.log('2. This will update your menuData.js to use local images');
  } catch (error) {
    console.error('❌ Some downloads failed:', error);
  }
}

// Run the download
downloadAllImages();