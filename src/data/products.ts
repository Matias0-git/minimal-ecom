export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Watch",
    description: "A sleek, minimal watch with a clean face and premium leather strap. Perfect for any outfit.",
    price: 199.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description: "Premium over-ear headphones with active noise cancellation and crystal clear sound.",
    price: 249.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "3",
    name: "Ceramic Mug",
    description: "Handcrafted ceramic mug with a comfortable handle and minimalist design.",
    price: 24.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "4",
    name: "Leather Wallet",
    description: "Premium full-grain leather wallet with multiple card slots and a slim profile.",
    price: 79.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "5",
    name: "Smart Speaker",
    description: "Voice-controlled smart speaker with premium sound and seamless integration with your smart home.",
    price: 129.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "8",
    name: "Linen Throw Pillow",
    description: "Soft linen throw pillow with a minimalist design, perfect for any living space.",
    price: 39.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "9",
    name: "Minimalist Desk Lamp",
    description: "Modern desk lamp with adjustable brightness and elegant design for your workspace.",
    price: 89.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "10",
    name: "Portable Bluetooth Speaker",
    description: "Waterproof, durable Bluetooth speaker with 20-hour battery life and amazing sound quality.",
    price: 119.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "12",
    name: "Minimalist Wall Clock",
    description: "Silent wall clock with a clean design that complements any interior style.",
    price: 59.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "13",
    name: "Smart Fitness Tracker",
    description: "Sleek fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications.",
    price: 129.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "14",
    name: "Premium Sunglasses",
    description: "Polarized sunglasses with UV protection and lightweight, durable frames.",
    price: 149.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "15",
    name: "Ceramic Plant Pot",
    description: "Handmade ceramic planter with drainage hole, perfect for indoor plants.",
    price: 32.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "16",
    name: "Minimalist Backpack",
    description: "Waterproof backpack with multiple compartments and sleek design for daily use or travel.",
    price: 89.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1548863227-3af567fc3b27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "electronics", name: "Electronics" },
  { id: "accessories", name: "Accessories" },
  { id: "home", name: "Home" }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};
