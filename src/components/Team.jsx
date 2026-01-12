import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import joyce from '../assets/team/joyce.png';
import lai from '../assets/team/lai.jpeg';
import xing from '../assets/team/xing.png';
import kor from '../assets/team/kor.jpg';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teamMembers = [
    {
      name: 'Joyce Puyang Maurice Utap ',
      methodology: 'User 1 Testing',
      image: joyce,
    },
    {
      name: 'Lai Shi Ni',
      methodology: 'User 2 Testing',
      image: lai,
    },
    {
      name: 'Xing Zhong Yang',
      methodology: 'User 3 Testing',
      image: xing,
    },
    {
      name: 'Kor Yee Heng',
      image: kor,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-32 bg-midnight" id="team" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-20">
          <h2 className="font-display impact-heading mb-6">Research Team & Methodology</h2>
          <p className="text-subtle text-lg max-w-2xl mx-auto">
            Multi-disciplinary experts conducting structured user testing across diverse
            demographics.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, index) => (
              <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: {duration: 0.3},
                  }}
                  className="glass-card p-8 rounded-sm text-center hover:bg-road-grey/20 transition-all cursor-pointer"
              >
                <motion.div
                    whileHover={{scale: 1.1, rotate: 5}}
                    transition={{duration: 0.3}}
                    className="w-20 h-20 bg-road-grey rounded-full mx-auto mb-6 overflow-hidden border border-white/5"
                >
                  <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                  />
                </motion.div>

                <h4 className="font-bold text-high-contrast text-lg mb-6">{member.name}</h4>

                {member.methodology && (
                    <motion.div
                        whileHover={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
                        className="bg-black/50 border border-road-grey rounded-sm py-4 px-4"
                    >
                  <span className="text-[9px] uppercase tracking-[0.3em] text-subtle block mb-1">
                    Methodology
                  </span>
                      <p className="font-bold text-sm text-high-contrast">{member.methodology}</p>
                    </motion.div>
                )}
              </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team;
