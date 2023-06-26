import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import './_styles.css'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	border: '12px',
	p: 4,
}



const CustomModal = props => {
	const { open, value, onChange, handleSubmit } = props


	return (
		<div>
			<Modal
				open={open}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<div>
						<form onSubmit={handleSubmit}>
							<TextField
								label='Introduce ID de Avaya'
								value={value}
								onChange={onChange}
								fullWidth
								sx={{ marginBottom: '20px' }}
							/>
							<Box display={'flex'} justifyContent={'space-evenly'}>
								<Button type='submit' variant='outlined' color='success'>
									Continuar
								</Button>
								<Button variant='outlined' color='primary' type='submit'>
									Continuar sin ID AVAYA
								</Button>
							</Box>
						</form>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default CustomModal
