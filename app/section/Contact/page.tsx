"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-black to-gray-800 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-black dark:text-slate-300 max-w-2xl mx-auto">
            Let's discuss your next project or explore opportunities to work together
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Ready to collaborate?</h3>
                <p className="text-muted-foreground">
                  I'm always interested in discussing new opportunities,
                  challenging projects, and innovative solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Email Me
                </Button>
                <Button variant="outline" size="lg" className="group border-2 border-blue-500 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="group border-2 border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}