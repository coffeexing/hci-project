import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const ResearchPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedTask, setSelectedTask] = useState(1); // Track which task is selected (1, 2, or 3)
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Video data array - Google Drive video links
  const videoData = [
    // Task 1 - Users
    {
      id: 1,
      taskId: 1,
      userName: 'User 01',
      videoId: '11n0A9rSv-MNsS621YcLtWAuWSh679wjD'
    },
    {
      id: 2,
      taskId: 1,
      userName: 'User 02',
      videoId: '1ZyaOYpnNjv-uQHzTNOpRqQHrTRO5b90l'
    },
    {
      id: 3,
      taskId: 1,
      userName: 'User 03',
      videoId: '1JkW_mDHCour-F2qbMYJFFOFzf8i944D5'
    },
    // Task 2 - Users
    {
      id: 4,
      taskId: 2,
      userName: 'User 01',
      videoId: '1v7v5PVBTOo0yWB4G5eg4nd_igXIAaC9B'
    },
    {
      id: 5,
      taskId: 2,
      userName: 'User 02',
      videoId: '1zSfpZa2mGjx4AygUU2b1WtQZPkc6G1V9'
    },
    {
      id: 6,
      taskId: 2,
      userName: 'User 03',
      videoId: '1XuM2t7BQQ9vJTzhuifZRCnKB8Cbi9Ngp'
    },
    // Task 3 - Users
    {
      id: 7,
      taskId: 3,
      userName: 'User 01',
      videoId: '1JjFpKk8zrhbihBVKFiw8-QKiLpN4fqzN'
    },
    {
      id: 8,
      taskId: 3,
      userName: 'User 02',
      videoId: '1nwVtaYQz3LFCXJXRCZUzNrNvZq2BsLOp'
    },
    {
      id: 9,
      taskId: 3,
      userName: 'User 03',
      videoId: '1dTcRb_cwhrKyNoZ_Lioj5mSQw6JwvMHL'
    }
  ];

  // Filter videos based on selected task
  const filteredVideos = videoData.filter(video => video.taskId === selectedTask);

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
                  <li className="text-signal-green">Usability Testing</li>
                </ol>
              </nav>

              <h1 className="text-7xl md:text-9xl font-display font-extrabold mb-10 tracking-tight text-white leading-[0.9]">
                Task-Based <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                      style={{ textShadow: '0 0 20px rgba(0, 224, 255, 0.4)' }}>
                Testing Results
              </span>
              </h1>
            </motion.div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10" ref={ref}>
          {/* User Sessions Section */}
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
                    User Testing Sessions
                  </motion.h2>
                  <p className="text-green-400 font-bold text-sm tracking-[0.2em] uppercase mt-4">
                    Video Recordings of Task Completion
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 text-xs font-black bg-white/5 border border-white/10 rounded-lg uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse"></span>
                  Recording
                </div>
              </div>
            </div>

            {/* Task Guide - Collapsible Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
              <button
                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                  className="w-full flex items-center justify-between p-6 bg-black/40 hover:bg-black/60 border border-white/10 rounded-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center border border-cyan-400/30">
                    <span className="material-symbols-outlined text-cyan-400 text-2xl">description</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white tracking-wide">Test Task Guide</h3>
                    <p className="text-sm text-slate-400 mt-1">Driving Monitoring System Test Procedures</p>
                  </div>
                </div>
                <motion.span
                    animate={{ rotate: isGuideOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="material-symbols-outlined text-slate-400 text-3xl"
                >
                  expand_more
                </motion.span>
              </button>

              <AnimatePresence>
                {isGuideOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                      <div className="bg-black/40 p-10 rounded-xl border border-white/5 mt-6"
                           style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                      >
                        {/* Welcome Section */}
                        <div className="mb-10">
                          <h3 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">
                            SEADS Driving Monitoring System Test
                          </h3>
                          <div className="space-y-6">
                            <div className="bg-gradient-to-br from-cyan-400/5 to-purple-500/5 border border-white/10 rounded-xl p-6">
                              <h4 className="text-lg font-bold text-cyan-400 mb-3 tracking-wide flex items-center gap-2">
                                <span className="material-symbols-outlined">waving_hand</span>
                                Welcome
                              </h4>
                              <p className="text-base leading-relaxed text-slate-300 font-light">
                                Hello! Welcome to SEADS (driving monitoring system) user test. This is a simulated driving scenario test. Please don't be nervous - there are no right or wrong answers. We simply want to understand your genuine user experience.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Test Procedure */}
                        <div className="bg-black/30 p-8 rounded-xl border border-white/5 mb-8">
                          <h3 className="text-xl font-bold text-cyan-400 mb-6 tracking-wider uppercase flex items-center gap-3">
                            <span className="material-symbols-outlined">schedule</span>
                            Test Procedure
                          </h3>
                          <div className="space-y-6">
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center">
                                <span className="text-cyan-400 font-bold text-lg">1</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-white mb-2">Start the Driving Monitoring System</h4>
                                <p className="text-slate-400">Please start the driving monitoring system and view the driving information displayed on the dashboard.</p>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-purple-400/10 border border-purple-400/30 rounded-lg flex items-center justify-center">
                                <span className="text-purple-400 font-bold text-lg">2</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-white mb-2">Respond to the Fatigue Alert</h4>
                                <p className="text-slate-400">When the system detects that you are in a fatigued state and an AI recommendation pops up, please read the recommendation content and respond as you see fit.</p>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-green-400/10 border border-green-400/30 rounded-lg flex items-center justify-center">
                                <span className="text-green-400 font-bold text-lg">3</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-white mb-2">End the Drive and Review the Trip Report</h4>
                                <p className="text-slate-400">Please end the current driving session and review the trip summary report generated by the system.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Core Questions */}
                        <div className="bg-gradient-to-br from-cyan-400/5 to-purple-500/5 border border-white/10 rounded-xl p-8 mb-8">
                          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined">help</span>
                            Core Questions
                          </h3>
                          <ul className="space-y-4 text-slate-300">
                            <li className="flex items-start gap-3">
                              <span className="text-cyan-400 mt-1 text-xl">•</span>
                              <span>Did you encounter anything that was <strong className="text-white">difficult to understand or operate</strong>?</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-cyan-400 mt-1 text-xl">•</span>
                              <span>In what situations would you <strong className="text-white">want to use</strong> this system?</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-cyan-400 mt-1 text-xl">•</span>
                              <span>Are there any <strong className="text-white">features you expected but the system didn't have</strong>?</span>
                            </li>
                          </ul>
                        </div>

                        {/* Closing */}
                        <div className="text-center pt-6 border-t border-white/10">
                          <p className="text-slate-400 italic text-lg">
                            Thank you very much for your valuable feedback! Your input will help us improve the system design.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Task Selection Buttons */}
            <div className="mb-12">
              <div className="flex gap-2 p-1.5 bg-black/40 border border-white/5 rounded-xl w-fit">
                <button
                    onClick={() => setSelectedTask(1)}
                    className={`px-8 py-4 rounded-lg text-xs font-black tracking-widest uppercase transition-all duration-300 ease-in-out ${
                        selectedTask === 1
                            ? 'bg-white/5 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                            : 'text-slate-500 border border-transparent'
                    }`}
                >
                  Task 1
                </button>
                <button
                    onClick={() => setSelectedTask(2)}
                    className={`px-8 py-4 rounded-lg text-xs font-black tracking-widest uppercase transition-all duration-300 ease-in-out ${
                        selectedTask === 2
                            ? 'bg-white/5 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                            : 'text-slate-500 border border-transparent'
                    }`}
                >
                  Task 2
                </button>
                <button
                    onClick={() => setSelectedTask(3)}
                    className={`px-8 py-4 rounded-lg text-xs font-black tracking-widest uppercase transition-all duration-300 ease-in-out ${
                        selectedTask === 3
                            ? 'bg-white/5 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                            : 'text-slate-500 border border-transparent'
                    }`}
                >
                  Task 3
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredVideos.map((video, index) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-black/40 border border-white/10 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-400/30 group"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)' }}
                    >
                      <div className="aspect-video bg-[#050505] relative overflow-hidden">
                        <iframe
                            src={`https://drive.google.com/file/d/${video.videoId}/preview`}
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={`${video.userName} - Task ${selectedTask}`}
                        ></iframe>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-mono text-sm font-black tracking-widest text-white">{video.userName}</h4>
                          <span className="text-xs text-slate-500 font-mono">Task {selectedTask}</span>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* Observations Section */}
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
                    Key Observations
                  </motion.h2>
                  <p className="text-green-400 font-bold text-sm tracking-[0.2em] uppercase mt-4">
                    User Behavior and System Interaction Analysis
                  </p>
                </div>
              </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-black/40 p-10 rounded-xl border border-white/5"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-cyan-400/30">
                  <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  <p className="text-base md:text-lg leading-relaxed text-slate-200 font-light">
                    All three users encountered no difficulty in completing the tasks. When given the task instructions, they were able to follow them without the need to terminate the usability testing. For example, User 1 was able to follow the task instructions but occasionally found herself looping on the same screen during Task 2. User 2 was able to complete tasks such as responding to a fatigue alert and reviewing a trip report smoothly.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-purple-400/30">
                  <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  <p className="text-base md:text-lg leading-relaxed text-slate-200 font-light">
                    In addition, users appeared surprised and pleased with the AI recommendations, such as playing music and displaying Rest & Relaxation (RnR) locations. For Task 3, most users showed a neutral response, as their facial expressions did not show much reaction after completing the trip review.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-green-400/30">
                  <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <p className="text-base md:text-lg leading-relaxed text-slate-200 font-light">
                    We also interviewed all three users after the usability testing session. When asked about the difficulty of operating the system, all of them reported that there was no difficulty. When asked for suggestions to improve the system, User 1 mentioned that no changes were needed. Meanwhile, User 2 suggested adding an AI recommendation feature for alternating lanes to avoid traffic. Lastly, User 3 suggested adding an AI-voiced navigation feature during driving sessions so that drivers would be less distracted while driving. Overall, the feedback gathered indicates a positive response toward the system.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-500 text-lg">person</span>
                  <p className="text-sm text-slate-500 italic">Prepared by Joyce Puyang Maurice Utap</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Findings Section */}
          <section className="mb-20">
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
                    Research Findings
                  </motion.h2>
                  <p className="text-green-400 font-bold text-sm tracking-[0.2em] uppercase mt-4">
                    Identified Issues and Proposed Solutions
                  </p>
                </div>
              </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-black/40 p-10 rounded-xl border border-white/5"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-red-400/30">
                  <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]"></div>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-red-400 mb-2 tracking-wider uppercase">Identified Issues</h4>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-slate-200 font-light">
                    One usability issue identified during the testing is the absence of real facial recognition, as proposed in the project title. This affects the user experience, as users were unable to fully understand and engage with the system as originally intended. In addition, the usability testing was conducted in a wide-open space, which limited the users' ability to experience how the system would function in a real-life environment. Lastly, we were unable to simulate real driving situations such as traffic congestion or long journeys due to external factors such as weather conditions, time constraints, and limited equipment resources. Simulating these scenarios would have also resulted in a longer video duration than expected.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-cyan-400/30">
                  <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-cyan-400 mb-2 tracking-wider uppercase">Proposed Solutions</h4>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-slate-200 font-light">
                    Therefore, several possible solutions are proposed to address these issues. For the first issue, we suggest using Python and React instead of Figma to simulate real-time facial recognition and eye tracking. For the second issue, we propose placing users inside a car with a mounted device to create a more realistic testing environment. Finally, to address the third issue, we suggest displaying video clips in front of the user that simulate various scenarios, such as heavy traffic or searching for nearby RnR locations. Not only that, we would like the system to be further enhanced and tested in more realistic conditions in future development.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-500 text-lg">person</span>
                  <p className="text-sm text-slate-500 italic">Prepared by Joyce Puyang Maurice Utap</p>
                </div>
              </div>
            </motion.div>
          </section>

        </main>
      </div>
  );
};

export default ResearchPage;