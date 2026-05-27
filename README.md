# E-Commerce Website

Full-stack e-commerce platform featuring product management, user authentication, order processing, and an admin dashboard. Built with ReactJS, NodeJS, ExpressJS, and MySQL.

---

## 📁 Project Structure

```
E-Commerce-Website/
├── frontend-user/     # User-facing storefront (ReactJS)
├── frontend-admin/    # Admin dashboard (ReactJS)
└── backend/           # REST API server (NodeJS + ExpressJS)
```

---

## 🚀 Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | ReactJS, JavaScript (ES6+), CSS3  |
| Backend   | NodeJS, ExpressJS                 |
| Database  | MySQL                             |
| Tools     | Git, Postman, Figma               |

---

## ✨ Features

**User Storefront (`frontend-user`)**
- Browse and search products
- User registration and login
- Shopping cart and order placement
- View order history

**Admin Dashboard (`frontend-admin`)**
- Manage products (add, edit, delete)
- Manage users and orders
- View order status and updates

**Backend API (`backend`)**
- RESTful API for both frontend apps
- User authentication (JWT)
- CRUD operations for products, users, and orders
- MySQL database integration

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 14
- MySQL

### 1. Clone the repository
```bash
git clone git@github.com:roku-hachi/E-Commerce-Website.git
cd E-Commerce-Website
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ecommerce
PORT=5000
JWT_SECRET=your_jwt_secret
```

Import the database:
```bash
mysql -u root -p ecommerce < database.sql
```

Run the server:
```bash
npm start
```

### 3. Setup Frontend (User)
```bash
cd frontend-user
npm install
npm start
```

### 4. Setup Frontend (Admin)
```bash
cd frontend-admin
npm install
npm start
```

---

## 🌐 Default Ports

| Service        | Port   |
|----------------|--------|
| Backend API    | :5000  |
| Frontend User  | :3000  |
| Frontend Admin | :3001  |

---

## 👤 Author

**Nguyen Quang Huy**
- GitHub: [@roku-hachi](https://github.com/roku-hachi)
- Email: quanghuy991020@gmail.com
