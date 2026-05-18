import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Cpu, HardDrive, Infinity, Shield, ChevronRight } from 'lucide-react';

interface CustomConfigProps {
  onClose: () => void;
  onDeploy: () => void;
}

export function CustomConfig({ onClose, onDeploy }: CustomConfigProps) {
  const [cpu, setCpu] = useState(4);
  const [ram, setRam] = useState(8);
  const [disk, setDisk] = useState(100);

  const price = Math.floor((cpu * 2) + (ram * 1.5) + (disk * 0.1) + 10);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[160] flex items-start md:items-center justify-center md:p-8 bg-dark/95 md:bg-dark/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full min-h-[100dvh] md:min-h-0 md:h-auto md:max-h-[85vh] max-w-[800px] liquid-glass bg-dark rounded-none md:rounded-[32px] overflow-hidden flex flex-col pt-16 md:pt-0"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-[60] w-10 h-10 sm:w-12 sm:h-12 bg-black/40 backdrop-blur border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all group shadow-lg"
        >
          <X className="w-5 h-5 text-cream group-hover:scale-110 transition-transform" />
        </button>

        <div className="flex-1 p-6 md:p-12 overflow-y-auto">
          <div className="mb-8">
            <h2 className="font-grotesk text-[32px] sm:text-[48px] uppercase text-cream leading-none tracking-wide mb-2">
              <span className="text-neon">Свой</span> конфиг
            </h2>
            <p className="font-mono text-[14px] text-cream/50 uppercase">Настрой сервер под свои задачи</p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="font-mono text-[14px] uppercase tracking-wider flex items-center gap-2 text-cream/70">
                  <Cpu className="w-4 h-4 text-neon" /> CPU (vCores)
                </label>
                <span className="font-grotesk text-[24px] text-neon">{cpu}</span>
              </div>
              <input 
                type="range" 
                min="1" max="32" step="1" 
                value={cpu} 
                onChange={(e) => setCpu(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="font-mono text-[14px] uppercase tracking-wider flex items-center gap-2 text-cream/70">
                  <HardDrive className="w-4 h-4 text-neon" /> RAM (ГБ)
                </label>
                <span className="font-grotesk text-[24px] text-neon">{ram}</span>
              </div>
              <input 
                type="range" 
                min="2" max="128" step="2" 
                value={ram} 
                onChange={(e) => setRam(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="font-mono text-[14px] uppercase tracking-wider flex items-center gap-2 text-cream/70">
                  <HardDrive className="w-4 h-4 text-neon" /> Disk (ГБ NVMe)
                </label>
                <span className="font-grotesk text-[24px] text-neon">{disk}</span>
              </div>
              <input 
                type="range" 
                min="20" max="2000" step="10" 
                value={disk} 
                onChange={(e) => setDisk(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="liquid-glass rounded-[20px] p-4 flex flex-col bg-white/5 border border-white/5">
              <Infinity className="w-6 h-6 text-neon mb-2" />
              <span className="font-mono text-[10px] text-cream/50 uppercase tracking-wider">Канал</span>
              <span className="font-mono text-[14px] text-cream font-bold">1 Гбит/с</span>
            </div>
            <div className="liquid-glass rounded-[20px] p-4 flex flex-col bg-white/5 border border-white/5">
              <Shield className="w-6 h-6 text-neon mb-2" />
              <span className="font-mono text-[10px] text-cream/50 uppercase tracking-wider">Защита</span>
              <span className="font-mono text-[14px] text-cream font-bold">L3-L4 DDoS</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0 z-10 relative">
          <div className="flex flex-col">
            <span className="font-mono text-[12px] text-cream/50 uppercase tracking-wider mb-1">Итоговая стоимость</span>
            <div className="flex items-end gap-2">
              <span className="font-grotesk text-[40px] text-neon leading-none">${price}</span>
              <span className="font-mono text-[16px] text-cream/50 mb-1">/мес</span>
            </div>
          </div>
          <button 
            onClick={onDeploy} 
            className="w-full sm:w-auto px-8 min-h-[56px] rounded-full bg-gradient-to-br from-neon to-green-500 text-dark font-grotesk text-[18px] uppercase tracking-wider hover:shadow-[0_0_30px_rgba(111,255,0,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Развернуть
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
