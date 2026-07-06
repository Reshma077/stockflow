# StockFlow - Inventory Management System

## Project Overview
StockFlow is a full-stack Inventory Management System developed using React, Node.js, Express.js, PostgreSQL, and Prisma ORM. It allows users to manage inventory efficiently with authentication, product management, and a dashboard.

## Features
- User Registration
- User Login
- Dashboard
- Add Product
- Edit Product
- Delete Product
- Search Products
- Settings
- JWT Authentication

## Tech Stack

### Frontend
- React
- React Router
- Axios

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Prisma ORM

### Authentication
- JWT
- bcrypt

## Installation

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Authentication
- POST /api/auth/register
- POST /api/auth/login

### Products
- GET /api/products
- POST /api/products
- GET /api/products/:id
- PUT /api/products/:id
- DELETE /api/products/:id

### Dashboard
- GET /api/dashboard

### Settings
- GET /api/settings
- PUT /api/settings

## Author

**Shaik Reshma**
