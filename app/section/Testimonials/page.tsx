"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
  Quote,
  Users,
} from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Saumya Chopra",
    role: "Senior Manager | PhonePe",
    quote: "Avinash is a passionate and dedicated professional with strong technical acumen and a sharp problem-solving mindset. He excels at visualizing work, understanding customer pain points, and delivering impactful solutions. His hard work, initiative, and user-focused approach make him a valuable asset to any team."
  },
  {
    name: "Vasu Garg",
    role: "Associate Manager | PhonePe",
    quote: "Avinash is an excellent individual with a collaborative spirit and a strong commitment to continuous learning. He excels at creating solutions using various technologies, including the MERN stack, Spring Boot, building RESTful APIs, and Microservices, always selecting the most suitable tools for each project.New challenges excite him, and he approaches them with an innovative mindset, thoroughly analyzing current scenarios to develop outside-the-box solutions. I am confident that Avinash will achieve great things in his career."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            What Colleagues Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feedback from engineering leaders and team members I've worked with
          </p>
        </div>


        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => {
            const gradientColors = index === 0 ? 'from-blue-400 to-purple-500' : 'from-green-400 to-blue-500';
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 relative overflow-hidden hover:scale-105">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Floating orb */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${gradientColors} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}></div>

                <CardHeader className="relative">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${gradientColors} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    <Quote className={`w-6 h-6 text-transparent bg-gradient-to-r ${gradientColors} bg-clip-text`} />
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </CardContent>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColors} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}