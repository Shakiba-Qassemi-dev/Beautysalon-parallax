import React from 'react'
import { useState, useRef } from 'react'

export default function Menu() {
  const [flag, setFlag] = useState(3)
  const menuRef = useRef(null)

  const para = (s) => {
    if (flag % 2 === 0) {
      s.children[1].style.transform = 'translateX(200px)'
      s.children[0].style.transform = 'rotate(45deg)'
      s.children[2].style.transform = 'rotate(-45deg)'
      menuRef.current.style.right = '0px'
    } else {
      s.children[1].style.transform = 'translateX(0px)'
      s.children[0].style.transform = 'rotate(0deg)'
      s.children[2].style.transform = 'rotate(0deg)'
      menuRef.current.style.right = '-700px'
    }
    setFlag(flag + 1)
  }





  return (
    <>
           <div className='ham' onClick={(e) => para(e.currentTarget)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className='items' ref={menuRef}>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Our stylists</a></li>
                <li><a href='#'>Prices</a></li>
                <li><a href='#'>Gallery</a></li>
                <li><a href='#'>Opening times</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
    </>
  )
}
