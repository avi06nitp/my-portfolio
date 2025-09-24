"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Code,
  Database,
  Server,
  Zap,
} from "lucide-react";

const SKILLS_CATEGORIES = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C++", "Java", "Python", "JavaScript"],
    color: "from-blue-400 to-cyan-500",
    description: "Core programming languages"
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["Spring Boot", "FastAPI", "React", "Next.js"],
    color: "from-blue-500 to-blue-600",
    description: "Full-stack development frameworks"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "NoSQL", "Redis"],
    color: "from-purple-400 to-pink-500",
    description: "Data storage and management"
  },
  {
    title: "DevOps & Tools",
    icon: Zap,
    skills: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
    color: "from-yellow-400 to-orange-500",
    description: "Infrastructure and deployment"
  }
];

const SPECIALIZATIONS = [
  "RabbitMQ", "Apache Kafka", "Redis", "CDN Optimization", "MCP Servers",
  "High-Frequency Trading", "Microservices", "System Architecture", "Performance Tuning"
];

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Building tomorrow's systems with today's cutting-edge technologies.
            Specialized in high-performance, scalable architectures.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {SKILLS_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
                <Card
                    key={category.title}
                    className="group relative overflow-hidden backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-xl"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >

                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      {category.title}
                    </CardTitle>
                    <CardDescription>
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                          <Badge
                              key={skill}
                              className={`bg-gradient-to-r ${category.color} hover:scale-105 text-white transition-all duration-300 hover:shadow-lg`}
                              style={{ animationDelay: `${skillIndex * 0.05}s` }}
                          >
                            {skill}
                          </Badge>
                      ))}
                    </div>
                  </CardContent>

                </Card>
            );
          })}
        </div>

        <Card className="group hover:shadow-lg transition-shadow relative overflow-hidden">

          <CardHeader className="relative">
            <CardTitle className="text-center text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Specializations</CardTitle>
            <CardDescription className="text-center">
              Advanced expertise in cutting-edge technologies
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex flex-wrap justify-center gap-3">
              {SPECIALIZATIONS.map((spec, specIndex) => (
                <Badge
                  key={spec}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${specIndex * 0.05}s` }}
                >
                  {spec}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}