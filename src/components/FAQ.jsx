import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    q: '코딩을 전혀 몰라도 괜찮나요?',
    a: '네. 이 강의의 핵심이 "코딩 없이 자동화"입니다. 클로드 코드가 코드를 작성하고, 여러분은 실행만 합니다.',
  },
  {
    q: '일러스트레이터 이외의 프로그램에도 적용 가능한가요?',
    a: '기본 원리(AI에게 자동화 스크립트를 요청하는 방식)는 포토샵, 인디자인, 엑셀 VBA 등 다른 도구에도 동일하게 적용됩니다.',
  },
  {
    q: '강의 시간은 얼마나 되나요?',
    a: '30~40분 진행 후 Q&A 세션 진행. 오전(11시)과 오후(17시) 두 세션으로 운영됩니다.',
  },
  {
    q: '실습 파일이 제공되나요?',
    a: '네. 샘플 캐드맵 파일, CSV 템플릿, 완성 스크립트를 모두 제공합니다.',
  },
]

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="flex items-center gap-4">
          <span className="font-mono text-lime/40 text-sm">Q{index + 1}</span>
          <span className="text-white text-base md:text-lg font-medium group-hover:text-lime transition-colors">
            {faq.q}
          </span>
        </span>
        <span className={`text-lime text-xl font-mono flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/60 text-sm md:text-base leading-relaxed pb-6 pl-6 md:pl-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section ref={ref} className="px-4 py-24 md:py-32">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-sm text-lime uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-2xl md:text-4xl font-bold">자주 묻는 질문</h2>
        </motion.div>

        <div className="bg-bg-card rounded-2xl px-6 md:px-8 border border-white/5">
          {isInView && faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
