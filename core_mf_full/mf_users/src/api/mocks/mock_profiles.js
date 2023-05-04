export const profiles = [
	{
		idPerfil: '52295814',
		nombrePerfil: 'Usr IDM PANTALLA_UNICA_AsesorCCL',
		puesto: 'Asesor CCL',
		codigo: 'CCL-A-GRAL',
		DescripcionPerfil:
			'Usuarios que dan atención en las campañas: Atención a clientes, Centros de Servicio, Ventas por teléfono, Seguimiento a la entrega de pedidos',
		usuarioCreacion: 'usanchez',
		fechaCreacion: '2022-10-17T16:39:57Z',
		usuarioUltimaActualizacion: 'usanchez',
		fechaUltimaActualizacion: '2022-10-17T16:39:57Z',
	},
	{
		idPerfil: '52299875',
		nombrePerfil: 'Usr IDM PANTALLA_UNICA_AsesorCCL',
		puesto: 'Asesor CRED',
		codigo: 'CCL-A-GRAL',
		DescripcionPerfil:
			'Usuarios que dan atención en las campañas: Atención a clientes, Centros de Servicio, Ventas por teléfono, Seguimiento a la entrega de pedidos',
		usuarioCreacion: 'usanchez',
		fechaCreacion: '2022-10-17T16:39:57Z',
		usuarioUltimaActualizacion: 'usanchez',
		fechaUltimaActualizacion: '2022-10-17T16:39:57Z',
	},
	{
		idPerfil: '789065433',
		nombrePerfil: 'Usr IDM PANTALLA_UNICA_SupervisorCCL',
		puesto: 'Supervisor CRED',
		codigo: 'CCL-S-GRAL',
		DescripcionPerfil:
			'Usuarios que dan atención en las campañas: Atención a clientes, Centros de Servicio, Ventas por teléfono, Seguimiento a la entrega de pedidos',
		usuarioCreacion: 'usanchez',
		fechaCreacion: '2022-10-17T16:39:57Z',
		usuarioUltimaActualizacion: 'usanchez',
		fechaUltimaActualizacion: '2022-10-17T16:39:57Z',
	},
	{
		idPerfil: '34789999',
		nombrePerfil: 'Usr IDM PANTALLA_UNICA_SupervisorCCL',
		puesto: 'Supervisor CRED',
		codigo: 'CCL-S-CRED',
		DescripcionPerfil:
			'Usuarios que dan atención en las campañas: Atención a clientes, Centros de Servicio, Ventas por teléfono, Seguimiento a la entrega de pedidos',
		usuarioCreacion: 'usanchez',
		fechaCreacion: '2022-10-17T16:39:57Z',
		usuarioUltimaActualizacion: 'usanchez',
		fechaUltimaActualizacion: '2022-10-17T16:39:57Z',
	},
]

export const profileById = {
	idPerfil: '52295814',
	nombrePerfil: 'Analista Atencion a Clientes',
	puesto: 'LIV-00000122',
	codigo: '06-dic-2022',
	DescripcionPerfil:
		'Usuarios que dan atención en las campañas: Atención a clientes, Centros de Servicio, Ventas por teléfono, Seguimiento a la entrega de pedidos',
	configPermisos: [
		{
			idConfig: '1',
			esActivo: true,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '1',
				nombre: 'Información de compras',
			},
			submodulo: {
				id: '1',
				nombre: 'CSC',
			},
		},
		{
			idConfig: '2',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '1',
				nombre: 'Información de compras',
			},
			submodulo: {
				id: '2',
				nombre: 'Descargar ticket de compra',
			},
		},
		{
			idConfig: '3',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '1',
				nombre: 'Información de compras',
			},
			submodulo: {
				id: '3',
				nombre: 'Devolución SAP',
			},
		},
		{
			idConfig: '4',
			esActivo: true,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '1',
				nombre: 'Información de compras',
			},
			submodulo: {
				id: '4',
				nombre: 'Cancelar compras CSC',
			},
		},
		{
			idConfig: '5',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '1',
				nombre: 'Información de compras',
			},
			submodulo: {
				id: '5',
				nombre: 'Facturar compra ATG',
			},
		},
		{
			idConfig: '6',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '1',
				nombre: 'Información de compras',
			},
			submodulo: {
				id: '6',
				nombre: 'Mis compras ATG',
			},
		},
		{
			idConfig: '7',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '1',
				nombre: 'Información de compras',
			},
			submodulo: {
				id: '7',
				nombre: 'Promociones PMR',
			},
		},
		{
			idConfig: '8',
			esActivo: true,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '2',
				nombre: 'Información de crédito',
			},
			submodulo: {
				id: '8',
				nombre: 'Crédito VPL',
			},
		},
		{
			idConfig: '9',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '2',
				nombre: 'Información de crédito',
			},
			submodulo: {
				id: '9',
				nombre: 'Ejecutable VPL',
			},
		},
		{
			idConfig: '10',
			esActivo: true,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '2',
				nombre: 'Información de crédito',
			},
			submodulo: {
				id: '10',
				nombre: 'Seguro SIS',
			},
		},
		{
			idConfig: '11',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '2',
				nombre: 'Información de crédito',
			},
			submodulo: {
				id: '11',
				nombre: 'Key monitor y Gestor',
			},
		},
		{
			idConfig: '12',
			esActivo: false,
			permiso: {
				id: '1',
				nombre: 'Consulta',
			},
			modulo: {
				id: '3',
				nombre: 'Información de cliente',
			},
			submodulo: {
				id: '12',
				nombre: 'CDP / ATG',
			},
		},
		{
			idConfig: '13',
			esActivo: true,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '4',
				nombre: 'Información de clientes ATG/CDP',
			},
			submodulo: {
				id: '13',
				nombre: 'Datos personales',
			},
		},
		{
			idConfig: '14',
			esActivo: false,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '4',
				nombre: 'Información de clientes ATG/CDP',
			},
			submodulo: {
				id: '14',
				nombre: 'Teléfonos del cliente',
			},
		},
		{
			idConfig: '15',
			esActivo: false,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '4',
				nombre: 'Información de clientes ATG/CDP',
			},
			submodulo: {
				id: '15',
				nombre: 'Direcciones',
			},
		},
		{
			idConfig: '16',
			esActivo: true,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '4',
				nombre: 'Información de clientes ATG/CDP',
			},
			submodulo: {
				id: '16',
				nombre: 'Monedero electrónico',
			},
		},
		{
			idConfig: '17',
			esActivo: false,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '4',
				nombre: 'Información de clientes ATG/CDP',
			},
			submodulo: {
				id: '17',
				nombre: 'Mesa de regalos',
			},
		},
		{
			idConfig: '18',
			esActivo: true,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '4',
				nombre: 'Información de clientes ATG/CDP',
			},
			submodulo: {
				id: '18',
				nombre: 'Mis compras',
			},
		},
		{
			idConfig: '19',
			esActivo: true,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '5',
				nombre: 'Mi crédito (VPL)',
			},
			submodulo: {
				id: '19',
				nombre: 'Lista tarjetas LIV y SBB',
			},
		},
		{
			idConfig: '20',
			esActivo: false,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '5',
				nombre: 'Mi crédito (VPL)',
			},
			submodulo: {
				id: '20',
				nombre: 'Información en línea TDC',
			},
		},
		{
			idConfig: '21',
			esActivo: false,
			permiso: {
				id: '2',
				nombre: 'Creación',
			},
			modulo: {
				id: '5',
				nombre: 'Mi crédito (VPL)',
			},
			submodulo: {
				id: '21',
				nombre: 'Movimientos dentro del corte',
			},
		},
	],
}
