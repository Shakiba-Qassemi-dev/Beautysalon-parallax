import React from 'react'
import img1 from '../assets/images/wedding_salon_service.jpg'
import img2 from '../assets/images/gallery_image_2.jpg'
import img3 from '../assets/images/gallery_image_4.jpg'
import img4 from '../assets/images/1414_01.jpg'
import img5 from '../assets/images/gallery_image_5.jpg'
import img6 from '../assets/images/gallery_image_3.jpg'
export default function Grid() {
  return (
    <>
    <main className="w-full mt-20 grids">
      <div><img src={img1}/></div>
      <div><img src={img2}/></div>
      <div><img src={img3}/></div>
      <div><img src={img4}/></div>
      <div><img src={img5}/></div>
      <div><img src={img6}/></div>
    </main>
    </>
    
  )
}

