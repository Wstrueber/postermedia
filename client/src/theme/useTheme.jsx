import { useState, useEffect } from 'react'


const getInitialTheme = () => {
	const savedTheme = localStorage.getItem('theme')
	return savedTheme ? JSON.parse(savedTheme) : {mode: 'light'}
}

const useTheme = () => {
	const [theme, _setTheme] = useState(getInitialTheme)

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme))
	}, [theme])

	return {
		...theme,
		setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
	}
}
export default useTheme
