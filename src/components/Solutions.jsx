import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Solutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const solutions = [
    {
      icon: 'psychology',
      title: 'Emotion Monitoring',
      description:
        'Continuous facial expression analysis and biometric tracking. System triggers adaptive cabin environments to de-escalate stress.',
      color: 'signal-green',
    },
    {
      icon: 'priority_high',
      title: 'Warning Protocols',
      description:
        'Detects micro-sleep and blink pattern changes. Issues haptic warnings and autonomously navigates to the nearest rest area.',
      color: 'signal-yellow',
    },
    {
      icon: 'analytics',
      title: 'Safety Analytics',
      description:
        'Comprehensive post-drive reports mapping emotional stability against speed and braking patterns for behavioral coaching.',
      color: 'signal-green',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-32 bg-black" id="solutions" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-signal-green">verified</span>
            <span className="text-signal-green font-bold uppercase tracking-widest text-sm">
              Safety Score: Optimized
            </span>
          </div>
          <h2 className="font-display impact-heading mb-6">Core Intelligence</h2>
          <p className="text-subtle text-lg max-w-xl mx-auto">
            Bridging the gap between human physiology and vehicle automation through AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`glass-card p-10 rounded-sm hover:border-${solution.color}/50 transition-all group cursor-pointer`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 bg-road-grey text-${solution.color} flex items-center justify-center rounded-sm mb-8 group-hover:bg-${solution.color} group-hover:text-midnight transition-colors`}
              >
                <span className="material-symbols-outlined">{solution.icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-high-contrast">{solution.title}</h3>
              <p className="text-subtle leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Solutions;
