import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const User2Page = () => {
    const [activeTab, setActiveTab] = useState('protocols');

    const users = [
        {
            id: 1,
            name: 'USER 01',
            status: 'Safe',
            statusColor: 'traffic-green',
            tags: ['BIOMETRIC_LOCK', 'EYE_325'],
            time: '02:38:42',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
        }
    ];

    return (
        <div className="bg-[#0a0a0a] text-slate-100 min-h-screen"
            style={{
                backgroundImage: `
             radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 1) 100%),
             url("https://www.transparenttextures.com/patterns/asphalt-dark.png")
           `
            }}>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-14"
                >

                    <h2 className="text-6xl md:text-8xl font-display font-black mb-6 tracking-tighter uppercase leading-none"
                        style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
                        Testing <br />
                        <span className="text-white/90">With User 2</span>
                    </h2>

                </motion.div>

                {/* Task Buttons */}
                <div className="mb-12">
                    <div className="flex gap-2 p-1.5 bg-black/40 border border-white/5 rounded-xl w-fit">
                        <Link to="/user1" className="px-8 py-4 rounded-lg text-xs font-black tracking-widest uppercase transition-all text-slate-500 hover:text-yellow-500 hover:bg-white/5">
                            User 1
                        </Link>
                        <Link to="/user2" className="px-8 py-4 rounded-lg text-xs font-black tracking-widest uppercase transition-all bg-white/5 text-green-500 border border-green-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                            User 2
                        </Link>
                        <Link to="/user3" className="px-8 py-4 rounded-lg text-xs font-black tracking-widest uppercase transition-all text-slate-500 hover:text-yellow-500 hover:bg-white/5">
                            User 3
                        </Link>
                    </div>
                </div>

                {/* User Sessions */}
                <section className="mb-20">
                    <div className="flex items-end justify-between mb-10 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-1.5 bg-green-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                            <div>
                                <h3 className="text-5xl font-display font-black uppercase tracking-tighter"
                                    style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
                                    User Sessions
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className="flex items-center gap-2 px-4 py-2 text-xs font-black bg-white/5 border border-white/10 rounded-lg uppercase tracking-widest">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse"></span>
                                Recording
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {users.map((user, index) => (
                            <motion.div
                                key={user.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-black/40 border border-white/10 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 hover:border-white/20 group"
                                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)' }}
                            >
                                <div className="aspect-video bg-[#050505] relative overflow-hidden">
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 pointer-events-none opacity-30"
                                        style={{
                                            background: 'linear-gradient(to bottom, transparent 50%, rgba(16, 185, 129, 0.05) 50%)',
                                            backgroundSize: '100% 4px'
                                        }}></div>

                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 border border-green-500/40 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                                            <span className="material-symbols-outlined text-4xl translate-x-1">play_arrow</span>
                                        </div>
                                    </motion.div>

                                    <div className="absolute top-3 left-3 flex items-center gap-2 text-[9px] font-black bg-black/80 px-3 py-1.5 rounded-full border border-white/20 tracking-widest">
                                        <span className="material-symbols-outlined text-xs">timer</span> {user.time}
                                    </div>

                                    <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest
                    ${user.statusColor === 'traffic-green' ? 'bg-green-500/20 text-green-400 border border-green-500/40' :
                                            user.statusColor === 'traffic-yellow' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40' :
                                                'bg-red-500/20 text-red-400 border border-red-500/40'}`}>
                                        {user.status}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-mono text-sm font-black tracking-widest">{user.name}</h4>
                                        <span className="text-xs text-slate-500 font-mono">DRV_A</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {user.tags.map((tag, i) => (
                                            <span key={i} className="text-[9px] font-black px-2.5 py-1 bg-white/5 border border-white/10 rounded tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="bg-black/40 rounded-2xl border border-white/10 p-8 backdrop-blur-md">
                    <div className="flex border-b border-white/10 mb-10">
                        {['protocols', 'observations', 'findings'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-4 text-xs font-black tracking-widest uppercase transition-all relative
                  ${activeTab === tab
                                        ? 'text-green-500 border-b-2 border-green-500 bg-black/40'
                                        : 'text-slate-500 hover:text-green-400'
                                    }`}
                            >
                                {tab === 'protocols' && 'Briefing_Protocols'}
                                {tab === 'observations' && 'Live_Insights'}
                                {tab === 'findings' && 'Consolidated_Logs'}
                            </button>
                        ))}
                    </div>

                    {/* Protocols Tab */}
                    {activeTab === 'protocols' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                                <div>
                                    <h3 className="text-4xl font-display font-black mb-3 uppercase tracking-tighter">
                                        TASK 01: <span className="text-green-400">BASELINE EXTRACTION</span>
                                    </h3>
                                    <p className="text-xs font-mono text-slate-500 tracking-widest uppercase">
                                        AUTHORED_BY: [CHEN_S, WILSON_J, RIVERA_A]
                                    </p>
                                </div>
                                <span className="text-xs bg-white/5 px-5 py-2 rounded-full border border-white/10 font-mono tracking-widest mt-4 md:mt-0">
                                    REFERENCE_ID: T1-MRTS.v2
                                </span>
                            </div>

                            <div className="bg-black/60 p-8 rounded-xl border border-green-500/20 mb-8">
                                <p className="text-green-400 italic text-lg leading-relaxed">
                                    "Establish terminal baseline for emotion-aware detection during standard highway navigation.
                                    Focal points: ocular dilation variance and H-Rate delta."
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                                    Protocol Execution Sequence_
                                </h4>
                                <ul className="space-y-6">
                                    {[
                                        {
                                            number: '01',
                                            title: '5-Min Calibration Phase',
                                            description: 'Steady state at 80km/h on linear trajectory. No external stimuli applied to any subjects.'
                                        },
                                        {
                                            number: '02',
                                            title: 'AI Passive Monitoring',
                                            description: 'Background logging of emotional states. Intervention inhibited for Phase 03.1 to ensure raw telemetry.'
                                        },
                                        {
                                            number: '03',
                                            title: 'Peripheral Cognitive Load',
                                            description: 'Introduction of HUD navigation cues to measure distraction latency and reactionary stress levels.'
                                        }
                                    ].map((step) => (
                                        <motion.li
                                            key={step.number}
                                            whileHover={{ x: 10 }}
                                            className="flex gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                                        >
                                            <div className="flex-shrink-0 w-14 h-14 bg-green-500/10 border-2 border-green-500/30 rounded-lg flex items-center justify-center text-2xl font-black text-green-400">
                                                {step.number}
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-black mb-2 text-white">{step.title}</h5>
                                                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* Observations Tab */}
                    {activeTab === 'observations' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div className="bg-black/40 p-8 rounded-xl border border-white/5">
                                <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3 text-green-500">
                                    <span className="material-symbols-outlined text-lg">troubleshoot</span>
                                    Sensor Variance Summary
                                </h4>
                                <ul className="space-y-6 text-sm leading-relaxed text-slate-400">
                                    <li className="flex gap-4">
                                        <span className="text-green-500 font-black">»</span>
                                        <span>User group showed <strong className="text-white">15% increase</strong> in pupillary dilation during "Exit Cue" introduction phase.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-green-500 font-black">»</span>
                                        <span><strong className="text-yellow-500">User 04 alert:</strong> Unique saccadic movement patterns detected during high-density HUD refresh peaks.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-green-500 font-black">»</span>
                                        <span>HRV remains the <strong className="text-white">primary predictor</strong> for pre-fatigue states in high-speed autonomous scenarios.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* Findings Tab */}
                    {activeTab === 'findings' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            {/* Success Finding */}
                            <div className="flex gap-8 p-10 rounded-xl border border-green-500/30 bg-green-500/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="material-symbols-outlined text-[120px]">verified</span>
                                </div>
                                <div className="flex-shrink-0 w-20 h-20 bg-green-500/10 border-2 border-green-500 text-green-500 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-4xl">trending_down</span>
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-black text-green-500 mb-3 uppercase tracking-tight">
                                        Latency Optimization Success
                                    </h4>
                                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                        Monitoring engine v2.1 successfully reduced detection latency by 450ms.
                                        Response triggers are now sub-200ms across all biometrics.
                                    </p>
                                    <div className="inline-block px-5 py-2 bg-green-500 text-black text-xs font-black rounded-lg uppercase tracking-widest">
                                        Action: Proceed to Task 2 Integration
                                    </div>
                                </div>
                            </div>

                            {/* Warning Finding */}
                            <div className="flex gap-8 p-10 rounded-xl border border-red-500/30 bg-red-500/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="material-symbols-outlined text-[120px]">error</span>
                                </div>
                                <div className="flex-shrink-0 w-20 h-20 bg-red-500/10 border-2 border-red-500 text-red-500 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-4xl">visibility_off</span>
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-black text-red-500 mb-3 uppercase tracking-tight">
                                        Low-Lux Precision Decay
                                    </h4>
                                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                        At ambient levels below 10 lux, eye-tracking precision dropped by 40% for participants with corrective lenses.
                                    </p>
                                    <div className="inline-block px-5 py-2 bg-red-500 text-white text-xs font-black rounded-lg uppercase tracking-widest border border-red-500/30">
                                        Action: IR-Enhancement Mandatory for Task 3
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default User2Page;
