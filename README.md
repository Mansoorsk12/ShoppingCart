# 🛒 Shopping Cart Application

A responsive Shopping Cart application built using React.js and CSS. This project allows users to browse products, add items to their cart, manage product quantities, remove items, and view the automatically calculated subtotal.

## ✨ Features

- **Product Listing:** Display products with images, names, descriptions, and prices.
- **Add to Cart:** Add products to the shopping cart.
- **Quantity Management:** Increase or decrease the quantity of products.
- **Remove Items:** Remove individual products from the cart.
- **Dynamic Subtotal:** Automatically calculate the subtotal based on product prices and quantities.
- **Empty Cart Message:** Display a message when the cart has no items.
- **Component-Based Architecture:** Build the application using reusable React components.
- **Responsive Layout:** Organize products and cart information using CSS Grid and Flexbox.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js 19 | Building the user interface |
| JavaScript (ES6+) | Application logic |
| HTML5 | Application structure |
| CSS3 | Styling and layout |
| Vite | Development server and build tool |

## 📸 Application Preview

The application displays a product listing alongside a shopping cart where users can manage their selected products and view the subtotal.

## 📂 Project Structure

```text
ShoppingCart/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   │
│   ├── data/
│   │   └── product.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Mansoorsk12/ShoppingCart.git
```

### 2. Navigate to the Project Directory

```bash
cd ShoppingCart
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Open the localhost URL displayed in your terminal.

## 🧠 React Concepts Used

- Functional Components
- Props and Component Communication
- React Hooks (`useState`)
- Array Methods (`map`, `find`, `filter`, `reduce`)
- Conditional Rendering
- Event Handling
- State Management
- Component-Based Architecture
- Dynamic Data Rendering

## 📌 How It Works

1. Products are loaded from a local JavaScript data file.
2. Users can add products to the cart.
3. If a product already exists in the cart, its quantity increases.
4. Users can increase or decrease product quantities.
5. Products are automatically removed when their quantity reaches zero.
6. Users can also remove products directly.
7. The subtotal updates automatically whenever the cart changes.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint checks |

## 🚀 Future Enhancements

- Add product search and category filters.
- Implement checkout functionality.
- Add payment gateway integration.
- Persist cart items using Local Storage.
- Add product detail pages.
- Add user authentication.
- Improve mobile responsiveness.
- Add product sorting and price filters.

## 🎯 Learning Outcomes

This project helped develop practical knowledge of:

- Building interactive applications with React.
- Managing application state using `useState`.
- Passing data and functions between components using props.
- Performing CRUD-like operations on arrays.
- Calculating dynamic values using JavaScript's `reduce()` method.
- Creating reusable and maintainable React components.
- Designing layouts using CSS Grid and Flexbox.

## 👨‍💻 Author

**Mansoor**

GitHub: [@Mansoorsk12](https://github.com/Mansoorsk12)

---

⭐ If you find this project useful, consider giving it a star!
