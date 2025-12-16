import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Smouldering Charcoal",
      description: "An interactive story website that takes you on a journey through the book 'Smouldering Charcoal' by Tiyambe Zeleza - a Malawian literary classic.",
      tech: ["React", "TypeScript", "Interactive Storytelling"],
      liveUrl: "https://v0-interactive-story-website-steel.vercel.app/",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
    },
    {
      title: "BudgetMate",
      description: "A friendly personal finance dashboard that helps you track spending, log transactions, and stay on budget with a clean UI.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://prompt-budget-spark.lovable.app",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=400&fit=crop"
    },
    {
      title: "Unity Investments",
      description: "Real estate and architectural services site showcasing plots, construction supervision, and quantity surveying for Malawian clients.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://unityinvestments.vercel.app/",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=400&fit=crop"
    },
    {
      title: "AI Chat Simulator",
      description: "An interactive AI chat simulator built with modern web technologies, demonstrating real-time conversation capabilities.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://ai-chatsim.vercel.app/",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      title: "FaithfulFlock",
      description: "Church management system built with Laravel for managing members, events, and communications.",
      tech: ["Laravel", "PHP", "MySQL"],
      liveUrl: "https://faithful-flock-hub.lovable.app/",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "BoostSEO",
      description: "Web application for optimizing website SEO with advanced analytics, keyword tracking, and performance monitoring.",
      tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
      liveUrl: "https://boostseo-growth-hub.lovable.app/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "CVCreator",
      description: "TypeScript-based resume builder allowing users to create professional CVs with multiple templates.",
      tech: ["TypeScript", "React", "CSS"],
      liveUrl: "https://cvcreator-alpha.vercel.app/",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    },
    {
      title: "Agri Smart Hub Guide",
      description: "A comprehensive mobile app for farmers.",
      tech: ["React Native", "TypeScript", "AI", "Node.js", "Offline Support", "Multi-language"],
      liveUrl: "https://agri-smart-hub-guide.lovable.app/",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
    }
  ];

  const navigateToProject = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our latest projects and the innovative solutions we've delivered for our clients
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <Card
                role="button"
                tabIndex={0}
                onClick={() => navigateToProject(project.liveUrl)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    navigateToProject(project.liveUrl);
                  }
                }}
                className="h-full flex flex-col bg-background hover:shadow-lg border border-border rounded-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <div className="relative overflow-hidden aspect-video rounded-t-xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <Button
                      size="sm"
                      className="font-bold text-sm shadow-lg"
                      onClick={(event) => {
                        event.stopPropagation();
                        navigateToProject(project.liveUrl);
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live Demo
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
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

