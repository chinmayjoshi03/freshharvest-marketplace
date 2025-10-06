import { Product } from '@/data/products';
import { Button } from './ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="group cursor-pointer">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-card">
        <img
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
          src={product.image}
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-base font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-primary">
            ${product.price.toFixed(2)} <span className="text-sm text-muted-foreground">/ {product.unit}</span>
          </p>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="rounded-full"
          >
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
