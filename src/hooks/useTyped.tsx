import { useRef, useEffect } from 'react';
import Typed, { TypedOptions } from "typed.js";

const useTyped = (strings: string[], typedSpeed: number, backSpeed: number, extra?: TypedOptions) => {
    const el = useRef<HTMLElement | null>(null);
    const typed = useRef<Typed | null>(null);

    useEffect(() => {
        const options = {
            strings,
            typeSpeed: typedSpeed,
            backSpeed: backSpeed,
            ...extra
        };

        typed.current = new Typed(el.current || "", options);

        return () => {
            typed.current?.destroy();
        }
    }, []);

    return el;
};

export default useTyped;
