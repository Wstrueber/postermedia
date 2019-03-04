import React from 'react'
import { Consumer } from './CategoryProvider'

export const withCategories = WrappedComponent => props => (
	<Consumer>{state => <WrappedComponent {...props} {...state} />}</Consumer>
)
