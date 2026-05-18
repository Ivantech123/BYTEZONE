import { useState, useEffect } from 'react';
import { Mail, Twitter, Github, ChevronRight, X, Cpu, HardDrive, Infinity, Shield, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Главная', href: '#home' },
  { label: 'О нас', href: '#about' },
  { label: 'Серверы', href: '#servers' },
  { label: 'Контакты', href: '#contact' },
];

const SERVERS = [
  {
    id: 'vanguard',
    name: 'Авангард',
    price: '$5/мес',
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    shortDesc: 'Встречайте Авангард. Неутомимый первооткрыватель. Оптимальная точка старта для новых проектов и статических сайтов.',
    cpu: '2 vCores',
    ram: '2 ГБ',
    disk: '30 ГБ NVMe',
    uptime: '99.99%',
    extended: {
      network: '1 Гбит/с',
      ddos: 'Базовая защита',
      fullDesc: 'Авангард — это идеальное решение для развертывания личных проектов, блогов или легких сайтов. Благодаря быстрым дискам и современной архитектуре, ваш проект будет загружаться мгновенно.'
    }
  },
  {
    id: 'sentinel',
    name: 'Страж',
    price: '$15/мес',
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    shortDesc: 'Встречайте Страж. Непоколебимый защитник. Сбалансированная мощь для динамических веб-приложений и баз данных.',
    cpu: '4 vCores',
    ram: '8 ГБ',
    disk: '80 ГБ NVMe',
    uptime: '99.9%',
    extended: {
      network: '2 Гбит/с',
      ddos: 'Продвинутая защита L3/L4',
      fullDesc: 'Страж берет на себя серьезные нагрузки. Создан для масштабируемых веб-приложений, API-бэкендов и баз данных, где требуется гарантия стабильности и запас прочности для непредвиденных пиков трафика.'
    }
  },
  {
    id: 'titan',
    name: 'Титан',
    price: '$40/мес',
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    shortDesc: 'Встречайте Титан. Несокрушимая сила. Колоссальная вычислительная инфраструктура для корпоративных нагрузок и высокого трафика.',
    cpu: '8 vCores',
    ram: '16 ГБ',
    disk: '200 ГБ NVMe',
    uptime: '99.99%',
    extended: {
      network: '10 Гбит/с',
      ddos: 'Enterprise Защита (L7)',
      fullDesc: 'Титан — несокрушимое ядро для любой инфраструктуры. Максимальная вычислительная мощь для enterprise-проектов, высоконагруженных порталов и систем с интенсивной обработкой данных.'
    }
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedServer, setSelectedServer] = useState<typeof SERVERS[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLoading || selectedServer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading, selectedServer]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-dark"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden mb-8 shadow-[0_0_80px_rgba(111,255,0,0.15)] liquid-glass border border-white/5">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4" type="video/mp4" />
              </video>
            </div>
            <h2 className="font-grotesk text-cream text-[24px] sm:text-[32px] tracking-widest uppercase mb-6 drop-shadow-md">
              Синхронизация
            </h2>
            <div className="w-[200px] sm:w-[260px] h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-neon shadow-[0_0_10px_rgba(111,255,0,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedServer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center md:p-8 bg-dark/95 md:bg-dark/80 backdrop-blur-md"
            onClick={() => setSelectedServer(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-[100dvh] md:h-auto md:max-h-[85vh] max-w-[1000px] liquid-glass bg-dark rounded-none md:rounded-[32px] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
            >
              <button 
                onClick={() => setSelectedServer(null)} 
                className="absolute top-4 right-4 z-[60] w-10 h-10 sm:w-12 sm:h-12 bg-black/40 backdrop-blur border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all group shadow-lg"
              >
                <X className="w-5 h-5 text-cream group-hover:scale-110 transition-transform" />
              </button>

              <div className="w-full md:w-[45%] h-[40vh] min-h-[300px] md:min-h-0 md:h-auto relative shrink-0 p-4 md:p-0">
                <div className="w-full h-full relative rounded-[24px] md:rounded-none overflow-hidden">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={selectedServer.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark to-transparent md:pointer-events-none md:block hidden md:flex"></div>
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 liquid-glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/5">
                    <span className="font-condiment text-neon text-[14px] sm:text-[20px] mix-blend-exclusion">Лицо бренда</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[55%] p-5 pt-0 md:pt-12 sm:p-10 md:p-12 flex flex-col items-start justify-start md:overflow-y-auto relative z-10">
                <div className="flex w-full justify-between items-start mb-4 sm:mb-6 gap-2 sm:gap-4 mt-2 md:mt-0">
                  <h2 className="font-grotesk text-[32px] sm:text-[48px] uppercase text-cream leading-none tracking-wide">{selectedServer.name}</h2>
                  <span className="font-mono text-[20px] sm:text-[28px] text-neon font-bold">{selectedServer.price}</span>
                </div>
                
                <p className="font-mono text-[12px] sm:text-[15px] text-cream/80 mb-6 sm:mb-8 uppercase leading-relaxed">
                  {selectedServer.extended.fullDesc}
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full mb-6 sm:mb-8">
                  <div className="liquid-glass rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 bg-black/20">
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-neon opacity-80 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] sm:text-[10px] text-cream/50 uppercase tracking-wider">Процессор</span>
                      <span className="font-mono text-[12px] sm:text-[14px] text-cream font-bold">{selectedServer.cpu}</span>
                    </div>
                  </div>
                  <div className="liquid-glass rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 bg-black/20">
                    <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-neon opacity-80 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] sm:text-[10px] text-cream/50 uppercase tracking-wider">ОЗУ</span>
                      <span className="font-mono text-[12px] sm:text-[14px] text-cream font-bold">{selectedServer.ram}</span>
                    </div>
                  </div>
                  <div className="liquid-glass rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 bg-black/20">
                    <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-neon opacity-80 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] sm:text-[10px] text-cream/50 uppercase tracking-wider">SSD</span>
                      <span className="font-mono text-[12px] sm:text-[14px] text-cream font-bold">{selectedServer.disk}</span>
                    </div>
                  </div>
                  <div className="liquid-glass rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 bg-black/20">
                    <Infinity className="w-5 h-5 sm:w-6 sm:h-6 text-neon opacity-80 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] sm:text-[10px] text-cream/50 uppercase tracking-wider">Канал</span>
                      <span className="font-mono text-[12px] sm:text-[14px] text-cream font-bold">{selectedServer.extended.network}</span>
                    </div>
                  </div>
                  <div className="liquid-glass rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 bg-black/20 col-span-2">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-neon opacity-80 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] sm:text-[10px] text-cream/50 uppercase tracking-wider">DDoS Защита</span>
                      <span className="font-mono text-[12px] sm:text-[14px] text-cream font-bold">{selectedServer.extended.ddos}</span>
                    </div>
                  </div>
                </div>

                <a href="#contact" onClick={() => setSelectedServer(null)} className="mb-6 md:mb-0 mt-4 sm:mt-8 md:mt-auto w-full min-h-[56px] sm:min-h-[64px] shrink-0 rounded-full bg-gradient-to-br from-neon to-green-500 text-dark font-grotesk text-[16px] sm:text-[20px] uppercase tracking-wider hover:shadow-[0_0_30px_rgba(111,255,0,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group">
                  Развернуть сервер
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative w-full overflow-hidden">
        {/* HEADER */}
        <header 
          className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 flex justify-between items-center w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-[1831px] ${
            isScrolled ? 'py-4 mt-2 lg:mt-4' : 'py-8 mt-2 lg:mt-4'
          }`}
        >
          <div className={`font-grotesk uppercase tracking-wider text-cream transition-all duration-500 relative z-[110] ${isScrolled ? 'text-[16px]' : 'text-[20px]'}`}>
            ByteZone
          </div>
          
          <div className="hidden lg:flex justify-center flex-1">
            <motion.nav 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -2, scale: 1.01 }}
              className={`glass-float flex items-center space-x-8 xl:space-x-12 liquid-glass transition-all duration-500 group relative ${
                isScrolled ? 'rounded-[20px] px-[32px] xl:px-[40px] py-[16px]' : 'rounded-[28px] px-[40px] xl:px-[52px] py-[24px]'
              }`}
            >
              <div className="glass-reflection hidden group-hover:block" />
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className={`font-grotesk uppercase hover:text-neon transition duration-300 whitespace-nowrap relative z-10 ${isScrolled ? 'text-[12px]' : 'text-[14px]'}`}>
                  {item.label}
                </a>
              ))}
            </motion.nav>
          </div>

          <button 
            className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center text-cream bg-white/5 backdrop-blur-md rounded-full border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Empty div for right side balance since we removed socials */}
          <div className="hidden lg:block w-[120px]"></div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="fixed inset-0 z-[105] bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-grotesk uppercase text-[24px] sm:text-[32px] text-cream hover:text-neon transition duration-300"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 1: HERO */}
        <section id="home" className="relative w-full min-h-screen rounded-b-[32px] overflow-hidden bg-dark">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/40 pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-[1831px] mx-auto min-h-screen flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 py-8">
            <div className="flex-1 flex flex-col justify-center relative mt-20 lg:mt-0">
              <div className="relative w-full max-w-[780px] lg:ml-32">
                <h1 className="font-grotesk uppercase text-[32px] sm:text-[48px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1]">
                  За пределами<br />
                  и ( твоих ) привычных<br />
                  границ
                </h1>
                <span className="font-condiment text-neon text-[20px] sm:text-[28px] md:text-[40px] lg:text-[48px] absolute right-2 sm:right-12 md:-right-8 top-[30%] sm:top-[40%] -rotate-2 mix-blend-exclusion opacity-90 drop-shadow-md">
                  Облачный хостинг
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section id="about" className="relative w-full min-h-screen overflow-hidden bg-dark">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/50 pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-[1831px] mx-auto min-h-screen flex flex-col justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-24">
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-0">
              <div className="relative mb-12 lg:mb-0">
                <h2 className="font-grotesk uppercase text-[32px] sm:text-[48px] md:text-[54px] lg:text-[60px] leading-[1.1]">
                  Привет!<br />
                  Мы ByteZone
                </h2>
                <div className="absolute right-0 lg:right-[-40px] bottom-[-25px] sm:bottom-[-40px] lg:bottom-[-60px] -rotate-3 mix-blend-exclusion drop-shadow-md">
                  <span className="font-condiment text-neon text-[28px] sm:text-[40px] lg:text-[68px]">
                    ByteZone
                  </span>
                </div>
              </div>
              
              <p className="font-mono uppercase text-[14px] sm:text-[16px] text-cream max-w-[266px] leading-relaxed">
                Цифровая инфраструктура вне времени и пространства. Исследование скорости, мощи и тишины в облаке
              </p>
            </div>

            <div className="flex justify-between items-end mt-24 lg:mt-auto gap-8 overflow-hidden relative z-10">
              <p className="font-mono uppercase text-[14px] sm:text-[16px] text-cream/70 max-w-[266px] leading-relaxed">
                Цифровая инфраструктура вне времени и пространства. Исследование скорости, мощи и тишины в облаке
              </p>
              <p className="hidden lg:block font-mono uppercase text-[16px] text-cream/70 max-w-[266px] leading-relaxed">
                Цифровая инфраструктура вне времени и пространства. Исследование скорости, мощи и тишины в облаке
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 3: SERVERS */}
        <section id="servers" className="relative w-full bg-dark py-24 sm:py-32">
          <div className="w-full max-w-[1831px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-12">
              <div>
                <h2 className="font-grotesk uppercase text-[28px] sm:text-[40px] lg:text-[60px] leading-[1.1]">
                  Коллекция<br />
                  <span className="inline-block flex flex-wrap items-center mt-2 sm:mt-0 sm:ml-24 lg:ml-32">
                    <span className="font-condiment text-neon lowercase pr-3 sm:pr-4 mix-blend-exclusion drop-shadow-md">Облачных</span>
                    <span className="mt-1 sm:mt-0">серверов</span>
                  </span>
                </h2>
              </div>
              
              <button 
                onClick={() => {
                  const firstCard = document.querySelector('.server-card');
                  firstCard?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }} 
                className="group relative flex items-center gap-4 hover:opacity-80 transition pb-2"
              >
                <span className="font-grotesk text-[32px] sm:text-[48px] lg:text-[60px] leading-none">СМОТРЕТЬ</span>
                <div className="flex flex-col items-start leading-none gap-1 pt-1 sm:pt-2">
                  <span className="font-grotesk text-[20px] sm:text-[28px] lg:text-[36px] tracking-wide">ВСЕ</span>
                  <span className="font-grotesk text-[20px] sm:text-[28px] lg:text-[36px] tracking-wide">СЕРВЕРЫ</span>
                  <div className="w-full h-[6px] lg:h-[10px] bg-neon mt-2 transition-transform group-hover:scale-x-110 origin-left"></div>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVERS.map((server) => (
                <div 
                  key={server.id} 
                  onClick={() => setSelectedServer(server)} 
                  className="server-card liquid-glass rounded-[32px] p-[18px] group hover:bg-white/10 transition duration-500 cursor-pointer flex flex-col hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                >
                  <div className="flex justify-between items-center px-1 sm:px-4 mb-3 sm:mb-4 mt-1 sm:mt-2 relative z-10">
                    <h3 className="font-grotesk text-[24px] sm:text-[28px] uppercase tracking-wide text-cream">{server.name}</h3>
                    <span className="font-mono text-[16px] sm:text-[20px] text-neon">{server.price}</span>
                  </div>
                  <div className="relative w-full pb-[75%] rounded-[24px] overflow-hidden bg-black/50 mb-5 relative group-hover:ring-2 ring-white/10 transition-all">
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-700">
                      <source src={server.video} type="video/mp4" />
                    </video>
                    <div className="absolute top-4 left-4 liquid-glass rounded-full px-4 py-1.5 border border-white/5">
                      <span className="font-condiment text-neon text-[16px] mix-blend-exclusion">Лицо бренда</span>
                    </div>
                  </div>
                  
                  <p className="font-mono text-[13px] text-cream/70 uppercase mb-6 px-2 leading-relaxed min-h-[60px]">
                    {server.shortDesc}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="liquid-glass rounded-[16px] py-3 flex flex-col items-center justify-center bg-black/10">
                      <span className="font-mono text-[10px] text-cream/50 uppercase tracking-widest mb-1">CPU</span>
                      <span className="font-mono text-[14px] font-bold text-cream">{server.cpu}</span>
                    </div>
                    <div className="liquid-glass rounded-[16px] py-3 flex flex-col items-center justify-center bg-black/10">
                      <span className="font-mono text-[10px] text-cream/50 uppercase tracking-widest mb-1">RAM</span>
                      <span className="font-mono text-[14px] font-bold text-cream">{server.ram}</span>
                    </div>
                    <div className="liquid-glass rounded-[16px] py-3 flex flex-col items-center justify-center bg-black/10">
                      <span className="font-mono text-[10px] text-cream/50 uppercase tracking-widest mb-1">Disk</span>
                      <span className="font-mono text-[14px] font-bold text-cream">{server.disk.replace(' NVMe', '')}</span>
                    </div>
                  </div>

                  <div className="liquid-glass rounded-[20px] px-5 py-4 flex justify-between items-center bg-black/20 mt-auto relative z-10 group-hover:bg-white/5 transition">
                    <div className="flex flex-col">
                      <span className="font-mono text-[11px] text-cream/70 uppercase tracking-wider mb-1">Узнать больше</span>
                      <span className="font-mono text-[12px] font-bold uppercase text-neon">Подробности</span>
                    </div>
                    <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-gradient-to-br from-neon to-green-600 flex items-center justify-center shadow-lg shadow-neon/20 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-6 h-6 text-dark" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: CTA */}
        <section id="contact" className="relative w-full overflow-hidden bg-dark min-h-[60vh] sm:min-h-screen flex">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/50 pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-[1831px] mx-auto flex flex-col justify-end lg:justify-center p-6 sm:p-12 md:p-16 lg:p-24 pb-12 sm:pb-24">
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start lg:items-end gap-12 mt-auto lg:mt-0">
              
              <div className="flex lg:flex-col justify-between liquid-glass rounded-[1rem] sm:rounded-[1.25rem] pointer-events-auto">
                <a href="#" className="flex items-center justify-center w-[4rem] sm:w-[5rem] lg:w-[5.5rem] h-[4rem] sm:h-[5rem] lg:h-[5.5rem] hover:bg-white/10 transition border-r lg:border-r-0 lg:border-b border-white/10">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-cream" />
                </a>
                <a href="#" className="flex items-center justify-center w-[4rem] sm:w-[5rem] lg:w-[5.5rem] h-[4rem] sm:h-[5rem] lg:h-[5.5rem] hover:bg-white/10 transition border-r lg:border-r-0 lg:border-b border-white/10">
                  <Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-cream" />
                </a>
                <a href="#" className="flex items-center justify-center w-[4rem] sm:w-[5rem] lg:w-[5.5rem] h-[4rem] sm:h-[5rem] lg:h-[5.5rem] hover:bg-white/10 transition">
                  <Github className="w-5 h-5 lg:w-6 lg:h-6 text-cream" />
                </a>
              </div>

              <div className="flex flex-col items-end lg:items-start w-full lg:w-auto relative pt-14 lg:pt-24 mt-8 lg:mt-0">
                <div className="absolute right-0 lg:left-0 top-0 lg:-left-6 z-10 transform -rotate-3">
                  <span className="font-condiment text-neon text-[28px] sm:text-[48px] lg:text-[76px] mix-blend-exclusion drop-shadow-md">
                    Выйди за рамки
                  </span>
                </div>
                <h2 className="font-grotesk uppercase text-[24px] sm:text-[42px] md:text-[54px] lg:text-[72px] leading-[1.05] text-cream drop-shadow-lg text-right lg:text-left relative z-20 mt-4 sm:mt-6 lg:mt-8">
                  <div className="mb-2 sm:mb-4 lg:mb-6 text-neon mix-blend-exclusion">ПРИСОЕДИНЯЙСЯ.</div>
                  ОТКРОЙ СКРЫТОЕ.<br />
                  ОПРЕДЕЛИ БУДУЩЕЕ.<br />
                  СЛЕДУЙ ЗА СИГНАЛОМ.
                </h2>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}