"use client";

import { Baby, Binoculars, Box, Code2, Goal, Lock, MapPin, Search, Settings, Sparkles, Target } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowingEffect";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Baby className="h-8 w-8 text-black dark:text-neutral-400" />}
        title="Me"
        description="My name is Pasindu Nimsara Dissanayake. 22 years old Undergraduate in Computer Science."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<MapPin className="h-8 w-8 text-black dark:text-neutral-400" />}
        title="My Development Journey"
        description="I'm a passionate developer with a love for crafting digital experiences. From tinkering with code in my teens to building scalable web apps."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Code2 className="h-8 w-8 text-black dark:text-neutral-400" />}
        title="Technical Skills"
        description={
          <div>
            <p>Proficient in modern web technologies with a knack for problem-solving.</p>
            <ul className="list-disc pl-5 mt-4">
              <li>React, TypeScript, Node.js</li>
              <li>Tailwind CSS, UI/UX Design</li>
              <li>API Development & Integration</li>
            </ul>
          </div>
        }
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Goal className="h-8 w-8 text-black dark:text-neutral-400" />}
        title="Goals"
        description="Will see..."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Binoculars className="h-8 w-8 text-black dark:text-neutral-400" />}
        title="Beyond the Code"
        description="Driven by creativity and impact, I think i'm a good artist and enjoy photography, singing and traveling to recharge and inspire my work."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
