import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-card text-muted-foreground py-12 px-4 sm:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="material-symbols-outlined text-3xl text-primary">eco</span>
            <h1 className="text-xl font-bold font-display text-foreground">FreshHarvest</h1>
          </Link>
          <p className="text-sm">Your daily dose of freshness.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6 md:mb-0">
          <Link to="/about" className="hover:text-foreground transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <a href="#" className="hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
        </div>
        <p className="text-sm">© 2025 FreshHarvest Market. All rights reserved.</p>
      </div>
    </footer>
  );
};
