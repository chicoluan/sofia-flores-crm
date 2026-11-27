'use client'

import { motion } from '@sofiaflores/ui'

export default function FlowersIntro() {
  return (
    <motion.div
      className='pointer-events-none fixed inset-0 z-50 overflow-hidden bg-[#f5f0e6]'
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.8,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      onAnimationComplete={() => {
        window.dispatchEvent(new Event('flower-intro-complete'))
      }}
    >
      {/* Left sunflower */}
      <motion.img
        src='/assets/scenes/sunflower.svg'
        alt=''
        className='absolute top-1/2 left-0 w-[85vw] max-w-none'
        initial={{ x: 0, y: '-50%' }}
        animate={{ x: '-110%', y: '-50%', rotate: -35 }}
        transition={{
          duration: 2.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Right sunflower */}
      <motion.img
        src='/assets/scenes/sunflower.svg'
        alt=''
        className='absolute top-1/2 right-0 w-[85vw] max-w-none'
        initial={{ x: 0, y: '-50%' }}
        animate={{ x: '110%', y: '-50%', rotate: 35 }}
        transition={{
          duration: 2.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ scaleX: -1 }}
      />
    </motion.div>
  )
}
