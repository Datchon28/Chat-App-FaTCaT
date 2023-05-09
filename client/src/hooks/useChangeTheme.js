import { useEffect, useState } from "react";


function useChangeTheme() {
    const [isDark, setIsDark] = useState(() => localStorage.theme === "dark")
    const changeThemeToggle = () => {
        setIsDark(!isDark)
    }


    useEffect(() => {
        const allElement = window.document.documentElement
        const current = isDark ? "light" : "dark"
        allElement.classList.remove(current)
        const changeCurrent = isDark ? "dark" : "light"
        allElement.classList.add(changeCurrent)

        localStorage.setItem("theme", changeCurrent)


    }, [isDark])

    return [isDark, changeThemeToggle];
}

export default useChangeTheme;