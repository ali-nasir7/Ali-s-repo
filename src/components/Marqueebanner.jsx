import { motion } from 'framer-motion'

const MESSAGE = 'We are hiring clinical team members — please see the Contact section'
const REPEAT = 8

export default function MarqueeBanner() {
  return (
    <div
      style={{
        position: 'sticky',
        top: '80px', // navbar height
        zIndex: 49,
        width: '100%',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(31,41,55,0.07)',
        backgroundColor: 'rgba(245,244,239,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        paddingTop: '9px',
        paddingBottom: '9px',
      }}
    >
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 15,
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
              gap: '1.2rem',
              paddingRight: '3.5rem',
              fontSize: '10px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              fontWeight: 300,
              color: '#B8977E',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {MESSAGE}
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                backgroundColor: '#B8977E',
                flexShrink: 0,
                opacity: 0.5,
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  )
}