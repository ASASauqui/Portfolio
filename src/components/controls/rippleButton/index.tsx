import React from 'react';
import './style.css';

interface ListElementProps {
    text: string;
    colorFrom: string;
    colorTo: string;
    emoji?: string;
    time?: number;
    onClick?: Function;
}

const RippleButton: React.FC<ListElementProps> = ({text, colorFrom, colorTo, emoji, time, onClick}) => {
    const rippleTime = time ? time : 1000;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonCoords = e.currentTarget.getBoundingClientRect();

        const newRipple  = document.createElement("span");
        newRipple.classList.add("ripple-effect");
        newRipple.style.left = `${e.clientX - buttonCoords.left}px`;
        newRipple.style.top = `${e.clientY - buttonCoords.top}px`;

        e.currentTarget.appendChild(newRipple)

        setTimeout(() => {
            newRipple.remove();
        }, rippleTime);

        onClick && onClick();
    };

    return (
        <>
            <button className={`relative mx-auto w-[150px] h-[50px] flex justify-center bg-gradient-to-br from-[${colorFrom}] to-[${colorTo}] items-center rounded-[5px] hover:-translate-y-1 shadow-2xl cursor-pointer overflow-hidden transition duration-300 ease-out`} onClick={handleClick}>
                <a className="text-center text-[13px] text-white font-semibold mr-1">{text}</a>

                {emoji ?
                    <div className="text-[20px]">{emoji}</div>
                :   ""}
            </button>
        </>
    );
};

export default RippleButton;
