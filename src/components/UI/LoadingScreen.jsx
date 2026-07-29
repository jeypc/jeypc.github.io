import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50">
      {/* Premium Loader Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5
        }}
        className="w-16 h-16 bg-gradient-to-tr from-primary to-accent shadow-xl shadow-primary/25"
      />
      
      {/* Loading Text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="mt-6 text-xs font-black tracking-widest text-slate-400 uppercase"
      >
        Loading Portfolio
      </motion.span>
    </div>
  );
}
