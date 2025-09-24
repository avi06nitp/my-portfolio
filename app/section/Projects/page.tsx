"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  ExternalLink,
  Server,
  Database,
  Zap,
} from "lucide-react";

const PROJECTS = [
  {
    title: "atomiclabs.com",
    description: "Ed-tech Platform",
    details: "Comprehensive ed-tech platform teaching software engineering concepts to 1000+ students. Built with microservices architecture for scalability and real-time learning analytics.",
    technologies: ["Next.Js", "Spring Boot", "MySQL", "AWS"],
    icon: Server,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "irl.ai",
    description: "Personal AI Assistant",
    details: "AI-powered personal assistant tools leveraging machine learning for productivity optimization. Handles 1M+ API calls monthly with intelligent routing and caching.",
    technologies: ["Next.Js","Java", "Spring Boot", "Redis","MySQL","OpenAI"],
    icon: Zap,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "nutreno.fin",
    description: "Algo Trading Platform",
    details: "High-frequency algorithmic trading data tools processing real-time market data. Engineered for sub-millisecond latency with distributed computing architecture.",
    technologies: ["Next.Js","FastAPI","WebSockets","InfluxDB", "Spring Boot", "Kafka"],
    icon: Database,
    color: "from-purple-400 to-pink-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Real-world applications serving thousands of users and processing millions of requests
            </p>
          </div>


        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105">

                <CardHeader className="relative">
                  <div className={`w-full h-48 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span className="text-foreground font-bold">
                      {project.title}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 text-xs shadow-md">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}