import { useEffect, useState } from "react";


function useDebounce(value, delay) {
    const [debounce, setDebouce] = useState(value)

  useEffect(() => {
        const timer = setTimeout(() => setDebouce(value), delay)

        return () => clearTimeout(timer)
    
    },[value, delay])
   
    return debounce
}

export default useDebounce;