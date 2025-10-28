import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Smartphone, Home, Car, UtensilsCrossed, TrendingUp, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      title: "Mobile Phones",
      description: "Latest smartphones, accessories, and spare parts",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      link: "/phones",
      icon: <Smartphone className="h-5 w-5 text-primary" />,
    },
    {
      title: "Home Appliances",
      description: "Kitchen machines, laundry equipment, and parts",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      link: "/appliances",
      icon: <Home className="h-5 w-5 text-primary" />,
    },
    {
      title: "Vehicles",
      description: "Brand new and used cars with accessories",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      link: "/cars",
      icon: <Car className="h-5 w-5 text-primary" />,
    },
    {
      title: "Food Services",
      description: "Quality food sector services and supplies",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      link: "/food-services",
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
    },
  ];

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Best Prices",
      description: "Competitive pricing on all products",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure Payment",
      description: "Safe and secure payment options",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Your Complete Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From phones to cars, appliances to food services - find everything you need in one place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">
            Explore our diverse range of products and services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex h-16 w-16 rounded-2xl bg-primary/10 items-center justify-center mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
