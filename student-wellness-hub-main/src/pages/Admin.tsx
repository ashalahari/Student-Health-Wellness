import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, BookOpen, Activity, TrendingUp, Plus, Edit, Trash2 } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage resources and track platform metrics</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Resource
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Users}
              label="Total Students"
              value="10,432"
              trend="+342 this month"
            />
            <StatCard
              icon={BookOpen}
              label="Resources"
              value="526"
              trend="+18 added"
            />
            <StatCard
              icon={Activity}
              label="Active Programs"
              value="52"
              trend="8 new this week"
            />
            <StatCard
              icon={TrendingUp}
              label="Engagement Rate"
              value="78%"
              trend="+5% from last month"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Resources Management */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Resources</CardTitle>
                  <CardDescription>Manage wellness resources and content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { title: "Stress Management Guide", category: "Mental Health", views: 1245, status: "Published" },
                        { title: "Beginner Workout Plan", category: "Fitness", views: 892, status: "Published" },
                        { title: "Healthy Meal Prep Tips", category: "Nutrition", views: 1567, status: "Published" },
                        { title: "Meditation Techniques", category: "Mental Health", views: 734, status: "Draft" },
                        { title: "Advanced HIIT Training", category: "Fitness", views: 456, status: "Published" },
                      ].map((resource, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{resource.title}</TableCell>
                          <TableCell>
                            <span className="text-xs px-2 py-1 rounded-full bg-wellness-light text-wellness">
                              {resource.category}
                            </span>
                          </TableCell>
                          <TableCell>{resource.views}</TableCell>
                          <TableCell>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              resource.status === "Published" 
                                ? "bg-wellness-light text-wellness" 
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {resource.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button size="sm" variant="ghost">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Usage Metrics */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Metrics</CardTitle>
                  <CardDescription>Platform activity overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Mental Health</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-mentalHealth h-2 rounded-full" style={{ width: "42%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Fitness</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-fitness h-2 rounded-full" style={{ width: "35%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Nutrition</span>
                      <span className="text-sm font-medium">23%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-nutrition h-2 rounded-full" style={{ width: "23%" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Avg. Session Duration</span>
                    <span className="font-semibold">12m 34s</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">Support Requests</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">New Signups Today</span>
                    <span className="font-semibold">45</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
