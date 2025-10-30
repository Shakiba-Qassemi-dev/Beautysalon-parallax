import React, { useEffect } from 'react'
import pic1 from '../assets/images/02.jpg'
import pic2 from '../assets/images/03.jpg'
import pic3 from '../assets/images/04.jpg'
import pic4 from '../assets/images/05.jpg'
import pic5 from '../assets/images/06.jpg'

export default function Cards() {
  const data=[
    {id:1, name:"BENGOLD", para:"Praesent sapien massa convallis a pellentesque nec egestas non nisi pellentesque in ipsum", img:pic1},
    {id:2, name:"NIKKI", para:"Praesent sapien massa convallis a pellentesque nec egestas non nisi pellentesque in ipsum", img:pic2},
    {id:3, name:"CANDICE LOVE", para:"Praesent sapien massa convallis a pellentesque nec egestas non nisi pellentesque in ipsum", img:pic3},
    {id:4, name:"MEGAN T", para:"Praesent sapien massa convallis a pellentesque nec egestas non nisi pellentesque in ipsum", img:pic4},
    {id:5, name:"JACK T", para:"Praesent sapien massa convallis a pellentesque nec egestas non nisi pellentesque in ipsum", img:pic5},
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const el = entry.target;
          const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateX(0)';
          }, delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-item').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = el.dataset.direction === 'left' ? 'translateX(-50px)' : 'translateX(50px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center mt-20 overflow-hidden">
      <div className="flex gap-5 justify-center flex-wrap">
        {data.map((val,i) => (
          <div
            key={val.id}
            className="w-[250px] flex flex-col gap-4 p-4 text-center scroll-item"
            data-direction={i%2===0?'left':'right'}
            data-delay={i*100}
          >
            <img src={val.img} className="w-full rounded"/>
            <h1 className="text-xl font-bold">{val.name}</h1>
            <p className="text-sm">{val.para}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
