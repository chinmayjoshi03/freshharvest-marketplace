import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import heroImage from '@/assets/hero-fresh-produce.jpg';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-[60vh] flex flex-col items-center justify-center text-center px-4"
          style={{ backgroundImage: `linear-gradient(to top, rgba(17, 23, 20, 1) 0%, rgba(17, 23, 20, 0.6) 100%), url(${heroImage})` }}>
          <div className="max-w-3xl z-10">
            <h1 className="text-5xl font-bold mb-4 font-display">Freshness You Can Taste.</h1>
            <p className="text-lg text-gray-300 mb-8">Discover the best local, seasonal & organic produce, delivered right to your door.</p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  search
                </span>
                <Input
                  type="text"
                  placeholder="Search for fresh produce, dairy, and more"
                  className="pl-12 h-14 bg-card/50 backdrop-blur-sm border-border rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4 sm:px-10 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center font-display">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="py-20 px-4 sm:px-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center font-display">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {CATEGORIES.slice(0, 8).map(category => (
                <Link
                  key={category.name}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="group"
                >
                  <div className="aspect-square w-full flex items-center justify-center bg-card rounded-lg overflow-hidden relative border border-border hover:border-primary transition-all">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="relative z-10 text-center mt-auto mb-4">
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
