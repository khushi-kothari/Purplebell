import Head from 'next/head'
import Image from "next/image"

//media query min-w-x means apply changes on screen greater than or equal to x

export default function Home() {

  return (
    <div>
    {/* Hero Section */}
    <div className="hero_bg">
    <div className="">
    <div className="flex flex-col items-center justify-center min-h-8 py-2">
      <Head>
        <title>Purplebell Industries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header className="text-gray-800 body-font w-full h-12">
      <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-5">
        {/* Logo */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 md:w-10 md:h-10 text-white p-2 bg-yellow-600 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl md:text-2xl font-bold text-gray-800 cursor-pointer">Purplebell Industries</span>
        </a>
        <div className="pl-10 md:pl-14 md:flex flex-row items-center">
        <nav className="flex text-xs md:text-sm lg:w-full flex-wrap items-center md:ml-auto">
          <a className="p-1 mr-5 hover:text-black cursor-pointer hover:border-b-4 hover:border-yellow-700 hover:rounded-b" href="#about">About</a>
          <a className="mr-5 hover:text-black cursor-pointer hover:border-b-4 hover:border-yellow-700 hover:rounded-b" href="#products">Products</a>
          <a className="mr-5 hover:text-black cursor-pointer hover:border-b-4 hover:border-yellow-700 hover:rounded-b" href="#contact">Contact Us</a>
          <button className="flex text-xs md:text-base max-w-max items-center bg-yellow-600 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-700 rounded md:mt-0 text-white"> Signup
        </button>
        </nav>
        
        </div>

      {/*
        {/* Mobile Logo 
        <div className="md:hidden flex items-center absolute top-8 right-8">
          <button className="mobile-menu-button" isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap = "round" strokeLinejoin="round" strokeWidth= "2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {isOpen && true (
        <div className="mobile-menu">
        <div className="md:hidden p-3 bg-gray-300 flex flex-col"></div>
          <a className="block py-1 px-4 text-sm hover:bg-gray-400">About</a>
          <a className="block py-1 px-4 text-sm hover:bg-gray-400">Where to buy</a>
          <a className="block py-1 px-4 text-sm hover:bg-gray-400">Contact Us</a>
        </div>)}
        </div> 

        {/* Mobile Menu

        <div className="md:hidden flex items-center absolute top-8 right-8">
          <button className="mobile-menu-button" isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap = "round" strokeLinejoin="round" strokeWidth= "2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div> */}

        
        </div> 
    </header>

      <main className="flex flex-col items-center w-full flex-1 px-5 text-center h-3/5">
        <section className="text-gray-600 body-font">
        <div className="container max-w-4xl mx-auto flex px-5 py-36 items-center justify-center flex-col">
          <div className="text-center">
            <h1 className="title-font mb-10 text-3xl md:text-5xl font-bold text-black">
              Welcome to {' '}
              <a className="text-yellow-700" href="#">
                Purplebell
              </a>
            </h1>
            {/*<p className="mb-8 leading-relaxed text-white">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>*/}
            <div className="flex justify-center">
              <button className="inline-flex text-s md:text-lg text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded">Button</button>
            </div>
          </div>
          {/*<img className="lg:w-2/6 mt-8 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded text-right" alt="toothbrush" src="" />*/}
          </div>
        </section>
      </main>
      <a className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-600 hover:bg-yellow-700 mb-5" href="#about">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 20"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      </a>

      </div>
      </div>
      </div>

      {/* About */}
      <section id="about" class="text-gray-600 body-font bg-gray-200 bg-opacity-40">
      <h1 className="sm:text-4xl text-3xl pt-24 font-medium text-gray-800 text-center ml-3">About</h1>
      <div className="container px-5 pb-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
    
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="mx-auto md:mr-20 my-auto">
         <Image src = "/blue2.jpg" width="200" height="250" />
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg text-justify mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a className="cursor-pointer text-yellow-700 inline-flex hover:text-yellow-800 hover:underline items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Scroll */}
      <div className="bg relative">
        <h1 className="title-font w-50 mb-10 text-3xl md:text-4xl font-bold text-gray-900 justify-center items-center md:w-80 absolute bottom-28 mx-auto md:bottom-32 md:right-28 bg-white bg-opacity-60 p-6">Brushing gets better when you {' '}
              <a className="text-yellow-700 text-5xl md:text-6xl" href="#">
                Purplebell
              </a></h1>
      </div>

      {/* Bristle Products */}
      <section id="products" className="text-gray-600 body-font bg-gray-200 bg-opacity-40">
      <h1 className="sm:text-4xl text-3xl pt-24 mb-10 font-medium text-gray-800 text-center ml-3">Products</h1>
        <div className="container px-5 pb-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img className="brush mx-auto object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1617984161716-189c889bd474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-yellow-700 inline-flex items-center cursor-pointer  hover:text-yellow-800 hover:underline text">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-yellow-700 inline-flex items-center hover:text-yellow-800 hover:underline cursor-pointer">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-700 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-yellow-700 inline-flex items-center  hover:text-yellow-800 hover:underline cursor-pointer">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll */}
      <div className="bg_1 relative">
      </div>

      {/* Aluminium Filament */}
      <div>
      <section className="text-gray-600 body-font bg-gray-200 bg-opacity-40">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="aluminium filament" src="./images/aluminium.jpeg" />
            {/*<div className="coil object-cover object-center h-full w-full" />*/}
          </div>
        </div>
      </section>
      </div>

      {/* Contact US */}
        <section id="contact" className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777264.7681065374!2d69.07544377746385!3d22.401340698493023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat%2C%20India!5e0!3m2!1sen!2sus!4v1626518989595!5m2!1sen!2sus" width="100%" height="840" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="container px-5 pt-20 pb-16 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <div className="relative mb-4">
                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-800 rounded text-lg">Submit</button>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
            </section>

        {/* Footer */}
        <footer className="text-gray-600 body-font">
          <div className="container px-5 pb-10 pt-20 md:pt-44 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex mx-auto title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl cursor-pointer">Purplebell</span>
              </a>
              {/*<p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>*/}
            </div>
            <div className="pl-10 flex-grow flex md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly">
              <div clasNames="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Third Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUCTS</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Nylon Bristles</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">PBT Bristles</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Aluminium Filaments</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 Purplebell —
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@name</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                {/* Facebook */}
                <a className="text-gray-500" href="#">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                {/* Twitter */}
                <a className="ml-3 text-gray-500" href="#">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                {/* Instagram */}
                <a className="ml-3 text-gray-500" href="#">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a className="ml-3 text-gray-500" href="#">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
    </footer>

      </div>
  )
}
