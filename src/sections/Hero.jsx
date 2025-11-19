import ComingSoon from "./ComingSoon"

const Hero = () => {
  return (
   <section className = 'hero-section'>
        <div className='size-full mask-wrapper'>
          <img src='/images/hero-bg.webp' 
          alt='GTA VI backgroung Image'className = 'scale-out' />
          <img src='/images/hero-text.webp' alt='GTA VI Logo' className = 'title-logo fade-out' />
          <img src='/images/watch-trailer.png' alt='trailer' className =' trailer-logo fade-out' />
        </div>
        <div className='play-img fade-out'>
          <img src='/images/play.png' alt='play' className='w-7 ml-1' />
        </div>
        <div>
          <img src='/images/big-hero-text.svg' alt='logo' className='size-full object-cover mask-logo' />
        </div>
        <div className='fake-logo-wrapper'>
          <img src='/images/big-hero-text.svg' alt='logo' className='overlay-logo' />
        </div>
        <ComingSoon />
   </section>
  )
}

export default Hero 