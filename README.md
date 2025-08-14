# 🍅 Tomato – Food Delivery App

Tomato is a modern, responsive, and feature-rich **food delivery web application** built using **React.js**, **Vite**, **JavaScript**, **CSS**, and **HTML**.  
It simulates a real-world online food ordering experience, complete with **menu browsing**, **cart management**, and **order placement** functionalities.

---

## 🚀 Tech Stack
- **Frontend Framework:** [React.js](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3
- **Markup:** HTML5
- **State Management:** React Context API

---

## 📂 Folder Structure
FOOD-APP/
│
├── public/ # Public assets (served as-is)
│ └── vite.svg
│
├── src/
│ ├── assets/ # Static images, icons, etc.
│ │
│ ├── components/ # Reusable UI components
│ │ ├── AppDownload # App download section
│ │ ├── ExploreMenu # Menu browsing section
│ │ ├── FoodDisplay # Displays list of food items
│ │ ├── FoodItem # Individual food item card
│ │ ├── Footer # Application footer
│ │ ├── Header # Top banner/header
│ │ ├── LoginPopUp # Login modal popup
│ │ └── NavBar # Navigation bar
│ │
│ ├── context/ # Global state using Context API
│ │ └── StoreContext.jsx
│ │
│ ├── pages/ # Main page views
│ │ ├── Cart # User's shopping cart
│ │ ├── Home # Landing page
│ │ └── PlaceOrder # Order placement form
│ │
│ ├── App.jsx # Root app component
│ ├── index.css # Global styles
│ └── main.jsx # Entry point
│
├── .gitignore # Git ignore rules
├── eslint.config.js # Linting configuration

yaml
Copy
Edit

---

## 🛠 Features
✅ **Browse Menu** – Explore available dishes with appealing UI cards.  
✅ **Cart Management** – Add, remove, and update food items in the cart.  
✅ **Order Placement** – Simple and intuitive order form.  
✅ **User Authentication** – Login popup for account-based operations.  
✅ **Global State Management** – Efficient state handling with Context API.  
✅ **Responsive Design** – Optimized for desktop, tablet, and mobile devices.  

---

## ⚡ Context API Usage
The `StoreContext.jsx` file acts as the **global state manager** for the application.  
It stores and provides:
- Cart items
- User authentication state
- Menu data
- Total price calculation

This allows all components to access and update data **without prop drilling**.

---

## 📸 UI Components
- **Header & NavBar:** For branding and navigation.
- **FoodDisplay & FoodItem:** Dynamic rendering of menu items.
- **LoginPopUp:** Modal for user login/signup.
- **AppDownload:** Section prompting users to download the mobile app.
- **Footer:** Contains site information and links.

---

## 📦 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/tomato-food-delivery.git

# Navigate to the project directory
cd tomato-food-delivery

# Install dependencies
npm install

# Run the development server
npm run dev

🌐 Live Demo

🔗 Live Link (Add your deployed app link here)

📜 License

This project is licensed under the MIT License.