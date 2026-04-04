import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const modules = [
  {
    num: '01',
    title: '캐드맵 자동 내보내기',
    subtitle: '실전 핵심',
    items: [
      '일러스트레이터 그룹 구조 이해하기 (스타일 → 컬러 계층)',
      '스타일별 / 컬러별 이미지 자동 내보내기',
      '550 PPI 고해상도 출력 설정',
      '오류 감지 & 로그 확인하는 법',
      '실습: 시즌 캐드맵으로 전체 스타일 일괄 내보내기',
    ],
    active: true,
    video: { src: '/autosave-demo.mp4', label: '캐드맵 자동 내보내기 데모' },
  },
  {
    num: '02',
    title: '데이터 기반 자동화 — CSV 활용',
    subtitle: null,
    items: [
      'CSV 파일로 품번 일괄 교체 / 등록',
      'CSV → 캐드맵 → 라이선스캐드 자동 생성 (A4 레이아웃)',
    ],
    active: true,
    video: { src: '/license-cad-demo.mp4', label: '라이선스캐드 자동 생성 데모' },
  },
  {
    num: '03',
    title: '응용 — 자동화 범위 확장',
    subtitle: '디자인 너머로',
    items: [
      '총무: CSV → 명함 일괄 생성 자동화',
      'VMD: 매장 POP·사이니지 멀티 사이즈 자동 변환',
      '마케팅: 카탈로그 그리드 자동 배치',
      '일러스트레이터를 쓰는 곳이라면 어디든 적용 가능',
    ],
    active: false,
  },
  {
    num: '04',
    title: '클로드 코드 실전 활용법',
    subtitle: '혼자서도 할 수 있게',
    items: [
      'Claude Code 핵심 사용법 & 프롬프트 작성 팁',
      '좋은 프롬프트 vs 나쁜 프롬프트 — 실제 비교',
      '에러가 났을 때 클로드에게 디버깅 시키기',
      '라이브 데모: 참석자 요청을 현장에서 자동화',
    ],
    active: false,
  },
]

export default function Curriculum() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="px-4 py-24 md:py-32">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-lime uppercase tracking-wider mb-3">Curriculum</p>
          <h2 className="text-2xl md:text-4xl font-bold">커리큘럼</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-6">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="flex gap-6"
              >
                {/* Timeline dot - desktop */}
                <div className="hidden md:flex flex-col items-center pt-2">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${mod.active ? 'bg-lime' : 'bg-white/20'} ring-4 ring-bg`} />
                </div>

                {/* Card */}
                <div className={`flex-1 rounded-2xl p-6 md:p-8 transition-colors ${
                  mod.active
                    ? 'bg-bg-card border border-white/5'
                    : 'bg-bg-card/50 border border-white/5 border-dashed'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-md ${
                      mod.active
                        ? 'bg-lime/10 text-lime'
                        : 'bg-white/5 text-text-secondary'
                    }`}>
                      MODULE {mod.num}
                    </span>
                    {mod.subtitle && (
                      <span className="text-xs text-lime/60 font-medium">{mod.subtitle}</span>
                    )}
                    {!mod.active && (
                      <span className="text-xs text-text-secondary bg-white/5 px-2.5 py-1 rounded-md">
                        디벨롭 중
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg md:text-xl font-bold mb-4 ${mod.active ? 'text-white' : 'text-white/40'}`}>
                    {mod.title}
                  </h3>

                  {mod.items.length > 0 && (
                    <ul className="space-y-2.5">
                      {mod.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/70">
                          <span className="mt-2 w-1 h-1 rounded-full bg-lime flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {mod.video && (
                    <div className="mt-6 rounded-xl overflow-hidden border border-white/5 bg-bg">
                      <div className="px-3 py-2 border-b border-white/5 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/60" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <span className="w-2 h-2 rounded-full bg-green-500/60" />
                        <span className="font-mono text-[10px] text-text-secondary ml-2">{mod.video.label}</span>
                      </div>
                      <video
                        className="w-full aspect-video object-cover"
                        controls
                        preload="metadata"
                      >
                        <source src={mod.video.src} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
