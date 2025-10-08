export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
  reviews: Review[];
  rating: number;
}

import strawberriesImg from '@/assets/strawberries.jpg';
import eggsImg from '@/assets/eggs.jpg';
import breadImg from '@/assets/bread.jpg';
import tomatoesImg from '@/assets/tomatoes.jpg';
import cucumbersImg from '@/assets/cucumbers.jpg';
import basilImg from '@/assets/basil.jpg';
import blueberriesImg from '@/assets/blueberries.jpg';
import honeyImg from '@/assets/honey.jpg';
import applesImg from '@/assets/apples.jpg';
import carrotsImg from '@/assets/carrots.jpg';
import milkImg from '@/assets/milk.jpg';
import chickenImg from '@/assets/chicken.jpg';
import cookiesImg from '@/assets/cookies.jpg';
import mintImg from '@/assets/mint.jpg';
import orangeJuiceImg from '@/assets/orange-juice.jpg';
import jamImg from '@/assets/jam.jpg';

import categoryFruitsImg from '@/assets/category-fruits.jpg';
import categoryVegetablesImg from '@/assets/category-vegetables.jpg';
import categoryDairyImg from '@/assets/category-dairy.jpg';
import categoryMeatImg from '@/assets/category-meat.jpg';
import categoryBakedImg from '@/assets/category-baked.jpg';
import categoryHoneyImg from '@/assets/category-honey.jpg';
import categoryHerbsImg from '@/assets/category-herbs.jpg';
import categoryBeveragesImg from '@/assets/category-beverages.jpg';

