import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Phones = () => {
  const products = [
    {
      name: "iPhone 15 Pro Max",
      price: 1199,
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&q=80",
      category: "Phones",
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      price: 1099,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80",
      category: "Phones",
    },
    {
      name: "Google Pixel 8 Pro",
      price: 899,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
      category: "Phones",
    },
    {
      name: "Wireless Earbuds Pro",
      price: 249,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
      category: "Accessories",
    },
    {
      name: "Phone Case Premium",
      price: 29,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
      category: "Accessories",
    },
    {
      name: "Fast Charger 65W",
      price: 49,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
      category: "Accessories",
    },
    {
      name: "Screen Protector Kit",
      price: 19,
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80",
      category: "Spare Parts",
    },
    {
      name: "Battery Replacement",
      price: 79,
      image: "https://images.unsplash.com/photo-1609592806587-0d8e5f0a3e95?w=500&q=80",
      category: "Spare Parts",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Phones</h1>
          <p className="text-lg text-muted-foreground">
            Latest smartphones, accessories, and spare parts
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="phones">Phones</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="parts">Spare Parts</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="featured">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Phones;
