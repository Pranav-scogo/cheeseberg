"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Shield, 
  Settings, 
  ArrowRight,
  Calendar,
  Bot
} from "lucide-react";

const navigationItems = [
  { name: "Product", href: "#product", hasDropdown: true },
  { name: "Solutions", href: "#solutions", hasDropdown: true },
  { name: "Security", href: "#security" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources", hasDropdown: true }
];

const productDropdown = [
  { name: "Agentic AI", description: "Intelligent automation", icon: Zap },
  { name: "Security", description: "Enterprise-grade protection", icon: Shield },
  { name: "Integrations", description: "Connect your tools", icon: Settings }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookDemo = () => {
    console.log("Booking demo via HubSpot API");
    alert("Demo booking would be processed via HubSpot API");
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-border py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/90 to-primary rounded-xl flex items-center justify-center shadow-sm">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-primary">Iceberg</div>
                <div className="text-xs text-muted-foreground hidden sm:block">AI-Powered IT Support</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-border p-2 animate-in fade-in-0 zoom-in-95 duration-200">
                      {item.name === "Product" && productDropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <a
                            key={dropdownItem.name}
                            href="#"
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                          >
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{dropdownItem.name}</div>
                              <div className="text-xs text-muted-foreground">{dropdownItem.description}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Badge variant="secondary" className="text-xs px-3 py-1">
                Free Trial Available
              </Badge>
              <Button variant="outline" size="sm" className="rounded-full">
                Try Demo
              </Button>
              <Button 
                size="sm" 
                className="rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-300 shadow-md hover:shadow-lg group"
                onClick={handleBookDemo}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-border animate-in slide-in-from-top duration-200">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full justify-center">
                  Try Demo
                </Button>
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-primary to-primary/90"
                  onClick={handleBookDemo}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}