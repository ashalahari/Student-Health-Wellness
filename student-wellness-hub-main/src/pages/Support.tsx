import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Clock, MapPin, AlertCircle } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Support Services
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to help. Reach out anytime for support with your health and wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-6 bg-destructive/10 border-b border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertCircle className="w-5 h-5 text-destructive" />
            <p className="text-sm md:text-base text-foreground">
              <strong>Crisis Support:</strong> If you're in immediate danger, call 911 or the National Suicide Prevention Lifeline at 988
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-mentalHealth-light flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-mentalHealth" />
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Talk to a wellness counselor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground font-semibold">1-800-WELLNESS</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 8am - 8pm</span>
                </div>
                <Button className="w-full mt-4">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-wellness-light flex items-center justify-center mb-3">
                  <MessageCircle className="w-6 h-6 text-wellness" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Get instant help via chat</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Chat with our support team in real-time
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Available 24/7</span>
                </div>
                <Button variant="outline" className="w-full mt-4">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-fitness-light flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-fitness" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send us your questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground font-semibold">support@wellnesshub.edu</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
                <Button variant="outline" className="w-full mt-4">Send Email</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-nutrition-light flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-nutrition" />
                </div>
                <CardTitle>In-Person Support</CardTitle>
                <CardDescription>Visit our wellness center</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Student Wellness Center, Building A
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 9am - 5pm</span>
                </div>
                <Button variant="outline" className="w-full mt-4">Book Appointment</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Additional Support Resources
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">National Suicide Prevention Lifeline</CardTitle>
                  <CardDescription>24/7 free and confidential support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Call or text 988</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Text Line</CardTitle>
                  <CardDescription>Text-based crisis support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Text HOME to 741741</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SAMHSA National Helpline</CardTitle>
                  <CardDescription>Substance abuse and mental health services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">1-800-662-4357</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
