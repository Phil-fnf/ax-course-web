import { motion } from 'framer-motion'

const painPoints = [
  { title: '에셋이 여기저기 흩어짐', desc: '폴더·메일·메신저에 분산' },
  { title: '같은 데이터 반복 입력', desc: '품번·컬러를 매번 타이핑' },
  { title: '파트마다 따로 작업', desc: '기획→디자인→마케팅 단절' },
  { title: '정합성 수작업 체크', desc: '오타·누락 눈으로 확인' },
]

const tags = ['이미지 내보내기', 'CSV 데이터 자동 변환', '원하는 형식에 맞게 대지 생성']

function AiIcon() {
  return (
    <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#330000] flex items-center justify-center flex-shrink-0 shadow-lg">
      <span className="font-mono text-[#FF9A00] text-xl md:text-3xl font-bold tracking-tight">Ai</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Side vertical text - desktop only */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-10"
      >
        <p className="writing-vertical font-mono text-xs tracking-[0.3em] text-text-secondary uppercase select-none">
          Automate the boring stuff
        </p>
      </motion.div>

      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute top-8 left-4 md:left-8 text-sm text-text-secondary font-mono"
      >
        F&F&nbsp;&nbsp;AX&nbsp;&nbsp;전상필 담당
      </motion.p>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[900px] bg-lime rounded-3xl p-8 md:p-12 lg:p-14"
      >
        {/* Tag badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span className="bg-bg/10 backdrop-blur-sm text-bg font-medium text-sm md:text-base px-5 py-2 rounded-full border border-bg/10">
            클로드코드 &times; 일러스트레이터
          </span>
        </motion.div>

        {/* Headline + Ai icon row */}
        <div className="flex items-start justify-between gap-3 md:gap-6 mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-bg text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight"
          >
            반복작업은
            <br />
            Claude에게 맡기고
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <AiIcon />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-bg/70 text-lg md:text-xl mb-3"
        >
          크리에이티브 워크에 집중하세요.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-bg/50 text-sm md:text-base mb-10"
        >
          흩어진 작업을 하나로 연결하고, 기획부터 매장까지 끊기지 않는 워크플로우를 만듭니다.
        </motion.p>

        {/* Pain points */}
        <div className="mb-8">
          <p className="text-bg/60 text-sm font-medium mb-4">이런 분께 추천합니다</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                className="bg-bg/90 rounded-xl px-4 py-3"
              >
                <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-text-secondary text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <p className="text-bg/60 text-sm font-medium mb-3">
            Claude Code가 스크립트를 작성하고 실행까지
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-bg/10 text-bg text-xs md:text-sm font-medium px-4 py-2 rounded-lg border border-bg/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
