import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-olive mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, want to book a workshop, or interested in stocking our products? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bubble rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-olive mb-1">Email Us</h3>
                <p className="text-muted-foreground">hello@buttonsandbubbles.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bubble rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-olive mb-1">Call Us</h3>
                <p className="text-muted-foreground">+44 (0) 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bubble rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-olive mb-1">Location</h3>
                <p className="text-muted-foreground">United Kingdom</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-display text-lg font-bold text-olive mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-sunshine rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <Facebook className="w-6 h-6 text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-sunshine rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <Instagram className="w-6 h-6 text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-sunshine rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <Twitter className="w-6 h-6 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-soft">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold text-olive mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-full border-2 border-border focus:border-bubble focus:outline-none transition-colors"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-olive mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-full border-2 border-border focus:border-bubble focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-olive mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-border focus:border-bubble focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
