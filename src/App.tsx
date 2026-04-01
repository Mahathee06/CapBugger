import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Copy, XCircle, Settings, CheckCircle, Info, ChevronRight, HardDrive, Zap } from 'lucide-react';
import { invoke } from '@tauri-apps/api/tauri';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'copier' | 'locker'>('home');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const notify = (msg: string) => {
    setStatus(msg);
    setTimeout(() => setStatus(null), 3000);
  };

  const killCapCut = async () => {
    setLoading(true);
    try {
      const res: any = await invoke('kill_capcut');
      notify(res.message);
    } catch (e) {
      notify("Error. Check permissions.");
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen w-full relative overflow-hidden text-white font-sans bg-[#05060a]">
      <div className="grid-bg opacity-30" />
      
      {/* Sidebar */}
      <div className="w-64 bg-[#0a0b10]/80 backdrop-blur-xl border-r border-white/5 p-6 flex flex-col gap-4 z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Zap className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">CapBugger <span className="text-xs text-indigo-400 align-top ml-1">BETA</span></span>
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem 
            icon={<Shield className="w-5 h-5" />} 
            label="Version Locker" 
            active={activeTab === 'locker'} 
            onClick={() => setActiveTab('locker')} 
          />
          <SidebarItem 
            icon={<Copy className="w-5 h-5" />} 
            label="Project Copier" 
            active={activeTab === 'copier'} 
            onClick={() => setActiveTab('copier')} 
          />
          <div className="h-[1px] bg-white/5 my-4" />
          <button 
            onClick={killCapCut}
            disabled={loading}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all text-sm font-medium border border-transparent hover:border-red-400/20"
          >
            <XCircle className="w-5 h-5" />
            Kill CapCut
          </button>
        </nav>

        <div className="mt-auto pt-4 text-xs text-slate-500 border-t border-white/5">
          <p>Version 2.3.0</p>
          <p>© 2026 CapBugger Team</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Welcome to CapBugger</h1>
              <p className="text-slate-400 mb-8 text-lg">The ultimate companion for CapCut editors to manage versions and port projects effortlessly.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <ActionCard 
                  icon={<Shield className="text-indigo-400" />} 
                  title="Version Locker" 
                  desc="Lock specific project versions to prevent accidental updates." 
                  onClick={() => setActiveTab('locker')}
                />
                <ActionCard 
                  icon={<Copy className="text-emerald-400" />} 
                  title="Project Copier" 
                  desc="Copy draft folders between different CapCut installations." 
                  onClick={() => setActiveTab('copier')}
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'locker' && (
            <motion.div 
              key="locker"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="max-w-4xl">
                <div className="flex items-center gap-2 text-indigo-400 mb-4 px-2 py-1 bg-indigo-400/10 w-fit rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Shield size={14} /> SECURITY MODULE
                </div>
                <h1 className="text-3xl font-bold mb-6">Version Locker</h1>
                <div className="glass p-8 space-y-6">
                   <div className="flex flex-col gap-4">
                      <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Select Project Path</label>
                      <div className="flex gap-4">
                        <input type="text" placeholder="C:\Users\...\CapCut\Projects\..." className="flex-1 bg-black/40 border border-white/10 p-3 rounded-lg text-sm" />
                        <button className="bg-indigo-600 px-6 rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-colors">Browse</button>
                      </div>
                   </div>
                   <div className="h-[1px] bg-white/5" />
                   <div className="flex justify-between items-center bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/10">
                      <div>
                        <h3 className="font-bold mb-1">State: Unlocked</h3>
                        <p className="text-sm text-slate-400">Locking protects your project from being modified by CapCut.</p>
                      </div>
                      <button className="glow-btn">LOCK PROJECT</button>
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'copier' && (
            <motion.div 
              key="copier"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="max-w-4xl">
                <div className="flex items-center gap-2 text-emerald-400 mb-4 px-2 py-1 bg-emerald-400/10 w-fit rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Copy size={14} /> PORTABILITY MODULE
                </div>
                <h1 className="text-3xl font-bold mb-6">Project Copier</h1>
                <div className="glass p-8 space-y-6">
                   <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Source Directory</label>
                        <input type="text" placeholder="Draft location..." className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm" />
                     </div>
                     <div className="space-y-4">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Destination Directory</label>
                        <input type="text" placeholder="Copy to..." className="w-full bg-black/40 border border-white/10 p-3 rounded-lg text-sm" />
                     </div>
                   </div>
                   <button className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-600/30 py-4 rounded-xl text-emerald-400 font-bold transition-all mt-4 flex items-center justify-center gap-3">
                     <Zap size={18} className="fill-emerald-400" />
                     INITIALIZE COPY OPERATION
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Notification */}
        <AnimatePresence>
          {status && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-10 right-10 bg-indigo-600 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl shadow-indigo-500/40 border border-white/10"
            >
              <CheckCircle size={18} />
              <span className="font-semibold">{status}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode, label: string, active: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
      ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-400/20 shadow-lg shadow-indigo-900/10' 
      : 'text-slate-500 hover:bg-white/5 border border-transparent'
    }`}
  >
    <span className={`${active ? 'text-indigo-400' : 'group-hover:text-white'} transition-colors`}>{icon}</span>
    <span className="font-semibold text-sm transition-colors">{label}</span>
    {active && <motion.div layoutId="pill" className="ml-auto w-1 h-1 bg-indigo-400 rounded-full" />}
  </button>
);

const ActionCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, onClick: () => void }> = ({ icon, title, desc, onClick }) => (
  <div 
    onClick={onClick}
    className="glass p-6 group cursor-pointer hover:border-slate-500/30 transition-all hover:translate-y-[-4px]"
  >
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
      {title}
      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
    </h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default App;
