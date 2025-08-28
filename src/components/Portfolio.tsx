import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import webPortfolio from "@/assets/portfolio-web1.jpg";
import mobilePortfolio from "@/assets/portfolio-mobile1.jpg";
import brandingPortfolio from "@/assets/portfolio-branding1.jpg";
import softwarePortfolio from "@/assets/portfolio-software1.jpg";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern online store with payment integration and inventory management",
      image: webPortfolio,
      tech: ["React", "Node.js", "Stripe API"]
    },
    {
      id: 2,
      title: "Fintech Mobile App",
      category: "Mobile Development",
      description: "Secure financial management app with real-time transactions",
      image: mobilePortfolio,
      tech: ["React Native", "Firebase", "Payment APIs"]
    },
    {
      id: 3,
      title: "Brand Identity Kit",
      category: "Graphic Design",
      description: "Complete branding package with logo, colors, and marketing materials",
      image: brandingPortfolio,
      tech: ["Adobe Creative Suite", "Brand Strategy"]
    },
    {
      id: 4,
      title: "Business Dashboard",
      category: "Software Development",
      description: "Analytics dashboard for business intelligence and reporting",
      image: softwarePortfolio,
      tech: ["Vue.js", "Python", "PostgreSQL"]
    },
    // Additional placeholder projects
    {
      id: 5,
      title: "Restaurant Website",
      category: "Web Development",
      description: "Responsive website with online ordering and reservation system",
      image: webPortfolio,
      tech: ["WordPress", "WooCommerce", "Custom CSS"]
    },
    {
      id: 6,
      title: "Marketing Campaign",
      category: "Graphic Design",
      description: "Social media graphics and promotional materials for product launch",
      image: brandingPortfolio,
      tech: ["Photoshop", "Illustrator", "Social Media"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our latest projects and the innovative solutions we've delivered for our clients
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-card animate-scale-in bg-background"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-semibold px-8 py-4 text-lg shadow-button hover:shadow-lg transition-all duration-300"
          >
            See Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};