import { motion } from 'motion/react';
import { Server, Activity, Users, Settings, LogOut, Plus } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#070B14] text-cream flex overflow-hidden"
    >
      {/* Sidebar */}
      <div className="hidden lg:flex w-[280px] border-r border-white/5 bg-[#0A0F1C] flex-col shrink-0">
        <div className="p-8">
          <div className="font-grotesk uppercase tracking-wider text-[24px]">
            ByteZone<span className="text-neon">_LK</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 flex flex-col gap-2">
          <button className="flex items-center gap-4 px-4 py-3 rounded-[16px] bg-white/5 text-neon font-mono text-[14px] uppercase tracking-wider transition-colors">
            <Server className="w-5 h-5" />
            Мои серверы
          </button>
          <button className="flex items-center gap-4 px-4 py-3 rounded-[16px] hover:bg-white/5 text-cream/70 hover:text-cream font-mono text-[14px] uppercase tracking-wider transition-colors">
            <Activity className="w-5 h-5" />
            Статистика
          </button>
          <button className="flex items-center gap-4 px-4 py-3 rounded-[16px] hover:bg-white/5 text-cream/70 hover:text-cream font-mono text-[14px] uppercase tracking-wider transition-colors">
            <Users className="w-5 h-5" />
            Поддержка
          </button>
          <button className="flex items-center gap-4 px-4 py-3 rounded-[16px] hover:bg-white/5 text-cream/70 hover:text-cream font-mono text-[14px] uppercase tracking-wider transition-colors">
            <Settings className="w-5 h-5" />
            Настройки
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={onLogout}
            className="flex items-center gap-4 px-4 py-3 w-full rounded-[16px] hover:bg-red-500/10 text-cream/70 hover:text-red-500 font-mono text-[14px] uppercase tracking-wider transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Выйти
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto w-full">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4 lg:hidden">
            <div className="font-grotesk uppercase tracking-wider text-[20px]">
              ByteZone<span className="text-neon">_LK</span>
            </div>
          </div>
          <h1 className="font-grotesk text-[32px] md:text-[40px] uppercase hidden lg:block">Обзор</h1>
          <div className="flex items-center gap-4 ml-auto">
            <button onClick={onLogout} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-red-500/10 text-red-500">
              <LogOut className="w-5 h-5" />
            </button>
            <div className="text-right hidden sm:block">
              <div className="font-mono text-[12px] uppercase text-cream/50">Баланс</div>
              <div className="font-mono text-[20px] text-neon">$124.50</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon to-green-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                <span className="font-grotesk text-[18px]">U</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="liquid-glass bg-white/5 rounded-[24px] p-6 border border-white/5">
            <div className="font-mono text-[12px] uppercase text-cream/50 mb-4">Активные серверы</div>
            <div className="font-grotesk text-[48px] leading-none mb-2">1</div>
            <div className="text-neon font-mono text-[12px]">+1 за этот месяц</div>
          </div>
          <div className="liquid-glass bg-white/5 rounded-[24px] p-6 border border-white/5">
            <div className="font-mono text-[12px] uppercase text-cream/50 mb-4">Сетевой трафик</div>
            <div className="font-grotesk text-[48px] leading-none mb-2">845<span className="text-[24px] text-cream/50">GB</span></div>
            <div className="text-neon font-mono text-[12px]">В пределах нормы</div>
          </div>
          <div className="liquid-glass bg-white/5 rounded-[24px] p-6 border border-white/5">
            <div className="font-mono text-[12px] uppercase text-cream/50 mb-4">Нагрузка CPU</div>
            <div className="font-grotesk text-[48px] leading-none mb-2">12<span className="text-[24px] text-cream/50">%</span></div>
            <div className="text-neon font-mono text-[12px]">Оптимально</div>
          </div>
        </div>

        <h2 className="font-grotesk text-[24px] uppercase mb-6">Ваши серверы</h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="liquid-glass bg-white/5 rounded-[32px] p-8 border border-neon/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_10px_rgba(111,255,0,0.8)]"></div>
                  <span className="font-mono text-[12px] uppercase text-neon tracking-wider">Россия, Москва</span>
                </div>
                <h3 className="font-grotesk text-[32px] uppercase">Custom Build</h3>
              </div>
              <div className="liquid-glass px-4 py-2 rounded-full border border-white/10 font-mono text-[14px]">
                192.168.0.1
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div>
                <div className="font-mono text-[10px] uppercase text-cream/50 mb-1">CPU</div>
                <div className="font-mono text-[16px]">8 vCores</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-cream/50 mb-1">RAM</div>
                <div className="font-mono text-[16px]">16 ГБ</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-cream/50 mb-1">Disk</div>
                <div className="font-mono text-[16px]">200 ГБ NVMe</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-cream/50 mb-1">Канал</div>
                <div className="font-mono text-[16px]">1 Гбит/с</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-[16px] font-mono text-[14px] uppercase tracking-wider">
                Управление
              </button>
              <button className="flex-1 border border-neon/30 text-neon hover:bg-neon/10 transition-colors py-3 rounded-[16px] font-mono text-[14px] uppercase tracking-wider">
                Оплатить
              </button>
            </div>
          </div>

          <button className="liquid-glass bg-white/5 hover:bg-white/10 transition-colors rounded-[32px] border border-white/5 border-dashed flex flex-col items-center justify-center min-h-[300px] gap-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              <Plus className="w-8 h-8 text-cream/50" />
            </div>
            <span className="font-grotesk text-[24px] uppercase text-cream/50">Развернуть новый</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
