import { motion } from 'framer-motion'

const MESSAGE = " We're hiring clinical team members — Apply via Contact section"
const REPEAT = 6

export default function MarqueeBanner() {
  return (
    <div
      style={{
        position: 'sticky',
        top: '80px',
        zIndex: 49,
        width: '100%',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        background: 'linear-gradient(to right, #F5F4EF, #F8F6F1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '12px 0',
      }}
    >
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,       // 👈 very slow — fully readable
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {Array.from({ length: REPEAT }).map((_, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              paddingRight: '4rem',
              fontSize: '14px',
              letterSpacing: '0.08em',
              fontWeight: 500,
              color: '#C9A35A',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {MESSAGE}
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: '#C9A35A',
                opacity: 0.7,
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
