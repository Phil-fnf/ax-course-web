import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const targets = [
  { icon: '📋', text: '일러스트레이터를 매일 쓰지만 스크립트는 한 번도 써본 적 없는 분' },
  { icon: '💬', text: '"코딩은 못 하는데 자동화는 하고 싶다"는 분' },
  { icon: '🎨', text: '일러스트레이터 외 Adobe 프로그램에 적용해보고 싶으신 분' },
  { icon: '⏱️', text: '반복작업을 줄여서 크리에이티브 영역에 몰두하고 싶으신 분' },
]

export default function CourseInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      {/* Lime band background */}
      <div className="absolute inset-0 bg-lime" />

      <div className="relative max-w-[1100px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-sm text-bg/50 uppercase tracking-wider mb-3">Schedule</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-bg mb-2">
            2026년 7월 30일 (목)
          </h2>
        </motion.div>

        {/* Schedule cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-bg rounded-2xl p-6 text-center"
          >
            <p className="font-mono text-lime text-xs uppercase tracking-wider mb-2">오전 세션</p>
            <p className="text-2xl md:text-3xl font-bold text-white">11:00 – 12:00</p>
            <p className="text-text-secondary text-sm mt-2">30~40분 강의 + Q&A</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-bg rounded-2xl p-6 text-center"
          >
            <p className="font-mono text-lime text-xs uppercase tracking-wider mb-2">오후 세션</p>
            <p className="text-2xl md:text-3xl font-bold text-white">17:00 – 18:00</p>
            <p className="text-text-secondary text-sm mt-2">30~40분 강의 + Q&A</p>
          </motion.div>
        </div>

        {/* Target audience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-bg/60 text-sm font-medium text-center mb-6">이런 분께 추천합니다</p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {targets.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 bg-bg/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-bg/10"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-bg text-sm font-medium leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
