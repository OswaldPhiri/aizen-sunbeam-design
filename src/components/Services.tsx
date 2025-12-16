import { Code, Palette, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web & Application Development",
      description: "Responsive, high-performance websites and apps tailored to your business needs—from marketing sites to complex internal tools.",
      features: [
        "Portfolio websites",
        "Business websites",
        "E-commerce systems",
        "Web apps (dashboards, internal tools)",
        "Mobile-friendly UI designs"
      ]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Visual identities and marketing assets that keep your brand consistent across every touchpoint.",
      features: [
        "Branding (logos, identities, style guides)",
        "Posters, flyers, social media content",
        "Business cards",
        "Print design"
      ]
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Hands-on support that keeps your systems running smoothly, from hardware fixes to network optimization.",
      features: [
        "Computer hardware repairs",
        "Software troubleshooting",
        "Windows/MacOS install & config",
        "Network setup (WiFi, routers, LAN)",
        "Diagnostics & optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to help your business thrive in the digital age
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 animate-slide-up bg-background"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with technology?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-button hover:shadow-lg hover:scale-105"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};