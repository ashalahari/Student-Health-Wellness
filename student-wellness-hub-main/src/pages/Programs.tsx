import Navigation from "@/components/Navigation";
import ProgramCard from "@/components/ProgramCard";

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Wellness Programs
            </h1>
            <p className="text-xl text-muted-foreground">
              Join structured programs designed to help you build lasting healthy habits and achieve your wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="30-Day Mindfulness Challenge"
              description="Build a consistent meditation practice with daily guided sessions and community support."
              duration="30 days"
              participants={245}
              category="Mental Health"
            />
            <ProgramCard
              title="Strength Training Bootcamp"
              description="8-week progressive strength training program for all fitness levels."
              duration="8 weeks"
              participants={156}
              category="Fitness"
            />
            <ProgramCard
              title="Healthy Eating Foundations"
              description="Learn the basics of nutrition and develop sustainable eating habits."
              duration="6 weeks"
              participants={198}
              category="Nutrition"
            />
            <ProgramCard
              title="Stress Less Workshop Series"
              description="Weekly workshops on stress management techniques and coping strategies."
              duration="4 weeks"
              participants={312}
              category="Mental Health"
            />
            <ProgramCard
              title="Morning Yoga Flow"
              description="Daily morning yoga sessions to energize your day and improve flexibility."
              duration="Ongoing"
              participants={428}
              category="Fitness"
            />
            <ProgramCard
              title="Plant-Based Nutrition"
              description="Discover the benefits of plant-based eating with recipes and meal plans."
              duration="4 weeks"
              participants={167}
              category="Nutrition"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
