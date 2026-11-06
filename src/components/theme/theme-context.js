import { createContext, useContext } from 'react'

export const ThemeContext = createContext({ theme: 'light', toggle: () => {} })

export const useTheme = () => useContext(ThemeContext)
