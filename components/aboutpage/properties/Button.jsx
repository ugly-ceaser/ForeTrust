import React from 'react'
import btn from '../css/btn.module.css'

const Button = () => {
  return (
    <div>
        <button className={`${btn.btn}  hover:bg-red-800 hover:shadow-lg`}>Explore More</button>
    </div>
  )
}

export default Button