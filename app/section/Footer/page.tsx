"use client";

import { Button } from "@/app/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>
          <div className="h-px bg-border max-w-md mx-auto" />
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Av!. All rights reserved.


          </p>
        </div>
      </div>
    </footer>
  );
}