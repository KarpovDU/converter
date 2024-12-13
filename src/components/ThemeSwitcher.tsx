"use client";

import { useTheme } from "next-themes"
import { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa"
import { IoMdSunny } from "react-icons/io"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

	if (theme == 'light') {
		return (
			<button onClick={() => setTheme('dark')}>
				<IoMdSunny className='w-8 h-8 my-4'/>
			</button>
		)
	} else {
		return (
			<button onClick={() => setTheme('light')}>
				<FaMoon className='w-8 h-8 my-4'/>
			</button>
		)
	}
};