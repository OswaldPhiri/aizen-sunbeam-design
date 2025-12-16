import { Award, Users, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "Working closely with clients to understand and exceed expectations"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering exceptional results with attention to detail and excellence"
    },
    {
      icon: Target,
      title: "Results",
      description: "Focused on measurable outcomes that drive business growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About AizenTech
            </h2>
            <div className="w-24 h-1 bg-primary mb-8 rounded-full"></div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">AizenTech</strong> is a Malawian startup dedicated to empowering small businesses 
              and individuals with affordable, modern tech solutions. Founded by <strong className="text-primary">Oswald Phiri</strong>, 
              we combine creativity with innovation to deliver impactful results.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in Lilongwe, we understand the unique challenges facing businesses in Malawi and across 
              Africa. Our mission is to bridge the digital divide by providing world-class technology services 
              at prices that make sense for local businesses.
            </p>
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8">
              <Card className="border-2 border-primary/10 shadow-card bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To build a sleek digital presence and solid IT support system for small businesses in Malawi and beyond.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10 shadow-card bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deliver high-quality web apps, graphics, and technical support with a personal touch, modern tools, and future-ready thinking.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="font-semibold text-foreground">Founded in Malawi</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="font-semibold text-foreground">Local Expertise</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="font-semibold text-foreground">Affordable Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="font-semibold text-foreground">Global Standards</span>
              </div>
            </div>
          </div>

          {/* Founder Card */}
          <div className="animate-slide-up">
            <Card className="bg-background border-2 border-primary/20 shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">OP</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Oswald Phiri</h3>
                <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Technology should empower everyone, not just the privileged few. At AizenTech, 
                  we're committed to making world-class digital solutions accessible to businesses 
                  across Malawi and beyond."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 bg-background border-0 shadow-card animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};