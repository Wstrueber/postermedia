import React, { useEffect } from 'react'
import { CategoriesWrapper } from './styled'
import { withCategories } from '../../context/withCategories'
import Category from './Category'

const Categories = ({ getCategories, categories }) => {
	useEffect(() => {
		getCategories()
	}, [])

	return (
		categories && (
			<>
				<div
					style={{
						marginTop: '80px',
						textAlign: 'center',
					}}>
					<h1>CATEGORIES</h1>
				</div>
				<CategoriesWrapper>
					{categories.map((cat, ind) => (
						<Category key={ind} image={cat.image} category={cat.category} />
					))}
				</CategoriesWrapper>
			</>
		)
	)
}
export default withCategories(Categories)
