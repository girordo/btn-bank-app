import React from 'react'

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient font-poppins text-primary py-4 px-6 text-[18px] font-medium outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  )
}

export default Button
