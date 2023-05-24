import React from 'react'
import Menu from "../Assets/Hamburger Menu.svg";
import Logo1 from "../Assets/Logos/JP Morgan.svg"
import Logo2 from "../Assets/Logos/Samsung.svg"
import Logo3 from "../Assets/Logos/Tinder.svg"
import Logo4 from "../Assets/Logos/Verizon.svg"
import Logo5 from "../Assets/Logos/Visa.svg"
import Logo6 from "../Assets/Logos/Walmart.svg"
import gallery1 from "../Assets/Spense.png"
import gallery2 from "../Assets/YelpCamp.png"
import icon1 from "../Assets/Social Icons/Github.svg"
import icon2 from "../Assets/Social Icons/Linkedin.svg"
import icon3 from "../Assets/Social Icons/Twitter.svg"

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
]

const gallery = [
  {
    name: 'Spense.com',
    description: 'Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they will get paid. Project in collaboration with Codewell.cc',
    image: gallery1
  },
  {
    name: 'YelpCamp.com',
    description: 'Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowds favorite in 2021',
    image: gallery2
  }
]

const footer = [
  icon1,
  icon2,
  icon3
]

function App() {
  return (
    // container
    <div className='bg-primary h-full w-screen font-prata text-secondary'>
      {/* nav */}
      <div className='flex justify-between items-center py-6 px-4 md:px-28'>
        <h1 className='text-lg'>Johnathan Specter</h1>
        <img src={Menu} alt="Menu" />
      </div>
      {/* part 1 */}
      <div className='py-6 px-4 flex flex-col md:px-28'>
        <h1 className='text-3xl leading-[45px] mb-4' >Helping companies build better, scalable software.</h1>
        <p className='opacity-50 font-inter text-base' >Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook, and more.</p>
        {/* logos */}
        <div className='flex flex-wrap my-10 justify-center items-center px-3' >
          {logos.map(logo => (
            <img src={logo} alt="logo" key={logo} className='w-24 my-3 mx-3' />
          ))}
        </div>
        {/* gallery */}
        {gallery.map(obj => (
          <div key={obj.name} className='flex flex-col my-6'>
            <img src={obj.image} alt={obj.name} className='object-cover mb-6' />
            <h1 className='text-3xl mb-3 underline' >{obj.name}</h1>
            <p className='text-base opacity-50 font-inter'>{obj.description}</p>
          </div>
        ))}
      </div>
      {/* part 2 */}
      <div className='bg-tertiary my-4 py-12 px-4 font-inter text-base md:px-28'>
        <h1 className='text-3xl font-prata mb-4' >A co-founder at one of the world's largest communities.</h1>
        <p className='opacity-50 mb-8'>The combined experience I have working at the top Fortune 500 companies has allowed me to develop a skillset that helps me in not just development, but in every aspect of any business.</p>
        <p className='opacity-50 mb-12'>I'm proud to announce that I am now working at one of the world's largest communities teaching young minds about how to self yourself as a developer and open them to a whole new world of opportunites</p>
        <p className='opacity-50 mb-6'>As a developer, you have everything available to you and all that's holding you back is yourself</p>
        <p className='opacity-50 mb-8'>A quote i live by perfectly ilustrates what i mean.</p>
        <p className='opacity-50 mb-8'>"How big would you dream, if you knew you wouldn't fail" You're already gone through the hardest parts being a developer, it's time to elevate your skills and become a leader in something you're passionate about</p>
        <p className='opacity-50'>I'm happy to chat over coffee some time about how I can help your company</p>
      </div>
      {/* part 3 */}
      <div className='bg-primary px-4 py-12 md:px-28'>
        <h1 className='text-4xl leading-[50px]'>Interested in working with me?</h1>
        <p className='font-inter text-base opacity-50 my-3'>I'm active on all social media platforms listed below, but you can also send me an email and i will get back to you within 24-48 hours</p>
        <button className='bg-quaternery h-14 rounded-none text-primary font-prata text-base hover:border hover:border-quaternery hover:bg-transparent hover:text-quaternery transition-all'>Get in touch</button>
      </div>
      {/* footer */}
      <div className='bg-tertiary flex justify-between px-4 items-center py-6 md:px-28'>
        <h1 className='text-lg'>Jonathon Specter</h1>
        <div className='flex justify-center items-center space-x-4'>
          {footer.map(obj => (
            <img src={obj} alt='icon' key={obj} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App