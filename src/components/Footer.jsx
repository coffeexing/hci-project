import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-road-grey bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-signal-green text-3xl">sensors</span>
            <span className="font-display font-bold text-2xl text-high-contrast tracking-tighter">
              SEADS
            </span>
          </motion.div>

          <p className="text-subtle text-sm">
            © 2026 SEADS HCI Research Project. Advanced Safety Systems.
          </p>

          <div className="flex space-x-10">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#10B981' }}
              className="text-subtle hover:text-signal-green transition-colors text-xs uppercase tracking-widest font-bold"
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#10B981' }}
              className="text-subtle hover:text-signal-green transition-colors text-xs uppercase tracking-widest font-bold"
            >
              Ethics
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
