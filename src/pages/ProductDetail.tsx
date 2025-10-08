import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/products')}>Back to Products</Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-yellow-500">
          star
        </span>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="material-symbols-outlined text-yellow-500">
          star_half
        </span>
      );
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="material-symbols-outlined text-muted-foreground">
          star
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Back
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-muted-foreground">by {product.farmer}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-lg font-semibold">{product.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({product.reviews.length} reviews)</span>
              </div>

              <p className="text-lg">{product.description}</p>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                <span className="text-xl text-muted-foreground">/ {product.unit}</span>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="w-full md:w-auto"
                >
                  <span className="material-symbols-outlined mr-2">add_shopping_cart</span>
                  Add to Cart
                </Button>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Farm:</span>
                      <span className="font-medium">{product.farmer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Unit:</span>
                      <span className="font-medium">{product.unit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Customer Reviews</h2>
              <p className="text-muted-foreground">
                See what our customers have to say about this product
              </p>
            </div>

            <div className="grid gap-4">
              {product.reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{review.userName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {product.reviews.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    No reviews yet. Be the first to review this product!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
