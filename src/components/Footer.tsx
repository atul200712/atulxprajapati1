const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-sm flex items-center justify-center font-black text-dark">A</div>
          <span className="font-bold tracking-tighter text-xl uppercase">Avinash</span>
        </div>
        
        <div className="text-gray-500 text-xs font-medium">
          © {new Date().getFullYear()} AVINASH. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <a className="hover:text-brand transition-colors" href="#">Privacy</a>
          <a className="hover:text-brand transition-colors" href="#">Terms</a>
          <a className="hover:text-brand transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
