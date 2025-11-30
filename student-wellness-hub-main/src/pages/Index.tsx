import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import ResourceCard from "@/components/ResourceCard";
import { Brain, Dumbbell, Apple, Heart, TrendingUp, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Your Journey to Better Health Starts Here
            </h1>
            <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Access comprehensive wellness resources, join supportive programs, and prioritize your mental and physical well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Link to="/resources">
                <Button size="lg" className="text-lg px-8">
                  Explore Resources
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Get Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-wellness-light flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-wellness" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="text-muted-foreground">Health Resources</p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-mentalHealth-light flex items-center justify-center">
                  <Users className="w-8 h-8 text-mentalHealth" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">10k+</p>
              <p className="text-muted-foreground">Active Students</p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-fitness-light flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-fitness" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">50+</p>
              <p className="text-muted-foreground">Wellness Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Wellness Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Access expert-curated resources across mental health, fitness, and nutrition to support your holistic well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={Brain}
              title="Mental Health Support"
              description="Access counseling services, mindfulness exercises, and stress management techniques."
              category="mental-health"
            />
            <ResourceCard
              icon={Dumbbell}
              title="Fitness Programs"
              description="Join workout classes, get personalized fitness plans, and track your progress."
              category="fitness"
            />
            <ResourceCard
              icon={Apple}
              title="Nutrition Guidance"
              description="Discover healthy recipes, meal planning tips, and nutrition consultations."
              category="nutrition"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/resources">
              <Button size="lg" variant="outline">
                View All Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-wellness-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heart className="w-16 h-16 text-wellness mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Prioritize Your Well-being?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students taking control of their health journey. Access personalized resources and connect with support services today.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="text-lg px-8">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 WellnessHub. Supporting student health and wellness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
