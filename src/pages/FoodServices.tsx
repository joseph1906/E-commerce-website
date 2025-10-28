import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Cars = () => {
  const products = [
    {
      name: "2024 Tesla Model 3",
      price: 45990,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&q=80",
      category: "New",
    },
    {
      name: "2024 BMW X5",
      price: 62900,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&q=80",
      category: "New",
    },
    {
      name: "2021 Mercedes C-Class",
      price: 35500,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80",
      category: "Used",
    },
    {
      name: "2020 Toyota Camry",
      price: 24900,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&q=80",
      category: "Used",
    },
    {
      name: "All-Weather Floor Mats",
      price: 129,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&q=80",
      category: "Accessories",
    },
    {
      name: "Premium Car Cover",
      price: 199,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80",
      category: "Accessories",
    },
    {
      name: "LED Headlight Assembly",
      price: 349,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80",
      category: "Spare Parts",
    },
    {
      name: "Brake Pad Set",
      price: 89,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80",
      category: "Spare Parts",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicles</h1>
          <p className="text-lg text-muted-foreground">
            Brand new and used cars, accessories, and spare parts
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search vehicles..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="new">Brand New</SelectItem>
              <SelectItem value="used">Used Cars</SelectItem>
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

export default Cars;
