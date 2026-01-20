import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/hero-character.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-warm-white pt-20">
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-large absolute top-20 left-10 animate-float" style={{ animationDelay: "0s" }} />
        <div className="bubble bubble-medium absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="bubble bubble-small absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: "2s" }} />
        <div className="bubble bubble-large absolute bottom-20 right-10 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="bubble bubble-medium absolute top-1/3 left-1/3 animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="bubble bubble-small absolute top-1/2 right-1/3 animate-float" style={{ animationDelay: "2.5s" }} />
      </div>

      <div className="container-narrow mx-auto px-4 text-center relative z-10">
        {/* Hero Character */}
        <div className="mb-8 animate-bounce-gentle">
          <img
            src={heroCharacter}
            alt="Friendly yellow character with glasses reading a book, surrounded by bubbles"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-medium">
          On a mission to increase representation & inclusion around disability for everybody.
        </p>

        {/* CTA Button */}
        <Button
          variant="cta"
          size="lg"
          onClick={() => scrollToSection("#about")}
          className="animate-wiggle hover:animate-none"
        >
          Find Out How
        </Button>
      </div>

      {/* Colorful Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
};

export default HeroSection;
