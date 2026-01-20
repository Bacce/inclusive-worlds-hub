import { Button } from "@/components/ui/button";
import { Megaphone, Heart, Shield } from "lucide-react";

const campaigns = [
  {
    icon: Megaphone,
    title: "Representation Matters",
    description: "Advocating for disability representation in children's media, toys, and educational materials across the UK.",
  },
  {
    icon: Heart,
    title: "Healthcare Support",
    description: "Working with hospitals and clinics to provide inclusive resources that help children understand their conditions.",
  },
  {
    icon: Shield,
    title: "Policy & Welfare",
    description: "Campaigning for improved disability rights, accessibility, and welfare support for families.",
  },
];

const AdvocacySection = () => {
  return (
    <section id="advocacy" className="section-padding bg-olive text-accent-foreground">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Advocacy Work
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Beyond our products and workshops, we're passionate advocates for disability 
            rights and representation at every level.
          </p>
        </div>

        {/* Campaigns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {campaigns.map((campaign) => (
            <div
              key={campaign.title}
              className="bg-accent-foreground/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-accent-foreground/20 hover:bg-accent-foreground/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-sunshine rounded-full flex items-center justify-center mx-auto mb-6">
                <campaign.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                {campaign.title}
              </h3>
              <p className="opacity-90 leading-relaxed">
                {campaign.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            Join Our Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvocacySection;
