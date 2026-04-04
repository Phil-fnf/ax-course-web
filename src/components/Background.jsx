import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pipeline = [
  { step: '01', label: '상품기획', desc: '시즌 스타일 확정, 품번·컬러 데이터 생성' },
  { step: '02', label: '캐드맵 제작', desc: '일러스트레이터에서 스타일별 디자인 작업' },
  { step: '03', label: '에셋 자동 추출', desc: 'CADMAP AUTOSAVE로 스타일·컬러별 이미지 일괄 내보내기' },
  { step: '04', label: 'GTM 에셋 연결', desc: '추출된 에셋이 시즌 T&A 일정표에 자동 매핑' },
  { step: '05', label: 'IMC 파트 활용', desc: '브랜드MKT·시딩·VMD·이비즈가 동일 에셋으로 운영' },
  { step: '06', label: '매장 전개', desc: 'POP·카탈로그·룩북까지 하나의 데이터에서 생성' },
]

const stats = [
  { value: '93%', label: '시간 단축' },
  { value: 'v5.3', label: '안정 운영 중' },
  { value: '30분', label: '시즌 전체 추출' },
  { value: '5개 파트', label: 'IMC 연결' },
]

export default function Background() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="px-4 py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="font-mono text-sm text-lime uppercase tracking-wider mb-3">Workflow</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            개인의 자동화가 아니라
            <br />
            <span className="text-lime">조직의 워크플로우</span>를 연결합니다
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            디스커버리 운영기획팀은 GTM 일정 설계부터 IMC 5개 파트의 통합 운영까지 지원합니다.
            데이터를 한 번 입력하면, 끝에서 끝까지 흐릅니다.
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative mt-16 mb-16">
          {/* Connection line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-lime/20 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-6">
            {pipeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 mt-2">
                    <div className="w-3 h-3 rounded-full bg-lime ring-4 ring-bg" />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 md:w-[calc(50%-32px)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-bg-card rounded-xl p-5 border border-white/5 hover:border-lime/20 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        <span className="font-mono text-xs text-lime bg-lime/10 px-2 py-0.5 rounded">{item.step}</span>
                        <span className="text-white font-semibold text-sm">{item.label}</span>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Desktop center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5">
                    <div className="w-3 h-3 rounded-full bg-lime ring-4 ring-bg" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-32px)]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-6 bg-bg-card rounded-xl border border-white/5">
              <p className="font-mono text-2xl md:text-3xl font-bold text-lime">{stat.value}</p>
              <p className="text-text-secondary text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