export const PRODUCTS: Product[] = [
  // Fruits (5 products)
  {
    id: 1,
    name: "Organic Strawberries",
    category: "Fruits",
    description: "Sweet and juicy organic strawberries, freshly picked from local farms. Perfect for desserts or snacking.",
    price: 299,
    unit: "kg",
    image: strawberriesImg,
    farmer: "Green Valley Farm",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Priya Sharma", rating: 5, comment: "Best strawberries I've ever had! So fresh and sweet.", date: "2025-09-15" },
      { id: 2, userName: "Amit Kumar", rating: 5, comment: "Excellent quality, will order again!", date: "2025-09-10" },
      { id: 3, userName: "Neha Singh", rating: 4, comment: "Good quality but a bit pricey.", date: "2025-09-05" },
    ],
  },
  {
    id: 2,
    name: "Organic Blueberries",
    category: "Fruits",
    description: "Plump and sweet organic blueberries packed with antioxidants.",
    price: 450,
    unit: "kg",
    image: blueberriesImg,
    farmer: "Berry Best Farm",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Rajesh Patel", rating: 5, comment: "Perfect for smoothies! Very fresh.", date: "2025-09-12" },
      { id: 2, userName: "Kavita Desai", rating: 4, comment: "Great taste, a bit expensive though.", date: "2025-09-08" },
    ],
  },
  {
    id: 3,
    name: "Fresh Apples",
    category: "Fruits",
    description: "Crisp and sweet Kashmir apples. Perfect for snacking and desserts.",
    price: 180,
    unit: "kg",
    image: applesImg,
    farmer: "Mountain Fresh Orchards",
    rating: 4.9,
    reviews: [
      { id: 1, userName: "Sunita Reddy", rating: 5, comment: "These apples are amazing! So crisp and juicy.", date: "2025-09-20" },
      { id: 2, userName: "Vikram Mehta", rating: 5, comment: "Best apples in town!", date: "2025-09-18" },
      { id: 3, userName: "Anita Gupta", rating: 5, comment: "Perfect quality, highly recommend.", date: "2025-09-14" },
    ],
  },
  {
    id: 4,
    name: "Alphonso Mangoes",
    category: "Fruits",
    description: "Premium Alphonso mangoes from Ratnagiri. Sweet and aromatic.",
    price: 399,
    unit: "kg",
    image: strawberriesImg,
    farmer: "Ratnagiri Mango Farm",
    rating: 5.0,
    reviews: [
      { id: 1, userName: "Deepak Joshi", rating: 5, comment: "Authentic Alphonso mangoes! Worth every rupee.", date: "2025-09-25" },
      { id: 2, userName: "Meera Iyer", rating: 5, comment: "Simply the best mangoes ever!", date: "2025-09-22" },
    ],
  },
  {
    id: 5,
    name: "Fresh Oranges",
    category: "Fruits",
    description: "Juicy Nagpur oranges. Rich in Vitamin C and perfect for fresh juice.",
    price: 120,
    unit: "kg",
    image: blueberriesImg,
    farmer: "Citrus Valley Farm",
    rating: 4.6,
    reviews: [
      { id: 1, userName: "Ravi Shankar", rating: 5, comment: "Very juicy and sweet!", date: "2025-09-19" },
      { id: 2, userName: "Pooja Nair", rating: 4, comment: "Good oranges, fresh delivery.", date: "2025-09-16" },
    ],
  },

  // Vegetables (5 products)
  {
    id: 6,
    name: "Heirloom Tomatoes",
    category: "Vegetables",
    description: "These heirloom tomatoes are known for their rich flavor and unique shapes. Grown with care and without pesticides.",
    price: 60,
    unit: "kg",
    image: tomatoesImg,
    farmer: "Green Acres Farm",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Arjun Verma", rating: 5, comment: "Best tomatoes for salads!", date: "2025-09-17" },
      { id: 2, userName: "Shalini Roy", rating: 4, comment: "Good quality, very fresh.", date: "2025-09-13" },
    ],
  },
  {
    id: 7,
    name: "Organic Cucumbers",
    category: "Vegetables",
    description: "Crisp and refreshing organic cucumbers. Perfect for salads and snacking.",
    price: 40,
    unit: "kg",
    image: cucumbersImg,
    farmer: "Fresh Fields Farm",
    rating: 4.5,
    reviews: [
      { id: 1, userName: "Manish Agarwal", rating: 5, comment: "Very fresh and crunchy!", date: "2025-09-21" },
      { id: 2, userName: "Divya Kapoor", rating: 4, comment: "Good for daily use.", date: "2025-09-11" },
    ],
  },
  {
    id: 8,
    name: "Fresh Carrots",
    category: "Vegetables",
    description: "Sweet and crunchy organic carrots. Rich in beta-carotene and vitamins.",
    price: 50,
    unit: "kg",
    image: carrotsImg,
    farmer: "Root Veggie Farm",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Suresh Babu", rating: 5, comment: "Perfect for carrot juice! Very sweet.", date: "2025-09-23" },
      { id: 2, userName: "Lakshmi Menon", rating: 5, comment: "Excellent quality carrots.", date: "2025-09-19" },
      { id: 3, userName: "Kiran Kumar", rating: 4, comment: "Fresh and tasty.", date: "2025-09-15" },
    ],
  },
  {
    id: 9,
    name: "Organic Spinach",
    category: "Vegetables",
    description: "Fresh organic spinach leaves. Packed with iron and nutrients.",
    price: 35,
    unit: "bunch",
    image: cucumbersImg,
    farmer: "Green Leaf Farm",
    rating: 4.6,
    reviews: [
      { id: 1, userName: "Anjali Jain", rating: 5, comment: "Very fresh spinach, great for curries.", date: "2025-09-24" },
      { id: 2, userName: "Rahul Chopra", rating: 4, comment: "Good quality leaves.", date: "2025-09-20" },
    ],
  },
  {
    id: 10,
    name: "Bell Peppers",
    category: "Vegetables",
    description: "Colorful bell peppers. Perfect for stir-fries and salads.",
    price: 80,
    unit: "kg",
    image: tomatoesImg,
    farmer: "Rainbow Harvest",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Sneha Pillai", rating: 5, comment: "Beautiful colors and very fresh!", date: "2025-09-26" },
      { id: 2, userName: "Anil Sharma", rating: 4, comment: "Good for cooking.", date: "2025-09-22" },
    ],
  },

  // Dairy & Eggs (5 products)
  {
    id: 11,
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    description: "Farm-fresh eggs from free-range chickens. Rich in flavor and nutrients.",
    price: 120,
    unit: "dozen",
    image: eggsImg,
    farmer: "Happy Hens Farm",
    rating: 4.9,
    reviews: [
      { id: 1, userName: "Rekha Singh", rating: 5, comment: "Best eggs! The yolks are so rich.", date: "2025-09-25" },
      { id: 2, userName: "Gaurav Malhotra", rating: 5, comment: "Premium quality eggs.", date: "2025-09-21" },
      { id: 3, userName: "Pallavi Rao", rating: 5, comment: "Worth the price!", date: "2025-09-17" },
    ],
  },
  {
    id: 12,
    name: "Fresh Milk",
    category: "Dairy & Eggs",
    description: "Pure A2 milk from grass-fed cows. Rich and creamy texture.",
    price: 65,
    unit: "liter",
    image: milkImg,
    farmer: "Dairy Fresh Farm",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Vinay Reddy", rating: 5, comment: "Best milk for my morning coffee!", date: "2025-09-27" },
      { id: 2, userName: "Nisha Saxena", rating: 5, comment: "Very fresh and pure.", date: "2025-09-23" },
    ],
  },
  {
    id: 13,
    name: "Organic Cheese",
    category: "Dairy & Eggs",
    description: "Handcrafted organic cheese. Perfect for sandwiches and pizzas.",
    price: 450,
    unit: "250g",
    image: eggsImg,
    farmer: "Artisan Cheese Co.",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Rohan Khanna", rating: 5, comment: "Amazing taste! Perfect for pizza.", date: "2025-09-24" },
      { id: 2, userName: "Madhuri Das", rating: 4, comment: "Good quality cheese.", date: "2025-09-20" },
    ],
  },
  {
    id: 14,
    name: "Greek Yogurt",
    category: "Dairy & Eggs",
    description: "Thick and creamy Greek yogurt. High in protein and probiotics.",
    price: 180,
    unit: "500g",
    image: milkImg,
    farmer: "Yogurt Works",
    rating: 4.6,
    reviews: [
      { id: 1, userName: "Tanvi Bhatt", rating: 5, comment: "Perfect for breakfast bowls!", date: "2025-09-26" },
      { id: 2, userName: "Sanjay Verma", rating: 4, comment: "Good texture and taste.", date: "2025-09-22" },
    ],
  },
  {
    id: 15,
    name: "Farm Butter",
    category: "Dairy & Eggs",
    description: "Creamy farm-fresh butter made from pure cow milk.",
    price: 320,
    unit: "500g",
    image: eggsImg,
    farmer: "Butter Bliss Farm",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Preeti Joshi", rating: 5, comment: "Tastes amazing on toast!", date: "2025-09-25" },
      { id: 2, userName: "Ashish Patel", rating: 5, comment: "Best quality butter.", date: "2025-09-21" },
    ],
  },

  // Meat & Poultry (4 products)
  {
    id: 16,
    name: "Free-Range Chicken",
    category: "Meat & Poultry",
    description: "Fresh free-range chicken. Tender and flavorful meat from farm-raised birds.",
    price: 280,
    unit: "kg",
    image: chickenImg,
    farmer: "Poultry Paradise",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Kartik Bose", rating: 5, comment: "Very tender and fresh!", date: "2025-09-24" },
      { id: 2, userName: "Simran Kaur", rating: 4, comment: "Good quality meat.", date: "2025-09-20" },
    ],
  },
  {
    id: 17,
    name: "Mutton Leg",
    category: "Meat & Poultry",
    description: "Fresh mutton leg pieces. Perfect for curries and biryanis.",
    price: 650,
    unit: "kg",
    image: chickenImg,
    farmer: "Meat Masters",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Mohammed Ali", rating: 5, comment: "Perfect for biryani! Very tender.", date: "2025-09-26" },
      { id: 2, userName: "Fatima Khan", rating: 5, comment: "Excellent quality mutton.", date: "2025-09-22" },
    ],
  },
  {
    id: 18,
    name: "Fresh Fish (Pomfret)",
    category: "Meat & Poultry",
    description: "Fresh pomfret fish from coastal waters. Rich in omega-3.",
    price: 550,
    unit: "kg",
    image: chickenImg,
    farmer: "Ocean Fresh Seafood",
    rating: 4.9,
    reviews: [
      { id: 1, userName: "Joseph D'Souza", rating: 5, comment: "Very fresh fish! No smell.", date: "2025-09-27" },
      { id: 2, userName: "Marina Fernandes", rating: 5, comment: "Best seafood supplier!", date: "2025-09-23" },
    ],
  },
  {
    id: 19,
    name: "Prawns",
    category: "Meat & Poultry",
    description: "Fresh tiger prawns. Perfect for grills and curries.",
    price: 850,
    unit: "kg",
    image: chickenImg,
    farmer: "Coastal Catch",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Thomas George", rating: 5, comment: "Large and fresh prawns!", date: "2025-09-25" },
      { id: 2, userName: "Rina Pinto", rating: 4, comment: "Good size and quality.", date: "2025-09-21" },
    ],
  },

  // Baked Goods (5 products)
  {
    id: 20,
    name: "Artisan Bread",
    category: "Baked Goods",
    description: "Handcrafted sourdough bread, baked fresh daily with organic flour.",
    price: 80,
    unit: "loaf",
    image: breadImg,
    farmer: "Artisan Bakery",
    rating: 4.9,
    reviews: [
      { id: 1, userName: "Akash Mishra", rating: 5, comment: "Best bread in town!", date: "2025-09-26" },
      { id: 2, userName: "Ritu Bansal", rating: 5, comment: "Perfect for sandwiches.", date: "2025-09-22" },
    ],
  },
  {
    id: 21,
    name: "Chocolate Cookies",
    category: "Baked Goods",
    description: "Homemade chocolate chip cookies. Soft and chewy texture.",
    price: 150,
    unit: "pack (12 pcs)",
    image: cookiesImg,
    farmer: "Sweet Treats Bakery",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Kids Corner", rating: 5, comment: "My kids love these cookies!", date: "2025-09-27" },
      { id: 2, userName: "Priyanka Sinha", rating: 5, comment: "Delicious and fresh!", date: "2025-09-24" },
    ],
  },
  {
    id: 22,
    name: "Butter Croissants",
    category: "Baked Goods",
    description: "Flaky butter croissants. Perfect for breakfast.",
    price: 200,
    unit: "pack (6 pcs)",
    image: breadImg,
    farmer: "French Bakes",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Nikhil Yadav", rating: 5, comment: "Authentic French taste!", date: "2025-09-25" },
      { id: 2, userName: "Ananya Krishnan", rating: 4, comment: "Good croissants.", date: "2025-09-21" },
    ],
  },
  {
    id: 23,
    name: "Blueberry Muffins",
    category: "Baked Goods",
    description: "Freshly baked blueberry muffins. Moist and flavorful.",
    price: 180,
    unit: "pack (6 pcs)",
    image: cookiesImg,
    farmer: "Muffin Mania",
    rating: 4.6,
    reviews: [
      { id: 1, userName: "Shreya Gupta", rating: 5, comment: "Perfect with morning coffee!", date: "2025-09-23" },
      { id: 2, userName: "Varun Tiwari", rating: 4, comment: "Tasty muffins.", date: "2025-09-19" },
    ],
  },
  {
    id: 24,
    name: "Chocolate Cake",
    category: "Baked Goods",
    description: "Rich chocolate cake. Perfect for celebrations.",
    price: 450,
    unit: "cake (1 kg)",
    image: breadImg,
    farmer: "Cake World",
    rating: 4.9,
    reviews: [
      { id: 1, userName: "Celebration Time", rating: 5, comment: "Best cake for birthdays!", date: "2025-09-26" },
      { id: 2, userName: "Megha Tripathi", rating: 5, comment: "So moist and delicious!", date: "2025-09-22" },
    ],
  },

  // Honey & Preserves (4 products)
  {
    id: 25,
    name: "Raw Honey",
    category: "Honey & Preserves",
    description: "Pure raw honey from local bees. Unfiltered and unpasteurized.",
    price: 350,
    unit: "jar (500g)",
    image: honeyImg,
    farmer: "Golden Hive Apiary",
    rating: 5.0,
    reviews: [
      { id: 1, userName: "Health First", rating: 5, comment: "Pure and authentic honey!", date: "2025-09-27" },
      { id: 2, userName: "Yogesh Pandey", rating: 5, comment: "Best honey I've ever tasted.", date: "2025-09-24" },
      { id: 3, userName: "Kaveri Nambiar", rating: 5, comment: "Excellent quality!", date: "2025-09-20" },
    ],
  },
  {
    id: 26,
    name: "Strawberry Jam",
    category: "Honey & Preserves",
    description: "Homemade strawberry jam. Made with fresh strawberries and natural sweeteners.",
    price: 280,
    unit: "jar (400g)",
    image: jamImg,
    farmer: "Preserve Palace",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Breakfast Lover", rating: 5, comment: "Perfect on toast!", date: "2025-09-25" },
      { id: 2, userName: "Ritika Bhatia", rating: 5, comment: "Tastes like fresh strawberries!", date: "2025-09-21" },
    ],
  },
  {
    id: 27,
    name: "Orange Marmalade",
    category: "Honey & Preserves",
    description: "Tangy orange marmalade. Perfect spread for breakfast.",
    price: 260,
    unit: "jar (400g)",
    image: honeyImg,
    farmer: "Citrus Preserves",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Morning Glory", rating: 5, comment: "Love the tangy taste!", date: "2025-09-23" },
      { id: 2, userName: "Siddharth Mathur", rating: 4, comment: "Good marmalade.", date: "2025-09-19" },
    ],
  },
  {
    id: 28,
    name: "Mixed Fruit Jam",
    category: "Honey & Preserves",
    description: "Delicious mixed fruit jam with apple, mango, and berries.",
    price: 300,
    unit: "jar (400g)",
    image: jamImg,
    farmer: "Jam Factory",
    rating: 4.6,
    reviews: [
      { id: 1, userName: "Zara Ali", rating: 5, comment: "Kids favorite!", date: "2025-09-24" },
      { id: 2, userName: "Harsh Srivastava", rating: 4, comment: "Nice flavor combination.", date: "2025-09-20" },
    ],
  },

  // Herbs & Spices (5 products)
  {
    id: 29,
    name: "Fresh Basil",
    category: "Herbs & Spices",
    description: "Aromatic and flavorful fresh basil. Ideal for Italian dishes and pesto.",
    price: 50,
    unit: "bunch",
    image: basilImg,
    farmer: "Herb Haven",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Chef Ravi", rating: 5, comment: "Perfect for pesto!", date: "2025-09-26" },
      { id: 2, userName: "Pasta Lover", rating: 5, comment: "So aromatic and fresh!", date: "2025-09-22" },
    ],
  },
  {
    id: 30,
    name: "Fresh Mint",
    category: "Herbs & Spices",
    description: "Refreshing mint leaves. Perfect for chutneys and drinks.",
    price: 30,
    unit: "bunch",
    image: mintImg,
    farmer: "Mint Fresh Farm",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Chutney Master", rating: 5, comment: "Very fresh mint!", date: "2025-09-25" },
      { id: 2, userName: "Mohit Rastogi", rating: 4, comment: "Good quality.", date: "2025-09-21" },
    ],
  },
  {
    id: 31,
    name: "Coriander Leaves",
    category: "Herbs & Spices",
    description: "Fresh coriander leaves. Essential for Indian cooking.",
    price: 25,
    unit: "bunch",
    image: basilImg,
    farmer: "Green Herbs Co.",
    rating: 4.6,
    reviews: [
      { id: 1, userName: "Cooking Queen", rating: 5, comment: "Fresh and fragrant!", date: "2025-09-24" },
      { id: 2, userName: "Ramesh Kumar", rating: 4, comment: "Good for daily use.", date: "2025-09-20" },
    ],
  },
  {
    id: 32,
    name: "Curry Leaves",
    category: "Herbs & Spices",
    description: "Aromatic curry leaves. Must-have for South Indian cooking.",
    price: 40,
    unit: "bunch",
    image: mintImg,
    farmer: "South Spice Farm",
    rating: 4.9,
    reviews: [
      { id: 1, userName: "Dosa Delight", rating: 5, comment: "So fresh and aromatic!", date: "2025-09-27" },
      { id: 2, userName: "Subramanian", rating: 5, comment: "Excellent quality curry leaves.", date: "2025-09-23" },
    ],
  },
  {
    id: 33,
    name: "Green Chilies",
    category: "Herbs & Spices",
    description: "Fresh green chilies. Perfect for adding heat to your dishes.",
    price: 60,
    unit: "250g",
    image: basilImg,
    farmer: "Spice Garden",
    rating: 4.5,
    reviews: [
      { id: 1, userName: "Spicy Food Fan", rating: 5, comment: "Very hot and fresh!", date: "2025-09-22" },
      { id: 2, userName: "Aditi Menon", rating: 4, comment: "Good spice level.", date: "2025-09-18" },
    ],
  },

  // Beverages (4 products)
  {
    id: 34,
    name: "Fresh Orange Juice",
    category: "Beverages",
    description: "Freshly squeezed orange juice. No added sugar or preservatives.",
    price: 120,
    unit: "bottle (500ml)",
    image: orangeJuiceImg,
    farmer: "Juice Bar Co.",
    rating: 4.9,
    reviews: [
      { id: 1, userName: "Morning Energy", rating: 5, comment: "Tastes like fresh oranges!", date: "2025-09-27" },
      { id: 2, userName: "Shweta Deshmukh", rating: 5, comment: "Perfect for breakfast!", date: "2025-09-24" },
    ],
  },
  {
    id: 35,
    name: "Apple Cider",
    category: "Beverages",
    description: "Organic apple cider. Naturally fermented and healthy.",
    price: 250,
    unit: "bottle (500ml)",
    image: orangeJuiceImg,
    farmer: "Cider Works",
    rating: 4.7,
    reviews: [
      { id: 1, userName: "Health Conscious", rating: 5, comment: "Great for digestion!", date: "2025-09-25" },
      { id: 2, userName: "Wellness Warrior", rating: 4, comment: "Good quality cider.", date: "2025-09-21" },
    ],
  },
  {
    id: 36,
    name: "Herbal Tea",
    category: "Beverages",
    description: "Organic herbal tea blend. Relaxing and refreshing.",
    price: 180,
    unit: "pack (50g)",
    image: orangeJuiceImg,
    farmer: "Tea Garden",
    rating: 4.8,
    reviews: [
      { id: 1, userName: "Tea Time", rating: 5, comment: "Very soothing tea!", date: "2025-09-26" },
      { id: 2, userName: "Relaxation Mode", rating: 5, comment: "Perfect evening tea.", date: "2025-09-22" },
    ],
  },
  {
    id: 37,
    name: "Coconut Water",
    category: "Beverages",
    description: "Fresh coconut water. Natural electrolyte drink.",
    price: 60,
    unit: "bottle (300ml)",
    image: orangeJuiceImg,
    farmer: "Coastal Refresh",
    rating: 4.6,
    reviews: [
      { id: 1, userName: "Fitness Freak", rating: 5, comment: "Perfect post-workout drink!", date: "2025-09-23" },
      { id: 2, userName: "Summer Cool", rating: 4, comment: "Refreshing!", date: "2025-09-19" },
    ],
  },
];

export const CATEGORIES = [
  { name: "Fruits", image: categoryFruitsImg },
  { name: "Vegetables", image: categoryVegetablesImg },
  { name: "Dairy & Eggs", image: categoryDairyImg },
  { name: "Meat & Poultry", image: categoryMeatImg },
  { name: "Baked Goods", image: categoryBakedImg },
  { name: "Honey & Preserves", image: categoryHoneyImg },
  { name: "Herbs & Spices", image: categoryHerbsImg },
  { name: "Beverages", image: categoryBeveragesImg },
];
