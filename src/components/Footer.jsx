import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const preps = [
  { label: 'Adobe Illustrator', desc: 'CC 2023 이상' },
  { label: 'Claude Code', desc: '설치 방법은 강의에서 안내' },
  { label: '본인 작업 파일', desc: '일러스트레이터 실습용' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer ref={ref} className="px-4 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-[1100px] mx-auto">
        {/* Preparation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-sm text-lime uppercase tracking-wider mb-3">Preparation</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-10">준비물</h2>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            {preps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="bg-bg-card rounded-xl p-5 border border-white/5 text-center"
              >
                <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-text-secondary text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-text-secondary text-xs text-center mt-6">
            *일러스트레이터가 없어도, 참관하여 사업부별 실무자에게 전파 해주셔도 좋습니다.
          </p>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lime font-bold text-lg">F&F</span>
            <span className="text-text-secondary text-xs">AX 사내교육</span>
          </div>
          <p className="text-text-secondary text-xs text-center md:text-right">
            &copy; 2026 F&F Co., Ltd. &mdash; CADMAP AUTOSAVE by Phil
          </p>
        </div>
      </div>
    </footer>
  )
}
