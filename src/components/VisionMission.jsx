import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Rocket, Star } from 'lucide-react';

const VisionMission = () => {
  const cards = [
    {
      icon: <Eye className="w-8 h-8 text-[#FACC15]" strokeWidth={1.5} />,
      title: "Vision",
      desc: "To become the industry's leading financial product distribution house by empowering individuals, entrepreneurs, MSMEs and Large business with our wide range of financial products and services."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#FACC15]" strokeWidth={1.5} />,
      title: "Mission",
      desc: "Our mission is to make financial services affordable and accessible to every individual or entrepreneurs who is in need. Moreover, our financial services are customized as per customers."
    },
    {
      icon: <Star className="w-8 h-8 text-[#FACC15]" strokeWidth={1.5} fill="#FACC15" />,
      title: "Values",
      desc: "We value Teamwork, Professional Excellence and Stewardship, Employee focus, Fairness, Communication, Competence, Integrity, Adaptability, Collaborative Relationships, and Humor."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-[#0e1a30] rounded-[16px] p-6 shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#122240] to-[#0e1a30] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-row items-start gap-5">
                <div className="shrink-0 w-16 h-16 rounded-full bg-black/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-[17px] font-poppins font-bold text-[#FACC15] mb-1.5 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-white/90 leading-[1.6] font-normal text-[13px]">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
