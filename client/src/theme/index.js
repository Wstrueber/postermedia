import styles from 'styled-theming'

// App Themes
import _light from './appThemes/light'
import _dark from './appThemes/dark'

const primary = styles('mode', {
	dark: _dark.primary,
	light: _light.primary,
})

const primaryTextColor = styles('mode', {
	dark: _dark.primaryTextColor,
	light: _light.primaryTextColor,
})
const secondaryTextColor = styles('mode', {
	dark: _dark.secondaryTextColor,
	light: _light.secondaryTextColor,
})
const appBarBackground = styles('mode', {
	dark: _dark.appBarBackground,
	light: _light.appBarBackground,
})
const cardBackground = styles('mode', {
	dark: _dark.cardBackground,
	light: _light.cardBackground,
})

const theme = {
	primary,
	primaryTextColor,
	secondaryTextColor,
	appBarBackground,
	cardBackground,
}

export { theme }
