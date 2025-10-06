import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CATEGORIES } from '@/data/products';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter font-display sm:text-5xl md:text-6xl">
              Explore Our Categories
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From freshly picked vegetables to artisan breads, find everything you need for your farm-to-table meals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CATEGORIES.map(category => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="group relative flex aspect-[4/3] transform flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-border hover:border-primary"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/50 to-transparent transition-colors group-hover:from-background/90" />
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="relative z-20 mt-auto p-4">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
