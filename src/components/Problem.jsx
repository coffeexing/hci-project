import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-32 bg-midnight" id="problem" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div variants={leftVariants}>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="material-symbols-outlined text-signal-red">warning</span>
              <span className="text-signal-red font-bold uppercase tracking-widest text-sm">
                Problem Statement
              </span>
            </motion.div>

            <h2 className="font-display impact-heading mb-8">The Road Safety Crisis</h2>

            <div className="space-y-6 text-subtle leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                In Malaysia, road safety remains a critical concern, with thousands of accidents
                occurring annually due to preventable human factors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 }}
                className="pl-4 border-l-2 border-road-grey space-y-4"
              >
                <p>
                  <strong className="text-high-contrast">Road Rage & Stress:</strong> High-density
                  urban traffic triggers aggressive behaviors and impulsive maneuvers.
                </p>
                <p>
                  <strong className="text-high-contrast">Fatigue:</strong> Micro-sleep episodes on
                  long-distance expressways account for the majority of fatal high-speed collisions.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                Vehicles currently lack the{' '}
                <span className="text-high-contrast">emotional intelligence</span> to perceive these
                human vulnerabilities.
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={rightVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-square rounded-lg overflow-hidden border border-road-grey grayscale hover:grayscale-0 transition-all duration-700"
            >
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/Gysa216LOMY?autoplay=1&mute=1&loop=1&playlist=Gysa216LOMY&controls=0&showinfo=0&rel=0"
                title="Road Safety Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-8 -right-8 glass-card p-8 rounded-sm border-l-4 border-signal-red max-w-xs shadow-2xl"
            >
              <motion.p
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-3xl font-bold text-signal-red mb-2"
              >
                Visualizing the Crisis
              </motion.p>
              <p className="text-sm text-subtle leading-snug">
                Real-world footage illustrating how emotional triggers bypass traditional safety features, demanding human-centric intervention.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Problem;
