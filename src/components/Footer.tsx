import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-olive text-accent-foreground py-12">
      <div className="container-narrow mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🫧</span>
            Buttons & Bubbles
          </div>

          {/* Tagline */}
          <p className="flex items-center gap-2 text-sm opacity-90">
            Made with <Heart className="w-4 h-4 text-sunshine fill-sunshine" /> for inclusion
          </p>

          {/* Copyright */}
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Buttons & Bubbles CIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
