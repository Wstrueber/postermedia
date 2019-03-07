import { useState, useEffect } from 'react'

const defaultTheme = {
	mode: 'light',
	primary: '#e9e9e9',
	primaryTextColor: 'black',
	card: 'whitesmoke',
}

const getInitialTheme = () => {
	const savedTheme = localStorage.getItem('theme')
	return savedTheme ? JSON.parse(savedTheme) : defaultTheme
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
