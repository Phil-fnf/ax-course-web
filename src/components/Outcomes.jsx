import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const outcomes = [
  '캐드맵을 클릭 한 번으로 스타일별 & 컬러별 이미지 내보내기',
  'CSV 파일 하나로 문서 전체의 텍스트를 일괄 교체',
  '데이터 기반 카탈로그 시트를 자동 생성',
  '클로드 코드에게 "이거 자동화해줘"라고 말해서 새로운 스크립트 만들기',
  '디자인팀의 에셋이 GTM/IMC 파트에 자동으로 연결되는 구조 이해',
  '부서 간 반복 전달 작업 제거 — 하나의 데이터가 여러 산출물로 확장',
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function Outcomes() {
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
          <p className="font-mono text-sm text-lime uppercase tracking-wider mb-3">Outcomes</p>
          <h2 className="text-2xl md:text-4xl font-bold">수강 후 여러분이 할 수 있는 것</h2>
        </motion.div>

        <div className="space-y-4">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-bg-card rounded-xl px-6 py-5 border-l-2 border-lime/40 hover:border-lime transition-colors"
            >
              <CheckIcon />
              <p className="text-white/85 text-sm md:text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
