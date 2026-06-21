import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard.jsx';

// Grouped by department for a tidy, scannable org structure.
const teamGroups = [
  {
    department: "Leadership & Management",
    members: [
      { name: "Wan Marzuki", role: "Marketing Head", image: "/team/wan-marzuki.webp" },
      { name: "Norafieza", role: "Operation Manager", image: "/team/norafieza.webp" },
      { name: "Razali Gany", role: "Public Relations Head", image: "/team/razali-gany.webp" },
      { name: "Wan Shahid", role: "Team Leader", image: "/team/wan-shahid.webp" },
      { name: "Muhd Shauqi", role: "Project Manager", image: "/team/muhd-shauqi.webp" },
      { name: "Muhd Najmi", role: "Project Manager", image: "/team/muhd-najmi.webp" },
    ],
  },
  {
    department: "Creative & Production",
    members: [
      { name: "Ahmad Harith", role: "Chief Videographer", image: "/team/ahmad-harith.webp" },
      { name: "Muhd Haziq", role: "Chief Editor", image: "/team/muhd-haziq.webp" },
      { name: "Luqman", role: "Videographer", image: "/team/luqman.webp" },
      { name: "Daniel Dean", role: "Editor", image: "/team/daniel-dean.webp" },
      { name: "Marsukka", role: "Web Developer", image: "/team/marsukka.webp" },
    ],
  },
  {
    department: "Sales",
    members: [
      { name: "Nor Farzana", role: "Sales Manager", image: "/team/nor-farzana.webp" },
      { name: "Muhd Farik", role: "Sales Executive", image: "/team/muhd-farik.webp" },
      { name: "Puteri Intan", role: "Sales Executive", image: "/team/puteri-intan.webp" },
    ],
  },
];

export default function OurTeamSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-brandkraf-purple/5 blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="chip-brand mb-4"
          >
            The people
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Our <span className="text-gradient">team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Meet the passionate creatives, strategists, and visionaries driving digital growth for our partners every single day.
          </motion.p>
        </div>

        <div className="space-y-16">
          {teamGroups.map((group) => (
            <div key={group.department}>
              <div className="mb-8 flex items-center gap-4">
                <h3 className="whitespace-nowrap text-xl font-bold md:text-2xl">{group.department}</h3>
                <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {group.members.length} {group.members.length === 1 ? 'member' : 'members'}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member, idx) => (
                  <TeamMemberCard key={member.name} member={member} index={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}