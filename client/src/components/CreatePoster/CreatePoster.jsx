import React, { useState, useEffect } from 'react'
import PosterForm from './PosterForm'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'

import {
	PosterWrapper,
	PosterContainer,
	ButtonContainer,
	StyledButton,
	StyledInput,
} from './styled'
import { withCategories } from '../../context/withCategories'

const CreatePoster = ({ getCategories, categories }) => {
	const [url, setUrl] = useState('')
	const [comments, setComments] = useState('')
	const [poster, setPoster] = useState('')
	const [choice, setChoice] = useState('none')
	const [open, setOpen] = useState(false)

	useEffect(() => {
		getCategories()
	}, [])
	useEffect(() => {
		setPoster({ url, comments })
	}, [url, comments])

	function handleUrlChange(e) {
		setUrl(e.target.value)
	}
	function handleSelectChange(e) {
		setChoice(e.target.value)
	}
	function handleOpen() {
		setOpen(!open)
	}
	function handleClose() {
		setOpen(!open)
	}

	return (
		categories && (
			<PosterForm choice={choice} poster={poster}>
				<PosterWrapper>
					<PosterContainer raised={true}>
						<StyledInput
							required={true}
							type="url"
							placeholder="https://example.com"
							value={url}
							onChange={handleUrlChange}
						/>
						<Select
							style={{ height: '50px' }}
							value={choice}
							open={open}
							onOpen={handleOpen}
							onClose={handleClose}
							onChange={handleSelectChange}>
							<MenuItem value="none">
								<em>none</em>
							</MenuItem>
							{categories.map((cat, ind) => (
								<MenuItem key={ind} value={cat.category}>
									{cat.category}
								</MenuItem>
							))}
						</Select>
						<Input
							required={true}
							style={{ fontSize: '1.5rem', marginTop: '5%' }}
							type="text"
							placeholder="comments..."
							value={comments}
							multiline={true}
							rows={3}
							onChange={e => setComments(e.target.value)}
						/>
						<ButtonContainer>
							<StyledButton variant="contained" color="primary" type="submit">
								Create Poster
							</StyledButton>
						</ButtonContainer>
					</PosterContainer>
				</PosterWrapper>
			</PosterForm>
		)
	)
}
export default withCategories(CreatePoster)

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';

// const styles = theme => ({
// 	button: {
// 		display: 'block',
// 		marginTop: theme.spacing.unit * 2,
// 	},
// 	formControl: {
// 		margin: theme.spacing.unit,
// 		minWidth: 120,
// 	},
// });

// class ControlledOpenSelect extends React.Component {
// 	state = {
// 		age: '',
// 		open: false,
// 	};

// 	handleChange = event => {
// 		this.setState({ [event.target.name]: event.target.value });
// 	};

// 	handleClose = () => {
// 		this.setState({ open: false });
// 	};

// 	handleOpen = () => {
// 		this.setState({ open: true });
// 	};

// 	render() {
// 		const { classes } = this.props;

// 		return (
// 			<form autoComplete="off">
// 				<Button className={classes.button} onClick={this.handleOpen}>
// 					Open the select
//         </Button>
// 				<FormControl className={classes.formControl}>
// 					<InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
// 					<Select
// 						open={this.state.open}
// 						onClose={this.handleClose}
// 						onOpen={this.handleOpen}
// 						value={this.state.age}
// 						onChange={this.handleChange}
// 						inputProps={{
// 							name: 'age',
// 							id: 'demo-controlled-open-select',
// 						}}
// 					>
// 						<MenuItem value="">
// 							<em>None</em>
// 						</MenuItem>
// 						<MenuItem value={10}>Ten</MenuItem>
// 						<MenuItem value={20}>Twenty</MenuItem>
// 						<MenuItem value={30}>Thirty</MenuItem>
// 					</Select>
// 				</FormControl>
// 			</form>
// 		);
// 	}
// }

// ControlledOpenSelect.propTypes = {
// 	classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ControlledOpenSelect);
