import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
  inStock?: boolean;
}

const ProductCard = ({ name, price, image, category, inStock = true }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-medium transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
          <Heart className="h-4 w-4" />
        </button>
        {category && (
          <Badge className="absolute top-3 left-3" variant="secondary">
            {category}
          </Badge>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" disabled={!inStock}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
