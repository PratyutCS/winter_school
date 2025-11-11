const GlowingBox = ({ children, className }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-10 border border-white/20 shadow-glow ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowingBox;
