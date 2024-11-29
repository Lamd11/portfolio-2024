import React from 'React';

import { BackgroundBeams } from '@/components/ui/background-beams';
//import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
const Hero = () => {

    return (
        <div className='relative flex h-screen flex-col items-center justify-center bg-white'>
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white  [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black' />
            <p className='text-s text-neutral-600 dark:text-neutral-200 sm:text-base'>
                Hi, I'm Daniel. An aspiring developer.
            </p>
            <TypewriterEffectSmooth options={{
                strings: ['React.JS ', 'TailwindCSS ', 'Java '],
                autoStart: true,
                loop: false
            }} />
            <div className="z-10 flex flex-col items-center space-x-0 space-y-4 md: flex-row md:space-x-4 md: space-y-0">
                <Link href="https://drive.google.com/file/d/1iO42FDTgDb96_FszY46Sdi9wTN9r8AsU/view?usp=sharing">
                    <Button>Download CV</Button>
                </Link>
                <Link href="#contact-me">
                    <Button variant="secondary">Contact Me</Button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    );
}

export default Hero