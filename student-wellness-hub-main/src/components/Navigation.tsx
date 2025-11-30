import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Heart className="w-6 h-6 text-wellness" />
            <span>WellnessHub</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Resources
            </NavLink>
            <NavLink
              to="/programs"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Programs
            </NavLink>
            <NavLink
              to="/support"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Support
            </NavLink>
            <NavLink to="/dashboard">
              <Button variant="default" size="sm">Dashboard</Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <NavLink
              to="/"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </NavLink>
            <NavLink
              to="/programs"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </NavLink>
            <NavLink
              to="/support"
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </NavLink>
            <NavLink to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" size="sm" className="w-full">
                Dashboard
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
