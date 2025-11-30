import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, Heart, TrendingUp, Target, Calendar, Award } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex!</h1>
              <p className="text-muted-foreground mt-1">Here's your wellness overview</p>
            </div>
            <Button>View Profile</Button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Activity}
              label="Active Days"
              value="12"
              trend="+3 from last week"
            />
            <StatCard
              icon={Heart}
              label="Wellness Score"
              value="85%"
              trend="+5% this month"
            />
            <StatCard
              icon={Target}
              label="Goals Completed"
              value="8/10"
              trend="2 remaining"
            />
            <StatCard
              icon={Award}
              label="Achievements"
              value="24"
              trend="+2 new badges"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Programs */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Programs</CardTitle>
                  <CardDescription>Your current wellness programs and progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">30-Day Mindfulness Challenge</p>
                        <p className="text-sm text-muted-foreground">12 of 30 days completed</p>
                      </div>
                      <span className="text-sm font-medium text-wellness">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Strength Training Bootcamp</p>
                        <p className="text-sm text-muted-foreground">3 of 8 weeks completed</p>
                      </div>
                      <span className="text-sm font-medium text-wellness">38%</span>
                    </div>
                    <Progress value={38} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Healthy Eating Foundations</p>
                        <p className="text-sm text-muted-foreground">4 of 6 weeks completed</p>
                      </div>
                      <span className="text-sm font-medium text-wellness">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Your latest wellness activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { activity: "Morning Meditation", time: "Today, 7:00 AM", category: "Mental Health" },
                      { activity: "Gym Workout", time: "Yesterday, 6:30 PM", category: "Fitness" },
                      { activity: "Nutrition Consultation", time: "2 days ago", category: "Nutrition" },
                      { activity: "Yoga Class", time: "3 days ago", category: "Fitness" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div>
                          <p className="font-medium">{item.activity}</p>
                          <p className="text-sm text-muted-foreground">{item.time}</p>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-wellness-light text-wellness">
                          {item.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Upcoming & Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled wellness activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Group Therapy", date: "Tomorrow", time: "2:00 PM" },
                    { title: "Personal Training", date: "Mar 1", time: "5:30 PM" },
                    { title: "Nutrition Workshop", date: "Mar 3", time: "12:00 PM" },
                  ].map((session, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-10 h-10 rounded-lg bg-wellness-light flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-wellness" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{session.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {session.date} at {session.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Progress Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Join New Program
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
