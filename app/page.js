"use client"
import Hero from "../components/hero";
import { cn } from "@/lib/utils";
import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {navItems} from "../data/index";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-slate-950 via-blue-850 to-gray-900">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Footer />
    </main>
  );
}


