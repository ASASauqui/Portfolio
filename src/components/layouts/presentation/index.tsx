import React from 'react';
import useTyped from '../../../hooks/useTyped';
import RippleButton from '../../controls/rippleButton';
import './style.css';
import AlanImage from '../../../assets/home/alan_presentation.png';

const texts: string[] =  [
    "Full Stack Developer",
    "Artificial Intelligence Engineer",
    "Web Developer"
];

const Presentation: React.FC = () => {
    const el = useTyped(
        texts,
        100,
        80,
        {
            loop: true,
            backDelay: 1500,
            shuffle: false,
            showCursor: true
        }
    );

    return (
        <div className='bg-[#fcfcfc] h-[1000px] flex justify-center items-center'>
            <div className="grid grid-cols-12 z-[10]">
                <div className='w-full h-full col-span-12 lg:col-span-6 order-last lg:order-first flex justify-center lg:justify-end lg:px-12'>
                    <div className='w-auto sm:w-[500px] h-auto sm:h-[400px] lg:h-[500px] flex flex-col lg:justify-center px-10 sm:px-0'>
                        <div className='w-full'>
                            <div className='text-xl sm:text-2xl font-semibold text-[#644b41] tracking-wider'>Hello_</div>
                        </div>
                        <div className='w-full flex flex-wrap text-6xl sm:text-8xl font-semibold tracking-wider'>
                            <div className='mr-7 text-[#4a3931]'>I'm</div>
                            <div className='text-[#31424a]'>Alan</div>
                        </div>

                        <div className='w-full mb-[20px]'>
                            <span className='text-2xl sm:text-3xl font-semibold text-[#4a3142]' ref={el}></span>
                        </div>

                        <p className='w-full text-sm text-justify mb-[30px]'>
                            Developer focused on cleanliness, efficiency and code maintenance. Experience in developing software projects, both on the Front-End and Back-End sides, and also in practical optimization and Machine Learning projects. Ready to meet me?
                        </p>

                        <div className='w-full flex'>
                            <div className='justify-start'>
                                <RippleButton text='Hire Me' color='purple' emoji="🤝" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto sm:h-full col-span-12 lg:col-span-6 flex justify-center lg:justify-start px-10 lg:px-0 mb-5 sm:mb-0'>
                    <div className='image-container w-[300px] sm:w-[400px] lg:w-[500px] h-auto sm:h-[400px] lg:h-[500px] max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] overflow-hidden rounded-tl-[200px] rounded-tr-[200px] rounded-b-[400px] rounded'>
                        <img src={AlanImage} alt="Alan" className='w-auto h-auto lg:h-[600px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;