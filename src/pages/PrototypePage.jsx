import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

import welcome from '../assets/prototype/Dashboard - Welcome.png';
import calm from '../assets/prototype/Dashboard - Calm.png';
import calm1 from '../assets/prototype/Dashboard - Calm-1.png';
import calm2 from '../assets/prototype/Dashboard - Calm-2.png';
import calm3 from '../assets/prototype/Dashboard - Calm-3.png';
import calm4 from '../assets/prototype/Dashboard - Calm-4.png';
import calm5 from '../assets/prototype/Dashboard - Calm-5.png';
import calm6 from '../assets/prototype/Dashboard - Calm-6.png';
import fatigue from '../assets/prototype/Dashboard - Fatigue.png';
import fatigue1 from '../assets/prototype/Dashboard - Fatigue1.png';
import fatigue1_1 from '../assets/prototype/Dashboard - Fatigue1-1.png';
import fatigue2 from '../assets/prototype/Dashboard - Fatigue2.png';
import angry from '../assets/prototype/Dashboard - Angry.png';
import breakImg from '../assets/prototype/Dashboard - Break.png';
import happyMusic from '../assets/prototype/Dashboard - Happy with music.png';
import happy from '../assets/prototype/Dashboard - Happy.png';
import neutral from '../assets/prototype/Dashboard - Neutral.png';
import tripReview from '../assets/prototype/Dashboard - Trip Review.png';
import aiChat1 from '../assets/prototype/Dashboard - Ai Chat 1.png';
import aiChat2 from '../assets/prototype/Dashboard - Ai Chat 2.png';

const PrototypePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [currentSlide, setCurrentSlide] = useState(0);

  const prototypeImages = [
    {
      url: welcome,
      alt: 'Welcome Screen'
    },
    {
      url: neutral,
      alt: 'Neutral Emotion State'
    },
    {
      url: calm,
      alt: 'Calm State'
    },
    {
      url: calm1,
      alt: 'Calm State Variation 1'
    },
    {
      url: calm2,
      alt: 'Calm State Variation 2'
    },
    {
      url: calm3,
      alt: 'Calm State Variation 3'
    },
    {
      url: calm4,
      alt: 'Calm State Variation 4'
    },
    {
      url: calm5,
      alt: 'Calm State Variation 5'
    },
    {
      url: calm6,
      alt: 'Calm State Variation 6'
    },
    {
      url: happy,
      alt: 'Happy Emotion State'
    },
    {
      url: happyMusic,
      alt: 'Happy with Music Playing'
    },
    {
      url: angry,
      alt: 'Angry Emotion Detection'
    },
    {
      url: breakImg,
      alt: 'Break Recommendation'
    },
    {
      url: fatigue,
      alt: 'Fatigue Detection'
    },
    {
      url: fatigue1,
      alt: 'Fatigue Alert 1'
    },
    {
      url: fatigue1_1,
      alt: 'Fatigue Alert Variation'
    },
    {
      url: fatigue2,
      alt: 'Fatigue Alert 2'
    },
    {
      url: aiChat1,
      alt: 'AI Chat Interface 1'
    },
    {
      url: aiChat2,
      alt: 'AI Chat Interface 2'
    },
    {
      url: tripReview,
      alt: 'Trip Review Summary'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % prototypeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + prototypeImages.length) % prototypeImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
      <div className="bg-black text-slate-300">
        {/* Highway Pattern Background */}
        <div className="fixed inset-0 pointer-events-none z-0" style={{
          backgroundImage: `
          linear-gradient(30deg, rgba(255,255,255,0.02) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.02) 87.5%),
          linear-gradient(150deg, rgba(255,255,255,0.02) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.02) 87.5%)
        `,
          backgroundSize: '180px 310px',
          opacity: 0.4
        }}></div>

        {/* Header */}
        <header className="relative pt-32 pb-24 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
              <nav className="flex mb-8 text-xs font-black tracking-[0.3em] uppercase text-slate-500 justify-center md:justify-start">
                <ol className="flex items-center space-x-2">
                  <li><a href="/" className="hover:text-signal-green transition-colors">HCI Research</a></li>
                  <li><span className="material-symbols-outlined text-sm">chevron_right</span></li>
                  <li className="text-signal-green">System Prototypes</li>
                </ol>
              </nav>

              <h1 className="text-7xl md:text-9xl font-display font-extrabold mb-10 tracking-tight text-white leading-[0.9]">
                Prototype <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                      style={{ textShadow: '0 0 20px rgba(0, 224, 255, 0.4)' }}>
                Gallery
              </span>
              </h1>
            </motion.div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10" ref={ref}>
          {/* Image Carousel Section */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-12">
              <div className="flex items-start gap-6">
                <div className="h-20 w-1.5 bg-green-500 rounded-full shadow-[0_0_20px_rgba(0,255,148,0.6)] mt-4"></div>
                <div>
                  <motion.h2
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8 }}
                      className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight"
                      style={{ textShadow: '0 0 15px rgba(0, 255, 148, 0.6)' }}
                  >
                    Prototype Screenshots
                  </motion.h2>
                  <p className="text-green-400 font-bold text-sm tracking-[0.2em] uppercase mt-4">
                    Visual Design Gallery and System Interface
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative" id="carousel-container">
              {/* Main Image Display */}
              <div className="relative aspect-[16/10] bg-black rounded-2xl overflow-hidden border border-cyan-400/30"
                   style={{ boxShadow: '0 0 40px rgba(0, 224, 255, 0.2)' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                      key={currentSlide}
                      src={prototypeImages[currentSlide].url}
                      alt={prototypeImages[currentSlide].alt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/50 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center transition-all group z-10"
                >
                <span className="material-symbols-outlined text-4xl text-white group-hover:text-cyan-400 transition-colors">
                  chevron_left
                </span>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/50 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center transition-all group z-10"
                >
                <span className="material-symbols-outlined text-4xl text-white group-hover:text-cyan-400 transition-colors">
                  chevron_right
                </span>
                </button>

                {/* Fullscreen Button */}
                <button
                    onClick={() => {
                      const elem = document.getElementById('carousel-container');
                      if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                      } else if (elem.webkitRequestFullscreen) {
                        elem.webkitRequestFullscreen();
                      } else if (elem.msRequestFullscreen) {
                        elem.msRequestFullscreen();
                      }
                    }}
                    className="absolute bottom-8 right-8 w-12 h-12 bg-black/50 hover:bg-black/80 border border-white/20 rounded-lg flex items-center justify-center transition-all z-10 hover:scale-110"
                >
                  <span className="material-symbols-outlined text-white">fullscreen</span>
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center items-center gap-2 mt-8">
                {prototypeImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all ${
                            index === currentSlide
                                ? 'w-12 h-3 bg-cyan-400'
                                : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                        } rounded-full`}
                    />
                ))}
              </div>

              {/* Thumbnail Strip */}
              <div className="mt-6 overflow-x-auto">
                <div className="flex gap-3 pb-4">
                  {prototypeImages.map((image, index) => (
                      <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentSlide
                                  ? 'border-cyan-400 opacity-100'
                                  : 'border-white/20 opacity-50 hover:opacity-75'
                          }`}
                      >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-contain bg-slate-950"
                        />
                      </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Figma Prototype Section */}
          <section className="pt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-12">
              <div className="flex items-start gap-6">
                <div className="h-20 w-1.5 bg-green-500 rounded-full shadow-[0_0_20px_rgba(0,255,148,0.6)] mt-4"></div>
                <div>
                  <motion.h2
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8 }}
                      className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight"
                      style={{ textShadow: '0 0 15px rgba(0, 255, 148, 0.6)' }}
                  >
                    Interactive Prototypes
                  </motion.h2>
                  <p className="text-green-400 font-bold text-sm tracking-[0.2em] uppercase mt-4">
                    Figma Design System and User Flows
                  </p>
                </div>
              </div>
              <a
                  href="https://www.figma.com/proto/R0XTgMp64lOhPSEDf58pBq/SEADS?node-id=216-289&p=f&t=XwunvphKtvHOydnj-1&scaling=scale-down&content-scaling=fixed&page-id=74%3A124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-green-400 hover:opacity-80 transition-opacity mb-4"
              >
                Open in Figma <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>

            {/* Figma Prototype Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="p-12">
                <div className="flex items-start gap-8 mb-8">
                  <div className="bg-cyan-400/10 border border-cyan-400/30 p-5 rounded-2xl">
                    <span className="material-symbols-outlined text-3xl text-cyan-400">design_services</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-3 text-white">SEADS System Design</h4>
                    <p className="text-slate-400 text-lg leading-relaxed mb-4">
                      Explore our comprehensive emotion-aware driving interface with real-time interaction flows,
                      safety protocols, and adaptive cabin environment controls.
                    </p>
                    <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-400/30 rounded-full text-sm font-bold">
                      Interactive Prototype
                    </span>
                      <span className="px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-400/30 rounded-full text-sm font-bold">
                      User Testing
                    </span>
                      <span className="px-4 py-2 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-full text-sm font-bold">
                      HCI Research
                    </span>
                    </div>
                  </div>
                </div>

                {/* Figma Embed */}
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/5"
                     style={{ boxShadow: '0 0 30px rgba(0, 224, 255, 0.1)' }}>
                  <iframe
                      style={{ border: 'none' }}
                      width="100%"
                      height="800"
                      src="https://embed.figma.com/proto/R0XTgMp64lOhPSEDf58pBq/SEADS?node-id=216-289&p=f&scaling=scale-down&content-scaling=fixed&page-id=74%3A124&embed-host=share"
                      allowFullScreen
                      title="SEADS Interactive Prototype"
                  ></iframe>
                </div>

                {/* Prototype Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-2xl text-green-400">touch_app</span>
                      <h5 className="font-bold text-white">Interactive</h5>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Click through user flows and test real-time responses
                    </p>
                  </div>

                  <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-2xl text-purple-400">palette</span>
                      <h5 className="font-bold text-white">Design System</h5>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Complete component library and style guidelines
                    </p>
                  </div>

                  <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-2xl text-cyan-400">psychology</span>
                      <h5 className="font-bold text-white">User Tested</h5>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Validated through comprehensive HCI research methods
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
  );
};

export default PrototypePage;