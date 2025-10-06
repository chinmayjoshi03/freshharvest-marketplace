import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <span className="material-symbols-outlined text-9xl text-primary">
              sentiment_dissatisfied
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-4 font-display">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! This page seems to have gone to the farmers market.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">
              <span className="material-symbols-outlined">home</span>
              Return to Home
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
