import React, { useState } from 'react'
import Modal from 'react-modal'
import { ButtonGray, ButtonPurple, TextBlack16 } from '../../Styles/globals'
import IconClose from '../../assets/svg/close.svg'
import { TextInput } from '../UI/TextInput'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

Modal.setAppElement('#_modal')

export const AddProfile = ({ modalIsOpen, closeModal, createProfile }) => {
	const [formData, setFormData] = useState({
		nombrePerfil: '',
		codigo: '',
		unidadNegocio: '',
		DescripcionPerfil: '',
	})

	return (
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
			<div style={{ height: '340px', width: '350px' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<TextBlack16>Agregar nuevo perfil</TextBlack16>
					<img src={IconClose} alt='close' onClick={closeModal} />
				</div>
				<div style={{ marginTop: '20px' }}>
					<TextInput
						name='nombrePerfil'
						id='nombrePerfil'
						label='Nombre el perfil'
						value={formData.nombrePerfil}
						onChange={e => setFormData({ ...formData, nombrePerfil: e.target.value })}
					/>
					<TextInput
						name='codigo'
						id='codigo'
						label='Código'
						value={formData.codigo}
						onChange={e => setFormData({ ...formData, codigo: e.target.value })}
					/>
					<TextInput
						name='unidadNegocio'
						id='unidadNegocio'
						label='Unidad de negocio'
						value={formData.unidadNegocio}
						onChange={e => setFormData({ ...formData, unidadNegocio: e.target.value })}
					/>
					<TextInput
						name='DescripcionPerfil'
						id='DescripcionPerfil'
						label='Descripción'
						value={formData.DescripcionPerfil}
						onChange={e => setFormData({ ...formData, DescripcionPerfil: e.target.value })}
					/>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<ButtonGray onClick={closeModal}>Cancelar</ButtonGray>
					<ButtonPurple onClick={createProfile}>Crear perfil</ButtonPurple>
				</div>
			</div>
		</Modal>
	)
}
