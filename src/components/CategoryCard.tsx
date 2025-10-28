import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

const CategoryCard = ({ title, description, image, link, icon }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden hover:shadow-strong transition-all duration-300 h-full">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                {icon}
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
            Explore
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
