import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./ThemeProvider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="mb-2 mt-2 ml-1 h-fit flex items-center outline-none">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="!bg-white dark:!bg-neutral-800 !border-none !outline-none"
      >
        {/* SUN = visible only in DARK mode */}
        <Sun
          className="
            h-[1.2rem] w-[1.2rem]
            text-white
            hidden dark:block
          "
        />

        {/* MOON = visible only in LIGHT mode */}
        <Moon
          className="
            h-[1.2rem] w-[1.2rem]
            text-gray-900
            block dark:hidden
          
          "
        />

        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}