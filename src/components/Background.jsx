import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { label: '사용 부서', value: '운영기획팀', mono: false },
  { label: '자동화 대상', value: '캐드맵 이미지 내보내기, 품번/컬러/제품명 삽입, 라이선스 캐드', mono: false },
  { label: '도입 효과', value: '93%', sub: '시간 단축', mono: true },
  { label: '기술 스택', value: 'Illustrator JSX + Claude Code + CSV', mono: true },
  { label: '현재 버전', value: 'v5.3', sub: '안정 운영 중', mono: true },
  { label: '시즌 전체', value: '30분', sub: '이내 추출 완료', mono: true },
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
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-lime uppercase tracking-wider mb-3">Background</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">이 강의가 만들어진 배경</h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            디스커버리 운영기획팀에서 실제로 사용 중인 <span className="text-lime font-mono text-sm">CADMAP AUTOSAVE</span> 프로젝트를 기반으로 합니다.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-bg-card rounded-2xl p-6 border border-white/5 group hover:border-lime/20 transition-colors"
            >
              <p className="text-text-secondary text-xs font-mono uppercase tracking-wider mb-3">{stat.label}</p>
              <p className={`font-bold leading-tight ${
                stat.mono
                  ? 'font-mono text-2xl md:text-3xl text-lime'
                  : 'text-base md:text-lg text-white/90'
              }`}>
                {stat.value}
              </p>
              {stat.sub && (
                <p className="text-text-secondary text-sm mt-1">{stat.sub}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
