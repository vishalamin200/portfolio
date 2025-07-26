

import Link from 'next/link'
import { ImLinkedin } from 'react-icons/im'
import { SiGithub } from 'react-icons/si'

const Navbar = () => {
  return (
    <nav className='fixed top-0 backdrop-blur-md w-full flex items-center justify-start md:justify-center py-5 border-b border-white/10 z-50 px-7'>
      <div className='flex items-center gap-x-6 text-md w-fit'>

        <Link href="#home" className='cursor-pointer'>Home</Link>
        <Link href="#about" className='cursor-pointer'>About</Link>
        <Link href="#projects" className='cursor-pointer'>Project</Link>
        <Link href="#contact" className='cursor-pointer'>Contact</Link>
      </div>

      <div id='icons' className='flex items-center absolute right-5 gap-x-6'>
        <a href="https://github.com/vishalamin200" className="rounded-full h-6  w-6  flex-center cursor-pointer " target="_blank" rel="noopener noreferrer">
          <SiGithub className='w-full h-full' />
        </a>

        <a href="https://www.linkedin.com/in/vishal-amin-1e" className=" h-6  w-6  flex-center cursor-pointer " target="_blank" rel="noopener noreferrer">
          <ImLinkedin className='w-full h-full' />
        </a>

      </div>

    </nav>
  )
}

export default Navbar
