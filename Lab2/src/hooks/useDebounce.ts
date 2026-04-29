import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        {/*start timer to update value*/}
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
{/*clear timer*/}
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}