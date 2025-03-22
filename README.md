# Minimal E-Commerce App: Secure Shopping & User Management

## Project Overview

A modern web application built with React and TypeScript, focused on providing a seamless e-commerce experience. This application enables secure user authentication, comprehensive profile management, and the browsing and purchasing of a wide range of products. The app also offers a full shopping cart and checkout process with inventory management.

## Watch the App in Action!

### Check out the demo video below to see the app's features.

[![Watch the video](https://img.youtube.com/vi/79w1P6Xk-Xg/0.jpg)](https://youtu.be/79w1P6Xk-Xg)

## Key Features

- **User Authentication**: Secure login and registration system implemented with Supabase Auth.
- **Profile Management**: Manage and update personal profile information, including:
  - Avatar upload and management via Supabase Storage
  - Bio information and other personal details
  - Row-Level Security (RLS) policies to ensure data privacy
- **Product Catalog**: Browse and view a variety of products across different categories, with detailed product descriptions, images, and prices.
- **Shopping Cart**: Add items to the cart and manage purchases with ease.
- **Checkout Process**: Full e-commerce checkout flow:
  - Multi-step checkout (Shipping, Payment, Review)
  - Stripe payment integration
  - Inventory verification
  - Order management system
- **Responsive Design**: Fully responsive design for all devices using Tailwind CSS.

## Technology Stack

This project leverages modern web technologies to provide an optimal user experience:

- **Frontend**:
  - React (with TypeScript)
  - Tailwind CSS for styling
  - shadcn/ui for high-quality UI components
  - React Router for client-side routing
  - Tanstack Query for data fetching and state management

- **Backend**:
  - Supabase for authentication, database, and storage
  - SQL for database management and queries
  - Row-Level Security policies for data protection
  - Supabase Storage for file management
  - Stripe API for payment processing

## Database Structure

The application uses a SQL database with the following key tables:

- **user_profiles**: Stores user profile data, including:
  - Personal information (name, bio)
  - Avatar image references
  - Notification preferences
  - Home location data
  - Protected with RLS policies

- **products**: Contains information about available products:
  - Name, description, price, category
  - Inventory levels and product images
  - Timestamp for creation and updates

- **orders**: Tracks customer purchases:
  - User reference
  - Total amount, order status, payment information
  - Shipping details
  - Protected with RLS policies

- **order_items**: Tracks items within each order:
  - Order reference
  - Product information, quantity, and price
  - Protected with RLS policies

- **product_inventory**: Manages product stock:
  - Available quantities
  - Updated via database triggers when items are purchased or restocked

## Security Implementation

The application implements multiple security features:

- **Authentication**: Email/password authentication via Supabase
- **Row-Level Security**: Ensures users can:
  - View and update their own profile data
  - Access their orders and order items
- **Secure File Storage**: Avatar images stored securely in Supabase Storage
- **Payment Security**: Secure payment processing through Stripe

## SQL and Database Features

The project utilizes several SQL features:

- **RLS Policies**: For data protection at the database level
- **Database Triggers**: For automatic user profile creation upon registration and inventory management
- **Foreign Key Relationships**: To maintain data integrity
- **JSON Data Types**: For flexible data storage like notification preferences and shipping addresses
- **Transaction Processing**: For secure order processing

## Development

```sh
# Install dependencies
npm i

# Start development server
npm run dev
