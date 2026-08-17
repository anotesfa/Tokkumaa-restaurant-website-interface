# Tokkumaa Restaurant - Online Ordering Website

![Tokkumaa Restaurant Logo](https://img.shields.io/badge/Tokkumaa-Authentic%20Ethiopian%20Cuisine-green?style=for-the-badge)

A modern Ethiopian restaurant ordering website built with React.js, featuring traditional Ethiopian dishes with complete food ordering experience, cart management, favorites, and responsive design.

## 🌟 Features

### Core Functionality
- **Complete Menu System** with categories, search, and filtering
- **Shopping Cart** with persistent storage and quantity management
- **Favorites System** to save preferred items
- **Food Details** pages with customization options
- **Order Management** with checkout and order tracking
- **Responsive Design** that works on all devices

### User Experience
- **Premium Design** with modern UI/UX principles
- **Toast Notifications** for user feedback
- **Loading States** and smooth animations
- **Accessibility Features** including keyboard navigation and ARIA labels
- **SEO Optimized** with proper meta tags and semantic HTML

### Technical Features
- **Context API** for state management
- **Local Storage** for data persistence
- **React Router** for navigation
- **Bootstrap 5** for responsive layout
- **Custom CSS** with design system approach
- **Error Boundaries** and 404 handling

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tokkumaa-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 📁 Project Structure

```
tokkumaa-restaurant/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── common/         # Common UI components
│   │   ├── food/           # Food-related components
│   │   ├── cart/           # Cart components
│   │   ├── forms/          # Form components
│   │   └── layout/         # Layout components
│   ├── context/           # React Context providers
│   ├── data/              # Static data and utilities
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route components
│   ├── styles/            # CSS files
│   ├── utils/             # Utility functions
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary:** #228B22 (Ethiopian Green)
- **Secondary:** #FFD700 (Ethiopian Gold)  
- **Accent:** #DC143C (Ethiopian Red)
- **Success:** #27ae60 (Green)
- **Background:** #ffffff (White)

### Typography
- **Primary Font:** Inter, system fonts
- **Headings:** Weight 600-700
- **Body:** Weight 400-500

### Spacing System
- **XS:** 0.25rem (4px)
- **SM:** 0.5rem (8px)
- **MD:** 1rem (16px)
- **LG:** 1.5rem (24px)
- **XL:** 2rem (32px)

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- Popular dishes showcase
- Food categories
- Why choose us section
- Customer testimonials
- Restaurant statistics

### Menu Page (`/menu`)
- Complete food listing with filtering
- Category-based navigation
- Search functionality
- Sorting options (price, rating, popularity)
- Grid layout with responsive cards

### Food Details (`/menu/:id`)
- Large food image with badges
- Detailed description and ingredients
- Rating and reviews
- Customization options (extras)
- Quantity selector
- Add to cart and favorites

### Cart (`/cart`)
- Item management (add, remove, update quantity)
- Price calculations (subtotal, tax, delivery)
- Persistent storage
- Empty state handling
- Proceed to checkout

### Checkout (`/checkout`)
- Customer information form
- Delivery/pickup options
- Address management
- Payment method selection
- Order summary
- Form validation

### Order Success (`/order-success`)
- Order confirmation details
- Estimated delivery time
- Order tracking link
- Customer information summary

### Favorites (`/favorites`)
- Saved items display
- Easy management (add/remove)
- Empty state with call-to-action
- Grid layout consistent with menu

### About (`/about`)
- Restaurant story and mission
- Chef team profiles
- Awards and recognition
- Quality promise
- Statistics and achievements

### Contact (`/contact`)
- Contact form with validation
- Restaurant information
- Social media links
- FAQ section
- Map placeholder

### Order Tracking (`/track-order`)
- Order status timeline
- Real-time updates simulation
- Contact information
- Order details display

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Component-based UI library
- **Vite** - Build tool and development server

### Routing & State
- **React Router DOM** - Client-side routing
- **Context API** - Global state management
- **Local Storage** - Data persistence

### Styling & UI
- **Bootstrap 5** - Responsive CSS framework
- **Bootstrap Icons** - Icon library
- **Custom CSS** - Design system and animations

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📊 Menu Data Structure

Each food item contains:
```javascript
{
  id: number,
  name: string,
  category: string,
  description: string,
  longDescription: string,
  price: number,
  image: string,
  rating: number,
  reviews: number,
  ingredients: string[],
  extras: object[],
  popular: boolean,
  featured: boolean,
  prepTime: string
}
```

## 🔧 Configuration Options

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_NAME=Tokkumaa Restaurant
VITE_API_URL=http://localhost:3000/api
VITE_DELIVERY_FEE=50.00
VITE_TAX_RATE=0.15
```

### Customization
- **Colors:** Update CSS variables in `src/styles/global.css`
- **Menu Data:** Modify `src/data/menuData.js`
- **Restaurant Info:** Update contact details in footer and contact page
- **Branding:** Replace logo and update brand name throughout

## 🎯 Performance Features

### Optimizations
- **Lazy Loading** for images
- **Code Splitting** with React Router
- **Efficient Rendering** with proper keys and memo
- **Optimized Assets** through Vite's build process

### Accessibility
- **Semantic HTML** structure
- **ARIA Labels** for interactive elements
- **Keyboard Navigation** support
- **Screen Reader** friendly
- **Color Contrast** compliance

### SEO
- **Meta Tags** for all pages
- **Structured Data** ready
- **Clean URLs** with React Router
- **Fast Loading** times

## 🚧 Future Enhancements

### Potential Features
- **User Authentication** and profiles
- **Order History** and reordering
- **Real-time Notifications** with WebSocket
- **Payment Integration** (Stripe, PayPal)
- **Admin Dashboard** for menu management
- **Multi-language Support** (i18n)
- **Progressive Web App** (PWA) features
- **Advanced Filtering** (dietary restrictions, allergens)

### Technical Improvements
- **Backend Integration** with Node.js/Express
- **Database** integration (MongoDB/PostgreSQL)
- **API Documentation** with Swagger
- **Testing Suite** (Jest, React Testing Library)
- **CI/CD Pipeline** with GitHub Actions
- **Performance Monitoring** (Lighthouse, Web Vitals)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with the project:

- **Email:** anamtesfa@gmail.com
- **Phone:** +251 94 574 4342
- **Issues:** Create a GitHub issue

## 🙏 Acknowledgments

- **Unsplash** for high-quality food images
- **Bootstrap** team for the excellent CSS framework
- **React** team for the amazing library
- **Vite** team for the fast build tool

---

**Made with ❤️ for Ethiopian food lovers everywhere**

*Tokkumaa Restaurant - Authentic Ethiopian Cuisine*