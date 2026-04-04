import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const beforeItems = [
  '캐드맵 1개씩 캡처 → 이름 변경 → 폴더 정리',
  '품번 변경 시 텍스트 하나씩 찾아 수정',
  '에셋이 폴더·메일·메신저에 흩어져 있음',
  '파트마다 같은 데이터를 따로 입력',
  '반복작업 7시간+',
]

const afterItems = [
  '스크립트 실행 한 번으로 전체 자동 내보내기',
  'CSV 하나가 모든 산출물의 데이터 소스',
  '캐드맵 → 이미지 → GTM 에셋까지 한 흐름',
  '입력은 한 번, 산출물은 자동 확장',
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
          품번, 컬러 찾아서 일일히 타이핑해서 입력
          <br />
          스타일, 컬러 이미지 하나 하나 캡처/내보내기
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

        {/* Use case examples by department */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-center text-text-secondary text-sm font-mono uppercase tracking-wider mb-8">
            일러스트레이터를 쓰는 곳이라면 어디든
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {/* 디자인팀 */}
            <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lime text-lg">&#9998;</span>
                <span className="text-white font-semibold">디자인팀</span>
              </div>
              <ul className="space-y-3">
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">컬러웨이 자동 생성</span>
                  <br />
                  <span className="text-xs">1개 디자인 → 8개 컬러 변형 자동</span>
                </li>
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">캐드맵 스타일별 이미지 내보내기</span>
                  <br />
                  <span className="text-xs">200개 스타일 일괄 PNG 추출</span>
                </li>
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">시즌 컬러 일괄 교체</span>
                  <br />
                  <span className="text-xs">매핑 테이블로 전체 색상 한번에</span>
                </li>
              </ul>
            </div>

            {/* 총무/경영지원 */}
            <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lime text-lg">&#9993;</span>
                <span className="text-white font-semibold">총무 / 경영지원</span>
              </div>
              <ul className="space-y-3">
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">명함 일괄 생성</span>
                  <br />
                  <span className="text-xs">CSV에서 이름·직책·연락처 → 템플릿 자동 배치</span>
                </li>
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">부서이동·직책변경 명함</span>
                  <br />
                  <span className="text-xs">변경분만 CSV 수정 후 재실행</span>
                </li>
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">라벨·스티커 대량 제작</span>
                  <br />
                  <span className="text-xs">SKU별 제품명·바코드 자동 생성</span>
                </li>
              </ul>
            </div>

            {/* VMD */}
            <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lime text-lg">&#9873;</span>
                <span className="text-white font-semibold">VMD / 매장운영</span>
              </div>
              <ul className="space-y-3">
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">매장 POP 일괄 제작</span>
                  <br />
                  <span className="text-xs">상품명·가격·할인율 CSV → POP 자동 배치</span>
                </li>
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">사이니지 멀티 사이즈</span>
                  <br />
                  <span className="text-xs">1개 원본 → A1/B1/현수막 자동 리사이즈</span>
                </li>
                <li className="text-white/60 text-sm">
                  <span className="text-white/80 font-medium">시즌 비주얼 교체</span>
                  <br />
                  <span className="text-xs">전 매장 텍스트·이미지 시즌별 일괄 교체</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

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
