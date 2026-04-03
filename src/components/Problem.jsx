import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const beforeItems = [
  '캐드맵 1개씩 캡처 → 이름 변경 → 폴더 정리',
  '품번 변경 시 텍스트 하나씩 찾아 수정',
  '카탈로그 시트 수작업 레이아웃',
  '컬러별 이미지를 일일이 잘라서 저장',
  '반복작업 7시간+',
]

const afterItems = [
  '스크립트 실행 한 번으로 전체 자동 내보내기',
  'CSV 파일 하나로 일괄 교체',
  '데이터 기반 A4 시트 자동 생성',
  '컬러코드 자동 인식 → 개별 파일 내보내기',
  '30분 이내',
]

function CountUp({ target, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="inline-block"
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {target}{suffix}
        </motion.span>
      )}
    </motion.span>
  )
}

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="px-4 py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center mb-4"
        >
          아직도 수작업으로 반복 업무를
          <br className="hidden md:block" />
          진행하고 계신가요?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-text-secondary text-center text-base md:text-lg mb-16 max-w-2xl mx-auto"
        >
          스타일 1개당 2~3분, 200개면 7시간.
          <br />
          그 시간에 디자인을 한 개 더 할 수 있습니다.
        </motion.p>

        {/* Before / After columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-bg-card rounded-2xl p-8 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="text-sm font-mono text-text-secondary uppercase tracking-wider">기존 방식</span>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-bg-card rounded-2xl p-8 border border-lime/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-lime" />
              <span className="text-sm font-mono text-lime uppercase tracking-wider">이 강의 이후</span>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 md:gap-8">
            <div>
              <p className="text-4xl md:text-6xl font-extrabold text-white/30">
                <CountUp target="7" suffix="시간+" />
              </p>
              <p className="text-xs md:text-sm text-text-secondary mt-2">기존</p>
            </div>
            <span className="text-3xl md:text-5xl text-lime font-mono">&rarr;</span>
            <div>
              <p className="text-4xl md:text-6xl font-extrabold text-lime">
                <CountUp target="30" suffix="분" />
              </p>
              <p className="text-xs md:text-sm text-text-secondary mt-2">자동화 후</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
