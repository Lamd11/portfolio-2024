import React from 'react';
import Typewriter from "typewriter-effect";


const Hero = () => {

    return (
        <div className='relative flex h-screen flex-col items-center justify-center bg-white'>
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black' />
            <p className='text-s text-neutral-600 dark:text-neutral-200 sm:text-2xl'>
                Hi, I'm Daniel. An aspiring developer.
            </p>
            <div>

                <Typewriter
                    repeatType="reverse"
                    repeat="Infinity"
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("<span class='text-4xl'>I'm proficient in </span>")
                            .pauseFor(250)
                            .typeString("<span class='text-4xl font-bold text-blue-500'>Java</span>")
                            .pauseFor(500)
                            .deleteChars(4)
                            .pauseFor(250)
                            .typeString("<span class='text-4xl font-bold text-green-500'>TailWindCSS</span>")
                            .pauseFor(500)
                            .deleteChars(11)
                            .pauseFor(250)
                            .typeString("<span class='text-4xl font-bold text-red-500'>React</span>")
                            .start();
                    }}
                />

            </div>

            
            <div className="md: z-10 flex flex-row flex-col items-center space-x-0 space-y-0 space-y-4 md:space-x-4">
                
            </div>
        </div>
    );
}

export default Hero;