import React from 'react'
import { stats } from '../constants'
import styles from '../styles'

const Stats = () => (
  <section className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20`}>
    {stats.map(({ id, value, title }) => (
      <div
        key={id}
        className={`m-3 flex flex-1 flex-row items-center justify-start`}
      >
        <h4 className="font-poppins xs:text-[40px] xs:leading-[53px] mr-4 text-[30px] font-semibold leading-[43px] text-white">
          {value}
        </h4>
        <p className="font-poppins xs:text-[20px] xs:leading-[26px] text-gradient text-[30px] font-normal uppercase leading-[21px]">
          {title}
        </p>
      </div>
    ))}
  </section>
)

export default Stats
