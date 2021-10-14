import numeral from 'numeral'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface PropTypes {
  countTo: number
}

const AnimatedCounter = ({ countTo }: PropTypes) => {
  const [ref, inView] = useInView({ delay: 300, triggerOnce: true })

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          delay={0}
          start={0}
          end={countTo}
          useEasing
          duration={3}
          formattingFn={(v) => numeral(v).format('0.0a')}
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      ) : (
        <span>0</span>
      )}
    </div>
  )
}

export default AnimatedCounter
