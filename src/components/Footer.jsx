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
        {/* Schedule + Preparation combined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-lime rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Schedule */}
            <div>
              <p className="font-mono text-xs text-bg/50 uppercase tracking-wider mb-2">Schedule</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-bg mb-6">2026년 7월 30일 (목)</h3>
              <div className="space-y-3">
                <div className="bg-bg rounded-xl px-5 py-4">
                  <p className="font-mono text-lime text-xs uppercase tracking-wider mb-1">오전 세션</p>
                  <p className="text-xl font-bold text-white">11:00 – 12:00</p>
                  <p className="text-text-secondary text-xs mt-1">30~40분 강의 + Q&A</p>
                </div>
                <div className="bg-bg rounded-xl px-5 py-4">
                  <p className="font-mono text-lime text-xs uppercase tracking-wider mb-1">오후 세션</p>
                  <p className="text-xl font-bold text-white">17:00 – 18:00</p>
                  <p className="text-text-secondary text-xs mt-1">30~40분 강의 + Q&A</p>
                </div>
              </div>
            </div>

            {/* Preparation */}
            <div>
              <p className="font-mono text-xs text-bg/50 uppercase tracking-wider mb-2">Preparation</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-bg mb-6">준비물</h3>
              <div className="space-y-3">
                {preps.map((item, i) => (
                  <div key={i} className="bg-bg rounded-xl px-5 py-4">
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-text-secondary text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
