import { Heart, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe every child deserves to see themselves represented in the stories they read and the toys they play with.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "Our resources celebrate diversity and help all children understand that differences are what make us beautiful.",
  },
  {
    icon: Sparkles,
    title: "Imagination",
    description: "Through creative play and storytelling, we spark conversations about disability in a positive, accessible way.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-6">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-foreground">Buttons & Bubbles</strong> is a Community Interest Company 
            dedicated to improving representation and inclusion for children and families living with 
            disabilities and serious illnesses. We create inclusive educational resources and toys—from 
            coloring books to stickers—featuring characters that reflect diverse medical needs and abilities.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-3xl p-8 shadow-soft text-center hover:shadow-bubble transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-bubble-light rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-olive mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
