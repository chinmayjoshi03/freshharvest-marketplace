export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
}

import strawberriesImg from '@/assets/strawberries.jpg';
import eggsImg from '@/assets/eggs.jpg';
import breadImg from '@/assets/bread.jpg';
import tomatoesImg from '@/assets/tomatoes.jpg';
import cucumbersImg from '@/assets/cucumbers.jpg';
import basilImg from '@/assets/basil.jpg';
import blueberriesImg from '@/assets/blueberries.jpg';
import honeyImg from '@/assets/honey.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Organic Strawberries",
    category: "Fruits",
    description: "Sweet and juicy organic strawberries, freshly picked from local farms. Perfect for desserts or snacking.",
    price: 4.99,
    unit: "lb",
    image: strawberriesImg,
    farmer: "Green Valley Farm",
  },
  {
    id: 2,
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    description: "Farm-fresh eggs from free-range chickens. Rich in flavor and nutrients.",
    price: 6.00,
    unit: "dozen",
    image: eggsImg,
    farmer: "Happy Hens Farm",
  },
  {
    id: 3,
    name: "Artisan Bread",
    category: "Baked Goods",
    description: "Handcrafted sourdough bread, baked fresh daily with organic flour.",
    price: 5.50,
    unit: "loaf",
    image: breadImg,
    farmer: "Artisan Bakery",
  },
  {
    id: 4,
    name: "Heirloom Tomatoes",
    category: "Vegetables",
    description: "These heirloom tomatoes are known for their rich flavor and unique shapes. Grown with care and without pesticides.",
    price: 5.99,
    unit: "lb",
    image: tomatoesImg,
    farmer: "Green Acres Farm",
  },
  {
    id: 5,
    name: "Organic Cucumbers",
    category: "Vegetables",
    description: "Crisp and refreshing organic cucumbers. Perfect for salads and snacking.",
    price: 2.49,
    unit: "each",
    image: cucumbersImg,
    farmer: "Fresh Fields Farm",
  },
  {
    id: 6,
    name: "Fresh Basil",
    category: "Herbs & Spices",
    description: "Aromatic and flavorful fresh basil. Ideal for Italian dishes and pesto.",
    price: 3.00,
    unit: "bunch",
    image: basilImg,
    farmer: "Herb Haven",
  },
  {
    id: 7,
    name: "Organic Blueberries",
    category: "Fruits",
    description: "Plump and sweet organic blueberries packed with antioxidants.",
    price: 6.99,
    unit: "pint",
    image: blueberriesImg,
    farmer: "Berry Best Farm",
  },
  {
    id: 8,
    name: "Raw Honey",
    category: "Honey & Preserves",
    description: "Pure raw honey from local bees. Unfiltered and unpasteurized.",
    price: 8.99,
    unit: "jar",
    image: honeyImg,
    farmer: "Golden Hive Apiary",
  },
];

export const CATEGORIES = [
  { name: "Fruits", icon: "nutrition" },
  { name: "Vegetables", icon: "potted_plant" },
  { name: "Dairy & Eggs", icon: "egg" },
  { name: "Meat & Poultry", icon: "restaurant" },
  { name: "Baked Goods", icon: "bakery_dining" },
  { name: "Honey & Preserves", icon: "water_drop" },
  { name: "Herbs & Spices", icon: "grass" },
  { name: "Beverages", icon: "coffee" },
];
