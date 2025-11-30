import Navigation from "@/components/Navigation";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Dumbbell, Apple, HeartPulse, Sparkles, Wind, BookOpen, Phone, Salad, Activity } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Health & Wellness Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive library of resources designed to support every aspect of your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mental">Mental</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResourceCard
                  icon={Brain}
                  title="Counseling Services"
                  description="Professional mental health support and one-on-one counseling sessions."
                  category="mental-health"
                />
                <ResourceCard
                  icon={Sparkles}
                  title="Mindfulness & Meditation"
                  description="Guided meditation sessions and mindfulness techniques for stress relief."
                  category="mental-health"
                />
                <ResourceCard
                  icon={Wind}
                  title="Stress Management"
                  description="Learn effective strategies to manage academic and personal stress."
                  category="mental-health"
                />
                <ResourceCard
                  icon={Dumbbell}
                  title="Fitness Classes"
                  description="Group workout sessions including yoga, HIIT, and strength training."
                  category="fitness"
                />
                <ResourceCard
                  icon={Activity}
                  title="Personal Training"
                  description="One-on-one fitness coaching tailored to your goals and fitness level."
                  category="fitness"
                />
                <ResourceCard
                  icon={HeartPulse}
                  title="Cardio Programs"
                  description="Running clubs, cycling groups, and cardiovascular fitness plans."
                  category="fitness"
                />
                <ResourceCard
                  icon={Apple}
                  title="Nutrition Counseling"
                  description="Personalized nutrition advice from registered dietitians."
                  category="nutrition"
                />
                <ResourceCard
                  icon={Salad}
                  title="Meal Planning"
                  description="Healthy meal prep guides and balanced diet recommendations."
                  category="nutrition"
                />
                <ResourceCard
                  icon={BookOpen}
                  title="Nutrition Workshops"
                  description="Educational sessions on healthy eating and dietary wellness."
                  category="nutrition"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="mental" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResourceCard
                  icon={Brain}
                  title="Counseling Services"
                  description="Professional mental health support and one-on-one counseling sessions."
                  category="mental-health"
                />
                <ResourceCard
                  icon={Sparkles}
                  title="Mindfulness & Meditation"
                  description="Guided meditation sessions and mindfulness techniques for stress relief."
                  category="mental-health"
                />
                <ResourceCard
                  icon={Wind}
                  title="Stress Management"
                  description="Learn effective strategies to manage academic and personal stress."
                  category="mental-health"
                />
                <ResourceCard
                  icon={Phone}
                  title="Crisis Support"
                  description="24/7 crisis hotline and emergency mental health resources."
                  category="mental-health"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="fitness" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResourceCard
                  icon={Dumbbell}
                  title="Fitness Classes"
                  description="Group workout sessions including yoga, HIIT, and strength training."
                  category="fitness"
                />
                <ResourceCard
                  icon={Activity}
                  title="Personal Training"
                  description="One-on-one fitness coaching tailored to your goals and fitness level."
                  category="fitness"
                />
                <ResourceCard
                  icon={HeartPulse}
                  title="Cardio Programs"
                  description="Running clubs, cycling groups, and cardiovascular fitness plans."
                  category="fitness"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="nutrition" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResourceCard
                  icon={Apple}
                  title="Nutrition Counseling"
                  description="Personalized nutrition advice from registered dietitians."
                  category="nutrition"
                />
                <ResourceCard
                  icon={Salad}
                  title="Meal Planning"
                  description="Healthy meal prep guides and balanced diet recommendations."
                  category="nutrition"
                />
                <ResourceCard
                  icon={BookOpen}
                  title="Nutrition Workshops"
                  description="Educational sessions on healthy eating and dietary wellness."
                  category="nutrition"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Resources;
