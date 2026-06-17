import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard.jsx';

const teamMembers = [
  {
    name: "Muhd Shauqi",
    role: "Project Manager",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/208ba1702fe118b67428a2d766788abe.png"
  },
  {
    name: "Muhd Haziq",
    role: "Chief Editor",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/0b0f94abcde83e6e607a92dcf2d64bea.png"
  },
  {
    name: "Marsukka",
    role: "Web Developer",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/5d04db7057c2171c1306944c3cfb839b.png"
  },
  {
    name: "Daniel Dean",
    role: "Editor",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/354a2e25490ba9a78bf5dec6a5534eba.png"
  },
  {
    name: "Muhd Farik",
    role: "Sales Executive",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/a6fce8da6ac0b7a339c2c3db326e0ccd.png"
  },
  {
    name: "Norafieza",
    role: "Operation Manager",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/15752b9a296d96465246b290809251d4.png"
  },
  {
    name: "Puteri Intan",
    role: "Sales Executive",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/4578030f6ef9bf3a94d5086977198cd6.png"
  },
  {
    name: "Ahmad Harith",
    role: "Chief Videographer",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/96a4187eb0cbb4618ef018da281b9cf9.png"
  },
  {
    name: "Luqman",
    role: "Videographer",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/9389cc5ce4189eb1a064d0cc41e1d729.png"
  },
  {
    name: "Nor Farzana",
    role: "Sales Manager",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/bb41539818f5c219ef00b1752ac16069.png"
  },
  {
    name: "Wan Marzuki",
    role: "Marketing Head",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/b6a07c0cb0339d71de00bb5ce650013d.png"
  },
  {
    name: "Muhd Najmi",
    role: "Project Manager",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/4c64fae68234291a5b12547722e71c1b.png"
  },
  {
    name: "Razali Gany",
    role: "Public Relation Head",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/295a313382d0d2849f693f15773e5062.png"
  },
  {
    name: "Wan Shahid",
    role: "Team Leader",
    image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/1a8db7324cfe36cf857b3d01416940b6.png"
  }
];

export default function OurTeamSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-brandkraf-purple/5 blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Our Team
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}