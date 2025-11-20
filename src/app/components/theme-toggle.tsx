"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button onClick={toggleTheme} className=" cursor-pointer flex items-center gap-2 group" aria-label="Toggle theme">
      <div className="relative w-12 h-6 bg-white/30 rounded-full transition-colors">
        <div
          className={` font-work-sans font-medium absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
            theme === "light" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
      <span className="lg:text-base  text-xs font-medium whitespace-nowrap">{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
    </button>
  )
}
