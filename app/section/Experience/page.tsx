"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ChevronRight, X, Calendar, MapPin, Users, Trophy } from "lucide-react";
import Image from "next/image";

interface DetailedWork {
  title: string;
  description: string;
  technologies: string[];
}

interface Experience {
  id: number;
  title: string;
  company: string;
  logo: string;
  duration: string;
  location: string;
  type: string;
  team: string;
  responsibilities: string[];
  detailedWork: DetailedWork[];
  achievements: string[];
}

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Visa",
      logo: "/visa.png",
      duration: "Apr 2025 – Present",
      location: "Bengaluru, India (Hybrid)",
      type: "Current",
      team: "Data Platform as a Service",
      responsibilities: [
        "Architecting and developing high-throughput payment processing systems handling millions of transactions",
        "Leading microservices design for enhanced security and fraud detection capabilities",
        "Implementing real-time monitoring and alerting systems for 99.99% uptime"
      ],
      detailedWork: [
        {
          title: "Access Manager",
          description: "Designed and implemented a distributed payment gateway system capable of processing 50,000+ transactions per second with sub-200ms latency. Built using Java Spring Boot, Apache Kafka, and Redis for caching.",
          technologies: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"]
        },
        {
          title: "Storage Manager",
          description: "Developed an AI-powered fraud detection microservice that reduced fraudulent transactions by 35%. Implemented real-time risk scoring using machine learning models and rule engines.",
          technologies: ["Python", "TensorFlow", "Apache Spark", "Elasticsearch", "Kibana"]
        },
        {
          title: "Showback & Observability",
          description: "Built comprehensive monitoring dashboards and alerting systems using Prometheus and Grafana. Implemented distributed tracing to reduce MTTR by 60%.",
          technologies: ["Prometheus", "Grafana", "Jaeger", "New Relic", "PagerDuty"]
        }
      ],
      achievements: [
        "Improved system throughput by 200% through optimization",
        "Reduced infrastructure costs by 30% through efficient resource utilization",
        "Achieved 99.99% uptime across all critical services"
      ]
    },
    {
      id: 2,
      title: "Product Solution Engineer",
      company: "PhonePe",
      logo: "/phonepe.png",
      duration: "Jul 2023 – Mar 2025",
      location: "Bengaluru, India",
      type: "Full-time",
      team: "Core Platform Engineering",
      responsibilities: [
        "Built scalable microservices serving 400M+ users with sub-100ms response times",
        "Designed and implemented CI/CD pipelines reducing deployment time by 70%",
        "Optimized database performance achieving 40% reduction in query response time"
      ],
      detailedWork: [
        {
          title: "Scalabele Notification Service for Ticket Management",
          description: "Developed core UPI payment processing services handling 10+ billion transactions monthly. Implemented circuit breakers, retry mechanisms, and graceful degradation patterns.",
          technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Apache Kafka", "Docker"]
        },
        {
          title: "Interactive Voice Response",
          description: "Built merchant onboarding and management platform supporting 30M+ merchants. Created RESTful APIs with comprehensive validation and rate limiting.",
          technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "AWS S3"]
        },
        {
          title: "Agent Assist Bot",
          description: "Implemented GitLab CI/CD pipelines with automated testing, security scanning, and blue-green deployments. Reduced deployment time from 2 hours to 20 minutes.",
          technologies: ["GitLab CI", "Docker", "Kubernetes", "Helm", "SonarQube", "Trivy"]
        },
        {
          title: "Unified Agent Console",
          description: "Optimized critical database queries and implemented proper indexing strategies. Migrated high-traffic tables to partitioned architecture for better performance.",
          technologies: ["MySQL", "MongoDB", "Redis", "Database Partitioning", "Query Optimization"]
        }
      ],
      achievements: [
        "Served 400M+ users with 99.9% availability",
        "Reduced API response times by 60% through optimization",
        "Led migration of 5 legacy services to microservices architecture",
        "Mentored 3 junior developers and conducted technical interviews"
      ]
    },
    {
      id: 3,
      title: "Graduate Trainee Intern",
      company: "PhonePe",
      logo: "/phonepe.png",
      duration: "Jan 2023 – Jun 2023",
      location: "Bengaluru, India",
      type: "Internship",
      team: "Platform Engineering",
      responsibilities: [
        "Developed RESTful APIs and services contributing to core payment infrastructure",
        "Implemented automated testing frameworks improving code coverage by 85%",
        "Collaborated on distributed systems design patterns and best practices"
      ],
      detailedWork: [
        {
          title: "Automation in Mutual Fuund Queries via Contextual Chatbot",
          description: "Built an automated payment reconciliation system to match transactions across multiple payment gateways. Processed millions of records daily with 99.98% accuracy.",
          technologies: ["Java", "Spring Boot", "MySQL", "Apache Kafka", "Cron Jobs"]
        },
        {
          title: "RBAC in Merchant Agent Console",
          description: "Developed comprehensive unit and integration testing framework using JUnit and TestContainers. Improved code coverage from 60% to 95% across team repositories.",
          technologies: ["JUnit 5", "Mockito", "TestContainers", "Maven", "Jacoco"]
        },
        {
          title: "API Documentation",
          description: "Created comprehensive API documentation using OpenAPI/Swagger specifications. Built interactive documentation portal for internal teams.",
          technologies: ["OpenAPI 3.0", "Swagger UI", "Postman", "Confluence"]
        }
      ],
      achievements: [
        "Successfully completed all sprint deliverables ahead of schedule",
        "Received 'Best Intern' award for outstanding performance",
        "Contributed to 8 production releases during internship",
        "Presented final project to senior leadership team"
      ]
    }
  ];

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'unset';
  };

  return (
      <>
        <section id="experience" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
                Professional Experience
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Building scalable systems and leading high-performance teams across fintech and payment platforms
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((experience, index) => (
                  <Card
                      key={experience.id}
                      className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer transform hover:-translate-y-1 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.2}s` }}
                      onClick={() => openModal(experience)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 bg-white rounded-lg border shadow-sm flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110">
                              <Image
                                  src={experience.logo}
                                  alt={`${experience.company} logo`}
                                  width={40}
                                  height={40}
                                  className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {experience.title}
                              </h3>
                              <p className="text-primary font-medium">
                                {experience.company}
                              </p>
                            </div>
                          </CardTitle>
                          <CardDescription className="text-base ml-16">
                        <span className="font-bold text-foreground">
                          {experience.duration}
                        </span>
                          </CardDescription>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge
                              variant={experience.type === "Current" ? "default" : "secondary"}
                              className="animate-pulse-subtle"
                          >
                            {experience.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Click for details</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="ml-16">
                      <ul className="space-y-3">
                        {experience.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start gap-3 opacity-0 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                              <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                              <span className="text-muted-foreground leading-relaxed">
                          {responsibility}
                        </span>
                            </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Modal with Liquid Glass Effect */}
        {selectedExperience && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fade-in">
              <div className="glass-modal rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
                {/* Modal Header */}
                <div className="sticky top-0 glass-header border-b border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg flex items-center justify-center overflow-hidden">
                      <Image
                          src={selectedExperience.logo}
                          alt={`${selectedExperience.company} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white/95">{selectedExperience.title}</h2>
                      <p className="text-blue-200 font-medium">{selectedExperience.company}</p>
                    </div>
                  </div>
                  <button
                      onClick={closeModal}
                      className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 text-white/80 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 glass-info-card p-3 rounded-lg">
                        <Calendar className="w-4 h-4 text-blue-300" />
                        <span className="text-sm text-white/90">
                      <strong>Duration:</strong> {selectedExperience.duration}
                    </span>
                      </div>
                      <div className="flex items-center gap-2 glass-info-card p-3 rounded-lg">
                        <MapPin className="w-4 h-4 text-blue-300" />
                        <span className="text-sm text-white/90">
                      <strong>Location:</strong> {selectedExperience.location}
                    </span>
                      </div>
                      <div className="flex items-center gap-2 glass-info-card p-3 rounded-lg">
                        <Users className="w-4 h-4 text-blue-300" />
                        <span className="text-sm text-white/90">
                      <strong>Team:</strong> {selectedExperience.team}
                    </span>
                      </div>
                    </div>

                    {/* Detailed Work */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-white/95">Detailed Work & Projects</h3>
                      <div className="space-y-6">
                        {selectedExperience.detailedWork.map((work, index) => (
                            <div key={index} className="glass-work-card border border-white/10 rounded-lg p-4">
                              <h4 className="font-semibold text-blue-300 mb-2">{work.title}</h4>
                              <p className="text-white/80 mb-3 leading-relaxed">{work.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {work.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} className="glass-tech-badge text-xs border-white/20 text-white/90 bg-white/10">
                                      {tech}
                                    </Badge>
                                ))}
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white/95">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedExperience.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-3 glass-achievement p-3 rounded-lg">
                              <ChevronRight className="w-4 h-4 mt-1 text-blue-300 flex-shrink-0" />
                              <span className="text-white/85 leading-relaxed">{achievement}</span>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}

        <style jsx>{`
          .modal-overlay {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(20, 30, 50, 0.9));
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
          }

          .glass-modal {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.9));
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
            position: relative;
          }

          .glass-modal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 25%,
            rgba(255, 255, 255, 0.01) 50%,
            rgba(255, 255, 255, 0.03) 75%,
            rgba(255, 255, 255, 0.08) 100%);
            border-radius: inherit;
            pointer-events: none;
          }

          .glass-header {
            background: rgba(30, 41, 59, 0.8);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            position: relative;
            z-index: 1;
          }

          .glass-info-card {
            background: rgba(51, 65, 85, 0.6);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            transition: all 0.3s ease;
          }

          .glass-info-card:hover {
            background: rgba(51, 65, 85, 0.75);
            transform: translateY(-2px);
          }

          .glass-work-card {
            background: rgba(51, 65, 85, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            transition: all 0.3s ease;
            position: relative;
          }

          .glass-work-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
            border-radius: inherit;
            pointer-events: none;
          }

          .glass-work-card:hover {
            background: rgba(51, 65, 85, 0.85);
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .glass-tech-badge {
            background: rgba(51, 65, 85, 0.8) !important;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            transition: all 0.3s ease;
          }

          .glass-tech-badge:hover {
            background: rgba(51, 65, 85, 0.9) !important;
            transform: scale(1.05);
          }

          .glass-achievement {
            background: rgba(51, 65, 85, 0.6);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            transition: all 0.3s ease;
          }

          .glass-achievement:hover {
            background: rgba(51, 65, 85, 0.75);
            border-color: rgba(255, 255, 255, 0.2);
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes pulse-subtle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out both;
          }

          .animate-slide-in {
            animation: slide-in 0.4s ease-out both;
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease-out both;
          }

          .animate-scale-in {
            animation: scale-in 0.3s ease-out both;
          }

          .animate-pulse-subtle {
            animation: pulse-subtle 2s ease-in-out infinite;
          }
        `}</style>
      </>
  );
}