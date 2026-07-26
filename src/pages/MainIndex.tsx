import { motion } from "framer-motion";
import Index from "../components/PasswordGenerator/Generate";

export default function MainIndex() {
  return (
    <div className="w-full h-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 0% 0%, rgba(168,85,247,0.22), transparent 35%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.18), transparent 35%)",
        }}
      />
      <img src="/Images/domingo_1779712716747.webp" alt="logo" className="absolute top-3 left-5 w-48 h-auto"/>
      <Index />
    </div>
  )
}
