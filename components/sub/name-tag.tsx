// components/NameTag.tsx
'use client'

import { motion } from 'framer-motion'

export default function NameTag() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-center text-[20px] md:text-[24px] font-mono"
    >
      <span className="text-[rgba(255,89,243,1)]">&lt;</span>
      <span className="text-white italic font-bold tracking-wide drop-shadow-lg">
        Diego-Liascovich
      </span>
      <span className="text-[rgba(255,89,243,1)]"> /&gt;</span>
    </motion.div>
  )
}
