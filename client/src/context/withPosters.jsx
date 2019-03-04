import React from 'react'
import { Consumer } from './PosterProvider'

export const withPosters = WrappedComponent => props => (
	<Consumer>{state => <WrappedComponent {...props} {...state} />}</Consumer>
)
