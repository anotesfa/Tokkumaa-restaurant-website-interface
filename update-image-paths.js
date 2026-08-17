const fs = require('fs');
const path = require('path');

// Function to get filename from item (same as download script)
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

// Read the current menuData.js file
const menuDataPath = path.join(__dirname, 'src', 'data', 'menuData.js');
let menuDataContent = fs.readFileSync(menuDataPath, 'utf8');

console.log('🔄 Updating image paths in menuData.js...\n');

// Parse the file to extract menu items and update image paths
const lines = menuDataContent.split('\n');
let updatedContent = '';
let itemId = 1;
let updatedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this line contains an Unsplash image URL
  if (line.includes('https://images.unsplash.com')) {
    // Find the item data by looking for the id field above this line
    let currentItemId = itemId;
    
    // Look backwards to find the id field
    for (let j = i - 1; j >= 0; j--) {
      if (lines[j].includes('id:')) {
        const idMatch = lines[j].match(/id:\s*(\d+)/);
        if (idMatch) {
          currentItemId = parseInt(idMatch[1]);
          break;
        }
      }
    }
    
    // Create a mock item object to get the filename
    const mockItem = { 
      id: currentItemId, 
      category: getCategory(lines, i),
      name: getName(lines, i)
    };
    
    const localFilename = getImageFilename(mockItem);
    const localPath = `../assets/menu-images/${localFilename}`;
    
    // Replace the Unsplash URL with local path
    const updatedLine = line.replace(
      /https:\/\/images\.unsplash\.com\/[^"]+/,
      localPath
    );
    
    updatedContent += updatedLine + '\n';
    console.log(`✅ Updated item ${currentItemId}: ${mockItem.name} -> ${localFilename}`);
    updatedCount++;
  } else {
    updatedContent += line + '\n';
  }
}

// Helper functions to extract category and name from surrounding lines
function getCategory(lines, currentIndex) {
  for (let j = currentIndex - 1; j >= 0; j--) {
    if (lines[j].includes('category:')) {
      const match = lines[j].match(/category:\s*["']([^"']+)["']/);
      return match ? match[1] : 'Food';
    }
  }
  return 'Food';
}

function getName(lines, currentIndex) {
  for (let j = currentIndex - 1; j >= 0; j--) {
    if (lines[j].includes('name:')) {
      const match = lines[j].match(/name:\s*["']([^"']+)["']/);
      return match ? match[1] : 'Unknown';
    }
  }
  return 'Unknown';
}

// Write the updated content back to the file
fs.writeFileSync(menuDataPath, updatedContent);

console.log(`\n🎉 Successfully updated ${updatedCount} image paths!`);
console.log('📁 All images now use local paths: ../assets/menu-images/');
console.log('✅ Your site no longer depends on external image URLs!');