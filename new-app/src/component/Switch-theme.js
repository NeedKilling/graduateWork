import React from "react"

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matchMedia
const defaultTheme = isDarkTheme === 'dark' ? 'dark' : "light"
export const useTheme=() =>{
    const[theme,setTheme] = React.useState(localStorage.getItem('app-theme') || defaultTheme)   

    React.useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
        localStorage.setItem('app-theme',theme)
    },[theme])
    return{theme,setTheme}
}

