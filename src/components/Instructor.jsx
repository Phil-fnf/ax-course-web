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
            <p className="text-text-secondary text-sm font-mono mb-5">
              F&F Process담당 AX팀 · 디스커버리 운영기획팀
            </p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              디스커버리 운영기획팀에서 GTM 일정 설계부터 IMC 통합 마케팅 운영까지,
              시즌 상품이 기획되고 매장에 나가기까지의 전 과정을 지원하고 있습니다.
            </p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5">
              브랜드마케팅·인플루언서·VMD·이비즈 등 5개 파트가 참여하는 IMC 워크플로우를 시스템화하고,
              현업의 반복 업무를 자동화하는 도구를 직접 설계·개발해 현장에 적용하고 있습니다.
              이 강의에서 다루는 CADMAP AUTOSAVE도 그 과정에서 만들어졌습니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {['GTM T&A 설계', 'IMC 시즌 운영', 'Illustrator JSX', 'Claude Code', '업무 자동화'].map((tag, i) => (
                <span key={i} className="text-xs font-mono text-lime/70 bg-lime/5 px-3 py-1 rounded-md border border-lime/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
