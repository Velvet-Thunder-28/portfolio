"use client";

import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";
import { cn } from "../../lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Data Analyst Professional Certificate"
        description="Issued by Meta"
        link="https://www.credly.com/badges/4cb10e49-dd42-43b9-bdb1-0b6863c38e19/linked_in_profile"
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Databases for Data Scientists Certificate"
        description="Issued by University of Colorado Boulder"
        link="https://www.coursera.org/account/accomplishments/specialization/certificate/0GDXW55LP13C"
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Marketing Analytics Specialisation"
        description="Issued by Meta"
        link="https://www.coursera.org/account/accomplishments/professional-cert/certificate/3N2NT7ZFP3NE"
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Microsoft Excel Specialisation"
        description="Issued by Microsoft"
        link="https://www.coursera.org/account/accomplishments/professional-cert/certificate/OJ7U59RZ2CF0"
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<ArrowRight className="h-4 w-4" />}
        title="Data Analytics and Visualization Virtual Experience"
        description="Issued by Accenture"
        link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_qm8PiAR4w89fFQ6RQ_1688627418327_completion_certificate.pdf"
      />
    </ul>
  );
}

const handleClick = (link: string)=>{
  window.open(link, "_blank");
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  link:string;
}

const GridItem = ({ area, icon, title, description, link }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div
        className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 cursor-pointer"
        onClick={() => handleClick(link)}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
