import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Appliances = () => {
  const products = [
    {
      name: "Smart Washing Machine 9kg",
      price: 699,
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80",
      category: "Laundry",
    },
    {
      name: "Front Load Dryer",
      price: 549,
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&q=80",
      category: "Laundry",
    },
    {
      name: "Multi-Function Food Processor",
      price: 299,
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80",
      category: "Kitchen",
    },
    {
      name: "Stand Mixer Pro",
      price: 379,
      image: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?w=500&q=80",
      category: "Kitchen",
    },
    {
      name: "Espresso Coffee Machine",
      price: 599,
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80",
      category: "Kitchen",
    },
    {
      name: "Blender 2000W",
      price: 149,
      image: "https://images.unsplash.com/photo-1585515656861-8b1b4e935e57?w=500&q=80",
      category: "Kitchen",
    },
    {
      name: "Washing Machine Filter",
      price: 29,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      category: "Spare Parts",
    },
    {
      name: "Universal Mixer Attachment",
      price: 49,
      image: "https://images.unsplash.com/photo-1585515656861-8b1b4e935e57?w=500&q=80",
      category: "Accessories",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Appliances</h1>
          <p className="text-lg text-muted-foreground">
            Kitchen machines, laundry equipment, accessories, and spare parts
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search appliances..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="laundry">Laundry</SelectItem>
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

export default Appliances;
