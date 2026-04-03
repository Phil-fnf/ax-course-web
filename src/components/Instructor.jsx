import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Instructor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="px-4 py-24 md:py-32">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-sm text-lime uppercase tracking-wider mb-3">Instructor</p>
          <h2 className="text-2xl md:text-4xl font-bold">강사 소개</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-bg-card rounded-2xl p-8 md:p-10 border border-white/5"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-lime font-mono">P</span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              전상필 <span className="text-lime font-mono text-lg">(Phil)</span>
            </h3>
            <p className="text-text-secondary text-sm font-mono mb-4">F&F 디지털본부</p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              F&F 디지털본부에서 AI &times; 디자인 자동화 프로젝트를 리드하고 있습니다.
              클로드 코드와 일러스트레이터 JSX를 결합한 CADMAP AUTOSAVE를 직접 설계하고
              현업에 적용, 팀 내 반복작업 시간을 <span className="text-lime font-semibold">93% 단축</span>했습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
