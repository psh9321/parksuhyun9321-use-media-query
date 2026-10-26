import { useEffect, useState } from "react"

const useMediaQuery = (maxWidth : number, isInclusive? : boolean) => {

    const [ isResize, SetIsResize ] = useState<boolean>(() => {
        if(typeof window === "undefined") return true

        return isInclusive ? window.innerWidth <= maxWidth : window.innerWidth < maxWidth
    });

    function ResizeCallback() {
        const value = isInclusive ? window.innerWidth <= maxWidth : window.innerWidth < maxWidth;
        SetIsResize(prev => prev === value ? prev : value);
    }

    useEffect(() => {
        window.addEventListener("resize", ResizeCallback)

        return () => {
            window.removeEventListener("resize", ResizeCallback)
        }
    }, [maxWidth, isInclusive])

    return {isResize}
}

export default useMediaQuery