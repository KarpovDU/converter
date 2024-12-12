"use client";

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa"
import { IoMdSunny } from "react-icons/io"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

	if (theme == 'light') {
		return (
			<button onClick={() => setTheme('dark')}>
				<IoMdSunny className='w-12 h-12'/>
			</button>
		)
	} else {
		return (
			<button  onClick={() => setTheme('light')}>
				<FaMoon className='w-12 h-12'/>
			</button>
		)
	}

};