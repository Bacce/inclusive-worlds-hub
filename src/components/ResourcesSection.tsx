import { Button } from "@/components/ui/button";
import { BookOpen, Sticker, CreditCard, Gift } from "lucide-react";

const products = [
  {
    icon: BookOpen,
    name: "Coloring Books",
    description: "Inclusive coloring books featuring our diverse characters",
    price: "£8.99",
  },
  {
    icon: Sticker,
    name: "Sticker Packs",
    description: "Fun stickers showcasing disability representation",
    price: "£4.99",
  },
  {
    icon: CreditCard,
    name: "Greeting Cards",
    description: "Beautiful cards for all occasions with inclusive designs",
    price: "£3.50",
  },
  {
    icon: Gift,
    name: "Gift Bundles",
    description: "Curated bundles perfect for gifts and classrooms",
    price: "£24.99",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="section-padding bg-warm-white">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-6">
            Shop Our Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of inclusive products designed to celebrate diversity 
            and spark important conversations about disability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card rounded-3xl p-6 shadow-soft hover:shadow-bubble hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 bg-bubble-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sunshine transition-colors duration-300">
                <product.icon className="w-10 h-10 text-secondary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-olive mb-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {product.description}
              </p>
              <p className="font-display text-2xl font-bold text-sunshine">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            Visit Our Shop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
