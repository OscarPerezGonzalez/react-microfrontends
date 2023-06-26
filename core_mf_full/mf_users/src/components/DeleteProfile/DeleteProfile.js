import React from 'react'
import Modal from 'react-modal'
import IconClose from '../../assets/svg/close.svg'
import { ButtonGray, ButtonPurple, TextBlack16, TextGrayMid } from '../../Styles/globals'

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

Modal.setAppElement('#root')

export const DeleteProfile = ({ modalIsOpen, closeModal, deleteProfile }) => {
	return (
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
			<div style={{ height: '150px', width: '250px' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<div />
					<img src={IconClose} alt='close' onClick={closeModal} />
				</div>
				<div>
					<TextBlack16 style={{ textAlign: 'center', marginBottom: '12px' }}>
						¿Estás seguro que quieres eliminar el perfil?
					</TextBlack16>
					<TextGrayMid style={{ textAlign: 'center', marginBottom: '18px' }}>
						Esta acción no puede ser revertida
					</TextGrayMid>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<ButtonGray onClick={closeModal}>Cancelar</ButtonGray>
					<ButtonPurple onClick={deleteProfile}>Eliminar perfil</ButtonPurple>
				</div>
			</div>
		</Modal>
	)
}
