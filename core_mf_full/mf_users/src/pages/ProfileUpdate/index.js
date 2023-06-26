import React from 'react'
import { Container } from '@mui/material'
import { ButtonPurple, Separator } from '../../Styles/globals'
import { orderKeysOrganize } from '../../utils/tools'
import { NavBackActions } from '../../components/NavBackActions'
import { PermissionsSelect } from '../../components/PermissionsSelect'
import { ProfileForm } from '../../components/ProfileForm'
import { useProfileUpdate } from '../../hooks/useProfileUpdate'
import { PATH_PROFILES } from '../../constants/environments'
import { HeaderPath } from '../../components/HeaderPath'

export const ProfileUpdate = () => {
	const { dataPermissions, formData, handleChange, setFormData, updatePermissions, value } = useProfileUpdate()

	return (
		<>
			<HeaderPath path1='Configuraciones' path2='Editar perfil' />
			<Separator />
			<Container>
				<NavBackActions
					action={<ButtonPurple type='submit'>Guardar cambios</ButtonPurple>}
					textBack='Editar perfil'
					linkBack={PATH_PROFILES}
				/>
				<ProfileForm formData={formData} setFormData={setFormData} />
				<PermissionsSelect
					value={value}
					handleChange={handleChange}
					dataPermissions={dataPermissions}
					orderKeysOrganize={orderKeysOrganize}
					updatePermissions={updatePermissions}
				/>
			</Container>
		</>
	)
}
