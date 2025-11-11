const GlowingBox = ({ children, className, strongGlow = false }) => {
  const shadowClass = strongGlow ? 'shadow-glow-medium' : 'shadow-glow';
  return (
    <div
      className={`bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-10 border border-white/20 ${shadowClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowingBox;
