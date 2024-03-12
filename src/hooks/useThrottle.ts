import { useEffect, useState, useMemo } from "react";

const useThrottle = (callback: Function, delay: number) => {
    const [throttledCallback, setThrottledCallback] = useState<Function>(() => callback);


    useEffect(() => {

        let timer: NodeJS.Timeout | null = null;

        const throttled = (...args: any[]) => {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                callback(...args);
            }, delay);
        };

        setThrottledCallback(() => throttled);

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };


    }, [callback, delay]);

    return useMemo((...args: any[]) => throttledCallback(...args), [throttledCallback]);
};

export default useThrottle;