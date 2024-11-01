import React from 'react'
import btn from '../Shared/css/btn.module.css'

const Button = () => {
  return (
    <div>
        <button className={`${btn.btn} text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-800 hover:shadow-lg`}>Explore More</button>
    </div>
  )
}

export default Button