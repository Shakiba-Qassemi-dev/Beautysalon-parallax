import React, { useEffect } from 'react'
import logo from '../assets/images/download (1).webp'
import welcome from '../assets/images/welcome.webp'
import log from '../assets/images/log.webp'
import man from '../assets/images/man.webp'
import background from '../assets/images/homepage_hero.jpg'
import Cards from './Cards'
import mans from '../assets/images/mennn.png'
import woman from '../assets/images/women.png'
import child from '../assets/images/child.png'
import Grid from './Grid'
import ghermez from '../assets/images/girl-open_times.png'
import Table from './Table'
import Booking from './Booking'
import Footer from './Footer'
import Menu from './Menu'

export default function Header() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
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
          el.style.position = 'relative';
          observer.observe(el);
        });
    
        return () => observer.disconnect();
      }, []);
    
      const scrollStyle = {opacity:0, transition:'all 0.6s ease-out', position:'relative'};
    
  return (
    <>
        <section id='sec1' className="overflow-hidden relative">          
        <img src={background} className="w-full h-auto mt-12 md:mt-0"/>
        <div className='flex justify-between sm:hidden'>
        <img src={logo} className='w-[130px] h-[80px] p-3'/>
        <Menu/>
        </div>
        <ul className=' hidden sm:flex justify-center gap-16 items-center text-[20px] text-[#ba9b86] fixed top-0 mx-auto w-full bg-white z-30'>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Our stylists</a></li>
          <li><a href='#'>Prices</a></li>
          <img src={logo} className='w-[130px] h-[80px]'/>
          <li><a href='#'>Gallery</a></li>
          <li><a href='#'>Opening times</a></li>                          
          <li><a href='#'>Contact</a></li>                          
        </ul> 
    
        <div className='absolute text-center top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
          <h1 className='md:text-6xl text-3xl text-white'>Beauty begins with great hair!</h1>
          <button className='mt-3 bg-[#f1345d] text-white px-5 py-2 text-[20px] rounded-[5px] hover:bg-amber-600 transition-[0.4s]'><a href='#'>Book Appointment</a></button>
        </div> 
      </section>
       



      <section id='sec2' className="overflow-hidden ">
      <div className='flex flex-col justify-center items-center gap-8 w-full max-w-[800px] mx-auto mt-20 scroll-item' data-direction="left" data-delay="0" style={scrollStyle}>
          <img src={welcome}/>
          <h1 className='text-6xl text-center'>Avada Hair Salon</h1>
          <p className='text-2xl text-center'>Voluptatem accusantium doloremque laudantium, totam rem aperiam...</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center w-full mt-20 gap-10 overflow-hidden'>
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-5 scroll-item' data-direction="left" data-delay="100" style={scrollStyle}>
            <h1 className='text-3xl text-[#ba9b86]'>Founder</h1>
            <h2 className='text-5xl'>David Smith</h2>
            <p className='text-xl text-center w-[60%]'>Visit our beauty salon to relax and enjoy a new, fresh look Our experienced stylists will help you find the perfect hairstyle for your face shape</p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center scroll-item' data-direction="right" data-delay="200" style={scrollStyle}>
            <img src={man} className="w-full max-w-[400px]"/>
          </div>
        </div>

       
            {/* stylist */}
        <div className='w-full flex flex-col justify-center items-center gap-1 mt-20 overflow-hidden'>
          <div className='scroll-item flex flex-col justify-center items-center gap-5' data-direction="left" data-delay="0" style={scrollStyle}>
            <h1 className='text-3xl text-[#ba9b86]'>Featured</h1>
            <h2 className='text-5xl'>Stylists</h2>
            <p className='text-xl text-center'>Your hair, our passion</p>
          </div>

            {/* cards */}

            <div className='flex flex-wrap justify-center gap-5 mt-2 overflow-hidden'>
            <Cards/>
          </div>
          </div>
     

            {/* our service */}
            <div className='w-full flex flex-col justify-center items-center gap-5 mt-20 overflow-hidden scroll-item' data-direction="left" data-delay="0" style={scrollStyle}>
          <h1 className='text-3xl text-[#ba9b86]'>Our</h1>
          <h2 className='text-5xl'>Services</h2>
          <p className='text-xl text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>     
        </div>

        <div className='w-full bg-gray-100 flex flex-wrap justify-around items-center mt-10 p-10 gap-5'>
          {['CUTTING','STYLING','COLOURING'].map((title,i)=>(
            <div key={i} className='flex flex-col gap-6 w-[250px] justify-center items-center scroll-item' data-direction={i%2===0?'left':'right'} data-delay={i*100} style={scrollStyle}>
              <img src={log} className='w-[60px]'/>
              <h1>{title}</h1>
              <p className='text-center'>Sed ut perspiciatis unde omnis iste natus error...</p>
            </div>
          ))}
        </div>

                {/* our price */}
                <div className='w-full bg-[#ceb19c] flex flex-col justify-center items-center gap-10 overflow-hidden'>
          <div className='w-full max-w-[800px] flex flex-col justify-center items-center gap-5 scroll-item py-10' data-direction="left" data-delay="0" style={scrollStyle}>
            <h1 className='text-3xl text-[#736255]'>Our</h1>
            <h2 className='text-5xl'>Prices</h2>
            <p className='text-xl text-center'>Our experienced stylists will help you find the perfect hairstyle for your face shape.</p>     
          </div>
          <div className='flex flex-wrap justify-evenly w-full mt-2 gap-5 mb-7'>
            {[{src:mans,title:'Man'},{src:woman,title:'Woman'},{src:child,title:'Child'}].map((item,i)=>(
              <div key={i} className='w-[250px] flex flex-col gap-2 justify-center items-center scroll-item' data-direction={i%2===0?'left':'right'} data-delay={i*150} style={scrollStyle}>
                <h1 className='text-4xl text-center'>{item.title}</h1>
                <img src={item.src} className='w-full max-w-[350px]'/>
              </div>
            ))}
          </div>
        </div>
           {/* our model */}
           <div className='w-full flex- flex-col'>
           <div className=' w-[40%] mx-auto flex flex-col justify-center items-center gap-5 mt-24'>
            <h1 className='text-3xl text-[#736255]'>The</h1>
            <h2 className='text-5xl'>Showcase</h2>
            <p className='text-xl text-center'>We love to showcase our clients’ beautiful transformations Visit our Instagram page to see our hairstyle showcase and get inspired We host special showcase events to present new hair techniques and products.</p>     
            </div>
           </div>
          <Grid/>
          {/* opening time */}
          <div className='w-full back2 mt-9 flex flex-col ' >
          <div className='scroll-item w-[40%] mx-auto flex flex-col justify-center items-center gap-5 mt-24' data-direction="bottom" data-delay="0" style={scrollStyle}>
            <h1 className='text-3xl text-[#736255]'>Salon</h1>
            <h2 className='text-4xl'>Opening Times</h2>
            <p className='text-xl text-center'>Our salon is open every day from 9:00 AM to 5:00 PM.</p>     
            </div>
            <div className='scroll-item flex flex-wrap w-full justify-center items-center mt-10 p-7 md:p-0 ' data-direction="left" data-delay="0" style={scrollStyle}>
                <div className='md:w-[40%] w-full'>
                    <Table/>
                </div>
                <div className='md:w-[40%] w-full flex justify-center items-center'>
                    <img src={ghermez}/>
                </div>
            </div>
          </div>

        {/* book Appointment */}
          <div className='flex flex-col justify-center items-center bg-white w-full'>
          <div className='scroll-item w-[40%] mx-auto flex flex-col justify-center items-center gap-5 mt-24' data-direction="bottom" data-delay="0" style={scrollStyle}>
            <h1 className='text-3xl text-[#736255]'>Treat Yourself</h1>
            <h2 className='text-4xl'>Book Appointment</h2>
            <p className='text-xl text-center'>Book your appointment today and feel beautiful inside and out!</p>     
            </div>
            <div className=' w-full mt-10 mb-10'>
                <Booking/>
            </div>
            </div>
            <div className='w-full mt-10'>
                <Footer/>
            </div>         
    </section>    
    </>
  )
}



