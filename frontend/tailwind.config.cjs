module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    
    extend: {
      boxShadow: {
        glow: '0 8px 32px 0 rgba(124, 58, 237, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'gradient-x': 'gradientX 3s ease infinite',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
