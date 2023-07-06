import React from 'react';
import useTyped from '../../../hooks/useTyped';
import RippleButton from '../../controls/rippleButton';

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
        <div>
            <div className='w-auto md:w-[400px] h-[400px]'>
                <div className='w-full'>
                    <div className='text-2xl font-semibold text-[#644b41] tracking-wider'>Hello_</div>
                </div>
                <div className='w-full flex flex-wrap text-7xl font-semibold tracking-wider'>
                    <div className='mr-7 text-[#4a3931]'>I'm</div>
                    <div className='text-[#31424a]'>Alan</div>
                </div>

                <div className='w-full mb-[20px]'>
                    <span className='text-2xl font-semibold text-[#4a3142]' ref={el}></span>
                </div>

                <p className='w-full text-sm text-justify mb-[30px]'>
                    Developer focused on cleanliness, efficiency and code maintenance. Experience in developing software projects, both on the Front-End and Back-End sides, and also in practical optimization and Machine Learning projects. Ready to meet me?
                </p>

                <div className='w-full flex'>
                    <div className='justify-start'>
                        <RippleButton text='Hire Me' colorFrom='#584b6e' colorTo='#30212b' emoji="🤝" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;