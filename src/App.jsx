import './App.css'

function App() {

  return (
    <>
      <section className='mt-[3%] flex justify-center items-center gap-[15%]'>
        <div>
          <p className='text-center text-white mb-6 font-semibold text-xl'>Hello, I'm</p>
          <h1 className='text-center text-white font-bold text-4xl tracking-wide mb-3'>UMEH VINCENT OBIORA</h1>
          <p className='text-gray-400 text-center text-xl font-bold'>Front-end web developer</p>

          <div className="flex gap-[10%] justify-center mt-[6%]">
            <a href="" className='rounded-[10px] text-white text-lg font-semibold p-3 border-2 border-[#4db5ff]'>Download Resumé</a>
            <button className='rounded-[10px] text-white text-lg font-semibold p-3 border-2 border-[#4db5ff]' onClick={() => document.getElementById('contact-me').scrollIntoView()}>Contact me</button>
          </div>
        </div>

        <div>
          <div className="portrait h-[350px] w-[300px] rounded-tl-[12rem] rounded-tr-[12rem] mx-auto mt-[4%] relative">
            <img src="./portrait.png" alt="portrait image" className='w-[80%] absolute top-[2%] left-[50%]' />
          </div>
        </div>
      </section>

      <section id='about-me' className='mt-[4%]'>
        <h1 className='text-center text-[20px] text-white text-3xl mb-[1%]'>About me</h1>
        <p className='text-white text-lg w-[80%] mx-auto'>
          A goal-driven, innovative, ever-evolving front-end engineer building highly scalable, interactive user interfaces. I'm a passionate, goal-oriented individual with real life experience and practice seeking an opportunity to apply my arsenal of skills and experience gathered so far and also expand/learn new practices, technologies and frameworks where/when needed.
        </p>
        <p className='text-white text-lg w-[80%] mx-auto'>
          With foundational knowledge of front-end design and by employing the best practices when building for optimized performance and responsive design, I am ever ready to take on new challenges, learn and contribute to the success of your next big project.
        </p>
      </section>

      <section id='stack' className='mt-[4%]'>
        <h1 className='text-center text-[20px] text-white text-3xl mb-[1%]'>Skills and stack</h1>
        <div className="stack grid justify-center gap-x-[18%] gap-y-[40px] py-4 w-[80%] mx-auto rounded-[20px]">
          <div className='flex flex-col items-center'>
            <div className="w-[80px] bg-white">
              <img src="./html.png" alt="html" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>HTML</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px] bg-white">
              <img src="./css.png" alt="css" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>CSS</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px] bg-white">
              <img src="./javascript.png" alt="javascript" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>JavaScript</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px] bg-white flex justify-center py-2">
              <img src="./react.png" alt="react" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>React</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px] flex justify-center">
              <img src="./typescript.png" alt="typescript" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>TypeScript</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px]">
              <img src="./tailwindcss.jpg" alt="tailwind css" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>Tailwind Css</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px]">
              <img src="./firebase.png" alt="firebase" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>Firebase</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px] bg-gray-100">
              <img src="./git.png" alt="git" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>Git</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className="w-[80px]">
              <img src="./github.png" alt="github" />
            </div>
            <p className='text-lg text-gray-200 font-semibold'>Github</p>
          </div>
        </div>
      </section>

      <section id='projects' className='mt-[4%]'>
        <h1 className='text-center text-[20px] text-white text-3xl mb-[1%]'>Projects</h1>
        <div className="flex gap-x-[6%] flex-wrap gap-y-[40px] justify-center w-[80%] mx-auto py-4 rounded-[20px]">
          <div className="flex flex-col items-center">
            <div className="w-[180px]">
              <img src="./pastours.avif" alt="pastours" />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-gray-100  font-semibold text-2xl'>Pastours</p>
              <p className='text-gray-300 text-lg'>E-commerce || Shopping || Online mall</p>
              <a href="https://pastours.netlify.app" target='blank' className='text-gray-100 text-lg bg-[#2c2c6c] px-4 py-[2px] rounded-[10px]'>Visit</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[180px]">
              <img src="./pastours.avif" alt="pastours" />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-gray-100  font-semibold text-2xl'>Pastours</p>
              <p className='text-gray-300 text-lg'>E-commerce || Shopping || Online mall</p>
              <a href="https://pastours.netlify.app" target='blank' className='text-gray-100 text-lg bg-[#2c2c6c] px-4 py-[2px] rounded-[10px]'>Visit</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[180px]">
              <img src="./pastours.avif" alt="pastours" />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-gray-100  font-semibold text-2xl'>Pastours</p>
              <p className='text-gray-300 text-lg'>E-commerce || Shopping || Online mall</p>
              <a href="https://pastours.netlify.app" target='blank' className='text-gray-100 text-lg bg-[#2c2c6c] px-4 py-[2px] rounded-[10px]'>Visit</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[180px]">
              <img src="./pastours.avif" alt="pastours" />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-gray-100  font-semibold text-2xl'>Pastours</p>
              <p className='text-gray-300 text-lg'>E-commerce || Shopping || Online mall</p>
              <a href="https://pastours.netlify.app" target='blank' className='text-gray-100 text-lg bg-[#2c2c6c] px-4 py-[2px] rounded-[10px]'>Visit</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[180px]">
              <img src="./pastours.avif" alt="pastours" />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-gray-100  font-semibold text-2xl'>Pastours</p>
              <p className='text-gray-300 text-lg'>E-commerce || Shopping || Online mall</p>
              <a href="https://pastours.netlify.app" target='blank' className='text-gray-100 text-lg bg-[#2c2c6c] px-4 py-[2px] rounded-[10px]'>Visit</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[180px]">
              <img src="./pastours.avif" alt="pastours" />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-gray-100  font-semibold text-2xl'>Pastours</p>
              <p className='text-gray-300 text-lg'>E-commerce || Shopping || Online mall</p>
              <a href="https://pastours.netlify.app" target='blank' className='text-gray-100 text-lg bg-[#2c2c6c] px-4 py-[2px] rounded-[10px]'>Visit</a>
            </div>
          </div>
        </div>
      </section>

      <section id='contact-me' className='mt-[4%]'>
        <h1 className='text-center text-[20px] text-white text-3xl mb-[1%]'>Contact me</h1>
        <div className="">
          <div className="w-[35%] mx-auto">
            <a href="https://x.com/Soundtrickz" target='blank' className='bg-[#2c2c6c88] py-4 px-10 flex items-center justify-center gap-x-5 mb-3 text-white rounded-[12px]'>
              <i className="ri-twitter-fill text-[24px]"></i>
              <p>On Twitter <span className='font-semibold text-lg'>(X)</span></p>
            </a>
            <a href="mailto:maestroobika@gmail.com" className='bg-[#2c2c6c88] py-4 px-10 flex items-center justify-center gap-x-5 mb-3 text-white rounded-[12px]'>
              <i className="ri-mail-send-line text-[24px]"></i>
              <p>Send me an e-mail</p>
            </a>
              <a href="https://github.com/vincentmaestro" target='blank' className='bg-[#2c2c6c88] py-4 px-10 flex items-center justify-center gap-x-5 mb-3 text-white rounded-[12px]'>
              <i className="ri-github-fill text-[24px]"></i>
              <p>View my github</p>
            </a>
            <a href="https://www.facebook.com/soundtrickz" target='blank' className='bg-[#2c2c6c88] py-4 px-10 flex items-center justify-center gap-x-5 mb-3 text-white rounded-[12px]'>
              <i className="ri-facebook-circle-fill text-[24px]"></i>
              <p>Connect with me on Facebook</p>
            </a>
          </div>
        </div>
      </section>

      <footer className='mt-[4%] bg-[#423a6f7a] py-10'>
        <h1 className='text-center text-[20px] text-white text-3xl mb-[1%]'>Thank you!</h1>
        <p className='text-center text-white'>&copy; VinDev. All rights reserved</p>
        <nav className="flex gap-x-[4%] justify-between w-[30%] mx-auto fixed bottom-[4%] left-[50%] translate-x-[-50%] py-3 px-4 rounded-[12px] bg-[#423a6f]">
          <span className='cursor-pointer text-gray-300' onClick={() => scrollTo(0, 0)}>Top</span>
          <span className='cursor-pointer text-gray-300' onClick={() => document.getElementById('about-me').scrollIntoView()}>About me</span>
          <span className='cursor-pointer text-gray-300' onClick={() => document.getElementById('stack').scrollIntoView()}>Skills</span>
          <span className='cursor-pointer text-gray-300' onClick={() => document.getElementById('projects').scrollIntoView()}>Projects</span>
          <span className='cursor-pointer text-gray-300' onClick={() => document.getElementById('contact-me').scrollIntoView()}>Contact me</span>
        </nav>
      </footer>
    </>
  )
}

export default App
