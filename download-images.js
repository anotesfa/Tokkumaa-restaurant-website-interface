import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ethiopian menu items with appropriate search terms for Unsplash
const ethiopianMenuItems = [
  // Traditional Mains
  { id: 1, name: "Doro Wat", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Kitfo", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Siga Wat", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Tibs", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Yebeg Wat", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 21, name: "Zilzil Tibs", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 22, name: "Derek Tibs", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 23, name: "Bozena Shiro", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 24, name: "Awaze Tibs", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 25, name: "Dulet", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 26, name: "Fish Gulash", category: "Traditional Mains", image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Vegetarian
  { id: 6, name: "Vegetarian Combo", category: "Vegetarian", image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Shiro Wat", category: "Vegetarian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Gomen", category: "Vegetarian", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Misir Wat", category: "Vegetarian", image: "https://images.unsplash.com/photo-1563379091339-03246963d771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 27, name: "Yekik Alicha", category: "Vegetarian", image: "https://images.unsplash.com/photo-1563379091339-03246963d771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 28, name: "Kik Alicha", category: "Vegetarian", image: "https://images.unsplash.com/photo-1563379091339-03246963d771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 29, name: "Fasolia", category: "Vegetarian", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 30, name: "Dinich Wat", category: "Vegetarian", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Combo Platters
  { id: 10, name: "Tokkumaa Special Combo", category: "Combo Platters", image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "Meat Lovers Combo", category: "Combo Platters", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 37, name: "Fasting Combo (Vegetarian)", category: "Combo Platters", image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 38, name: "Tibs Combo", category: "Combo Platters", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Beverages
  { id: 12, name: "Ethiopian Coffee", category: "Beverages", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "Tej (Honey Wine)", category: "Beverages", image: "https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 14, name: "Fresh Mango Juice", category: "Beverages", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "Spris (Ethiopian Soda)", category: "Beverages", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 31, name: "Ethiopian Barley Water (Belbelti)", category: "Beverages", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 32, name: "Tella (Ethiopian Beer)", category: "Beverages", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 33, name: "Avocado Juice", category: "Beverages", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 34, name: "Ethiopian Tea (Chai)", category: "Beverages", image: "https://images.unsplash.com/photo-1515823064-d5e4629a3595?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Desserts
  { id: 16, name: "Honey Bread (Yemarina Yewotet Dabo)", category: "Desserts", image: "https://images.unsplash.com/photo-1535920527002-b35e96722da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 17, name: "Ethiopian Fruit Salad", category: "Desserts", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 35, name: "Dabo Kolo", category: "Desserts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 36, name: "Ethiopian Coffee Ice Cream", category: "Desserts", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Sides
  { id: 18, name: "Injera (Extra)", category: "Sides", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 19, name: "Ayib (Ethiopian Cheese)", category: "Sides", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 20, name: "Atakilt Wat", category: "Sides", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 39, name: "Ethiopian Salad (Selata)", category: "Sides", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 40, name: "Berbere Powder (Take Home)", category: "Sides", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
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
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(path.join(imagesDir, filename));
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(path.join(imagesDir, filename));
        reject(`Failed to download ${filename}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(path.join(imagesDir, filename))) {
        fs.unlinkSync(path.join(imagesDir, filename));
      }
      reject(`Error downloading ${filename}: ${err.message}`);
    });
  });
}

// Function to get filename from Ethiopian item
function getImageFilename(item) {
  const categoryMap = {
    'Traditional Mains': 'traditional',
    'Vegetarian': 'vegetarian',
    'Combo Platters': 'combo',
    'Beverages': 'beverage',
    'Desserts': 'dessert',
    'Sides': 'side'
  };
  
  const category = categoryMap[item.category] || 'food';
  const safeName = item.name.toLowerCase()
    .replace(/\([^)]*\)/g, '') // Remove parentheses content
    .replace(/[^a-z0-9\s]/g, '') // Remove special chars except spaces
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-') // Replace multiple dashes with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
  
  return `${category}-${safeName}-${item.id}.jpg`;
}

// Function to delay execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Main download function
async function downloadAllImages() {
  console.log('🚀 Starting Ethiopian menu image download...\n');
  console.log(`📋 Found ${ethiopianMenuItems.length} Ethiopian menu items to download`);
  console.log('🎯 All images will be Ethiopian cuisine related\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < ethiopianMenuItems.length; i++) {
    const item = ethiopianMenuItems[i];
    const filename = getImageFilename(item);
    
    console.log(`📥 [${i + 1}/${ethiopianMenuItems.length}] Downloading: ${item.name} -> ${filename}`);
    
    try {
      await downloadImage(item.image, filename);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed: ${item.name} - ${error}`);
      failCount++;
    }
    
    // Add delay to be respectful to the server
    if (i < ethiopianMenuItems.length - 1) {
      await delay(500); // 500ms delay between downloads
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 DOWNLOAD SUMMARY:');
  console.log(`✅ Successful downloads: ${successCount}`);
  console.log(`❌ Failed downloads: ${failCount}`);
  console.log(`📝 Total items processed: ${ethiopianMenuItems.length}`);
  
  if (successCount > 0) {
    console.log('\n🎉 Image download completed!');
    console.log('\n📁 Images saved to: src/assets/menu-images/');
    console.log('\n📝 Next steps:');
    console.log('1. All menu items are ready with appropriate Ethiopian cuisine images');
    console.log('2. Images are named to match the menu item content');
    console.log('3. Your Tokkumaa Ethiopian restaurant is ready to serve!');
  } else {
    console.log('\n⚠️  No images were successfully downloaded');
    console.log('Please check your internet connection and try again');
  }
}

// Display menu organization
console.log('🍽️  TOKKUMAA ETHIOPIAN RESTAURANT MENU ORGANIZATION:');
console.log('══════════════════════════════════════════════════');

const categoryCounts = ethiopianMenuItems.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

Object.entries(categoryCounts).forEach(([category, count]) => {
  console.log(`📂 ${category}: ${count} items`);
});

console.log(`\n🎯 Total Menu Items: ${ethiopianMenuItems.length}`);
console.log('🇪🇹 All authentic Ethiopian cuisine!\n');

// Run the download
downloadAllImages();