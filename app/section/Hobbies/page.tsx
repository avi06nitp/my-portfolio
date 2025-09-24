"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import {
  Trophy,
  Zap,
  Code,
  Heart,
} from "lucide-react";

const HOBBIES = [
  {
    name: "Badminton",
    icon: Trophy,
    tagline: "District Champion",
    stat: "180 km/h",
    statLabel: "serve speed",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Running",
    icon: Zap,
    tagline: "Marathon Runner",
    stat: "3:47",
    statLabel: "personal best",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Chess",
    icon: Code,
    tagline: "FIDE Rated",
    stat: "1847",
    statLabel: "rating",
    color: "from-purple-400 to-pink-500"
  },
  {
    name: "MMA",
    icon: Heart,
    tagline: "Blue Belt BJJ",
    stat: "6x",
    statLabel: "weekly training",
    color: "from-red-400 to-pink-500"
  }
];

export default function Hobbies() {
  return (
      <section>
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
              Beyond Code
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Where passion meets performance
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {HOBBIES.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                  <Card
                      key={hobby.name}
                      className="group relative overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card dark:bg-card"
                  >

                    <CardContent className="p-8 relative z-10">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${hobby.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                        {hobby.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
                        {hobby.tagline}
                      </p>

                      {/* Stat */}
                      <div className="space-y-1">
                        <div className={`text-3xl font-black bg-gradient-to-r ${hobby.color} bg-clip-text text-transparent`}>
                          {hobby.stat}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {hobby.statLabel}
                        </div>
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