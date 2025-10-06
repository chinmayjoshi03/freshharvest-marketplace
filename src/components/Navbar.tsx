import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

export const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleCartClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    // TODO: Open cart modal
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-30 flex items-center justify-between whitespace-nowrap bg-background/80 px-10 py-3 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-primary">eco</span>
          <h1 className="text-xl font-bold font-display">FreshHarvest</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <Button asChild variant="secondary" className="rounded-full">
            <Link to="/login">Log In</Link>
          </Button>
        ) : (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined">account_circle</span>
              <span className="text-sm font-medium">{user?.name}</span>
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => {
                    logout();
                    setShowUserMenu(false);
                    navigate('/');
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        <button
          onClick={handleCartClick}
          className="relative flex items-center justify-center rounded-full h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
