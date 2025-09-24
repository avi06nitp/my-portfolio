"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Award,
  Database,
  Server,
  Zap,
} from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "AWS Solutions Architect",
    level: "Associate Level",
    description: "Advanced cloud architecture design, security, and scalability best practices",
    skills: ["EC2", "Lambda", "RDS", "CloudFormation"],
    color: "from-orange-400 to-red-500",
    icon: Award
  },
  {
    title: "AWS Data Engineer",
    level: "Associate Level",
    description: "Data pipeline design, ETL processes, and big data analytics on AWS",
    skills: ["Kinesis", "Glue", "Redshift", "EMR"],
    color: "from-blue-400 to-cyan-500",
    icon: Database
  },
  {
    title: "Databricks Data Engineer",
    level: "Professional Certification",
    description: "Apache Spark, Delta Lake, and unified analytics platform expertise",
    skills: ["Spark", "Delta Lake", "MLflow", "Databricks SQL"],
    color: "from-red-400 to-pink-500",
    icon: Zap
  },
  {
    title: "Linux Foundation",
    level: "Certified Systems Administrator",
    description: "Advanced Linux system administration, security, and performance tuning",
    skills: ["Shell Scripting", "Security", "Networking", "Performance"],
    color: "from-green-400 to-emerald-500",
    icon: Server
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          Professional Certifications
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Industry-recognized credentials demonstrating expertise in cloud architecture and data engineering
        </p>
      </div>


        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = cert.icon;

            return (
              <Card key={cert.title} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Floating orb */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${cert.color} rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500`}></div>

                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 bg-gradient-to-r ${cert.color} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className={`text-lg bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-bold`}>{cert.title}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {cert.level}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} className={`bg-gradient-to-r ${cert.color} text-white hover:scale-105 transition-all duration-300 text-xs shadow-md`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}