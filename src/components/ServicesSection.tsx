import { Button } from "@/components/ui/button";
import { Palette, Mic, Sparkles } from "lucide-react";
import workshopImage from "@/assets/workshop.png";

const services = [
  {
    icon: Sparkles,
    title: "Imagination Workshops",
    description: "Interactive sessions where children explore our inclusive characters through storytelling, crafts, and creative play.",
    features: ["Age-appropriate activities", "Inclusive learning", "Take-home resources"],
  },
  {
    icon: Palette,
    title: "Sensory Play Sessions",
    description: "Engaging sensory experiences designed to be accessible for children of all abilities, featuring bubbles, textures, and colors.",
    features: ["Sensory-friendly", "Adaptive equipment", "Family participation"],
  },
  {
    icon: Mic,
    title: "Public Speaking & Advocacy",
    description: "Educational talks for schools, healthcare providers, and organizations about disability representation and inclusion.",
    features: ["Professional presentations", "Q&A sessions", "Training workshops"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bring inclusion to life through interactive workshops, sensory experiences, 
            and advocacy work that educates and inspires.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Workshop Image */}
          <div className="order-2 lg:order-1">
            <img
              src={workshopImage}
              alt="Children enjoying a colorful sensory play workshop with bubbles and toys"
              className="w-full rounded-3xl shadow-bubble"
            />
          </div>

          {/* Services List */}
          <div className="order-1 lg:order-2 space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-bubble transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sunshine rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-olive mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-bubble-light text-secondary px-3 py-1 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            Book a Workshop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
