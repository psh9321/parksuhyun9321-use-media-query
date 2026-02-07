import { useEffect, useState } from "react"

const useMediaQuery = (maxWidth : number) => {

    const [ isResize, SetIsResize ] = useState<boolean>(() => {
        if(typeof window === "undefined") return true
        return window.innerWidth < maxWidth
    });

    function ResizeCallback() {
        const value = window.innerWidth < maxWidth;
        SetIsResize(prev => prev === value ? prev : value);
    }

    useEffect(() => {
        window.addEventListener("resize", ResizeCallback)

        return () => {
            window.removeEventListener("resize", ResizeCallback)
        }
    }, [maxWidth])

    return {isResize}
}

export { useMediaQuery }