import { motion } from 'framer-motion';

const Hero = () => {
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <header className="relative overflow-hidden py-32 lg:py-48">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-road-grey mb-8 bg-black/40"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-2 h-2 rounded-full bg-signal-green"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
              HCI Research Lab
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-high-contrast mb-8"
          >
            Smart Emotion Aware <br />
            <motion.span
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="text-signal-green"
              style={{
                backgroundImage: 'linear-gradient(90deg, #10B981, #34D399, #10B981)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Driving System
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-subtle mb-12 leading-relaxed"
          >
            A specialized research project focused on reducing automotive accidents by detecting
            critical emotional states and deploying real-time safety interventions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-signal-green text-midnight font-bold rounded-sm hover:brightness-110 transition-all uppercase tracking-widest shadow-lg shadow-signal-green/20"
            >
              Explore Solutions
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(45, 45, 45, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent text-high-contrast font-bold rounded-sm border border-road-grey hover:bg-road-grey/30 transition-all uppercase tracking-widest"
            >
              View Prototypes
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 -z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal-green rounded-full blur-[160px]"></div>
      </motion.div>
    </header>
  );
};

export default Hero;
